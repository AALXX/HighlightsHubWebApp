import fs from "fs";
import { Request, Response, NextFunction } from 'express';

import logging from "../../config/logging";
import { Connect, Query } from "../../config/mysql";
// import ChanelManager from "../ChanelManager/ChanelManager";
import GetUserPublicTokenTool from "../../CommonFunctions/GetUserTokenTools/GetUserPublicToken"

const NAMESPACE = 'VideoPlayerManagerService';

//*Send a specifc video to fron-end
const SendTheVideo = (req: Request, res: Response, next: NextFunction) => {
  const range = req.headers.range;

  if (!range) {
    res.status(400).send("Requires Range Headder");
  }

  const GetVideoByTokenQueryString = `SELECT * FROM videos WHERE VideoToken="${req.params.VideoToken}";`;

  Connect()
    .then(connection => {

      Query(connection, GetVideoByTokenQueryString).then(results => {

        let data = JSON.parse(JSON.stringify(results));


        const Video = data[0];

        if (Video === "" || Video === null) {
          return (
            res.json(
              {
                VideoDoesentExist: true,
              }
            )
          )
        }

        const videoPath = Video.VideoPath;
        const videoSize = fs.statSync(videoPath).size;

        //* parse range
        const chnuk_size = 1 * 1e+6; //* 1mb

        if (range != undefined) {

          const start = Number(range.replace(/\D/g, ""));
          const end = Math.min(start + chnuk_size, videoSize - 1);
          const contentLenght = end - start + 1;

          const headers = {
            "Content-Range": `bytes ${start} - ${end} / ${videoSize}`,
            "Accept-Ranges": "bytes",
            "Content-Lenght": contentLenght,
            "Content-Type": "video/mp4",
          };

          res.writeHead(206, headers);

          const videoStream = fs.createReadStream(videoPath, {
            start,
            end,
          });

          videoStream.pipe(res);

        } else {

          return res.status(404);
        }

      }).catch(error => {
        logging.error(NAMESPACE, error.message, error);
        return res.status(500).json({
          message: error.message,
          error
        });
      }).finally(() => {
        connection.end();
      });

    }).catch(error => {
      logging.error(NAMESPACE, error.message, error);
      return res.status(500).json({
        message: error.message,
        error
      });
    });
}

//* Send RandomVideo
// const GetRandomVideoToken = (req: Request, res: Response, next: NextFunction) => {
//   const getRandomVideosQuerySttring = `SELECT * FROM videos ORDER BY RAND() LIMIT 1`;

//   Connect()
//     .then(connection => {

//       Query(connection, getRandomVideosQuerySttring).then(results => {

//         let data = JSON.parse(JSON.stringify(results));

//         if (Object.keys(data).length === 0) {
//           return res.status(202).json({
//             error: true,
//             message: "a error has occured"
//           })
//         }

//         ChanelManager.GetChanelInformatios(data[0].PublicChanelToken, false, (err: boolean, ChanelData: any) => {

//           if (err) {
//             logging.error(NAMESPACE, "A ERROR HAS OCCURED AT VIDEO PLAYER MANAGER SERVICE ");
//             return res.status(202).json({
//               error: true,
//               message: "a error has occured"
//             })
//           }

//           const VideoDatas = {
//             error: false,
//             VideoToken: data[0].VideoToken,
//             VideoLikes: data[0].VideoLikes,
//             VideoTitle: data[0].VideoTitle,
//             ChanelNameFromVideo: ChanelData.ChanelName,
//             ChanelPublicToken: ChanelData.ChanelPublicToken,

//           }

//           return res.status(202).json(VideoDatas);

//         });

//       }).catch(error => {
//         logging.error(NAMESPACE, error.message, error);
//         return res.status(500).json({
//           message: error.message,
//           error
//         });
//       }).finally(() => {
//         connection.end();
//       });

//     }).catch(error => {
//       logging.error(NAMESPACE, error.message, error);
//       return res.status(500).json({
//         message: error.message,
//         error
//       });
//     });
// }




//*Check If The User Liked The Video
const UserLikedTheVideoCheck = (UserPrivateToken: string, VideoToken: string, res: any, callback: any) => {

  if (UserPrivateToken === null && VideoToken === null && UserPrivateToken === undefined && VideoToken === undefined) {
    callback(true, null);
  }

  GetUserPublicTokenTool.GetUserPublicTokenByPrivateToken(UserPrivateToken, (err: boolean, PublicUserToken: string) => {
    if (err) {
      callback(true, null);

    }

    const GetUserIdAndVideoId = `SELECT * FROM likes_class WHERE VideoToken="${VideoToken}" AND UserPublicToken="${PublicUserToken}"`;

    Connect()
      .then(connection => {
        Query(connection, GetUserIdAndVideoId).then(results => {

          //* Parse rows from database
          let data = JSON.parse(JSON.stringify(results));

          if (Object.keys(data).length === 0) {

            return callback(false, { UserPublicToken: PublicUserToken, UserLikedBoolean: false });
          }

          return callback(false, { UserPublicToken: PublicUserToken, UserLikedBoolean: true });

        }).catch(error => {
          logging.error(NAMESPACE, error.message, error);
          callback(true, null);
        }).finally(() => {
          connection.end();
        });
      }).catch(error => {
        logging.error(NAMESPACE, error.message, error);
        callback(true, null);
      });
  });


};


//* Like The Video Function by VideoToken
export const LikeTheVideoFunc = (req: any, res: any) => {

  if (req.body.UserToken === undefined || req.body.VideoToken === undefined || req.body.UserToken === null || req.body.VideoToken === null) {
    return res.status(202).json({
      UserExist: false
    });
  }

  UserLikedTheVideoCheck(req.body.UserToken, req.body.VideoToken, res, (err: boolean, Data: any) => {
    if (err) {
      res.status(500);
    }


    if (Data.UserLikedBoolean === false) {
      const likeVideoSqlQuerry = `UPDATE videos SET VideoLikes=VideoLikes+${1} WHERE VideoToken="${req.body.VideoToken}"; INSERT INTO likes_class(UserPublicToken, VideoToken) VALUES("${Data.UserPublicToken}", "${req.body.VideoToken}");`
      Connect().then(connection => {
        Query(connection, likeVideoSqlQuerry).then(() => {
          return res.status(202).json({
            UserExist: true,
            UserLikedBolean: true
          });
        }).finally(() => {
          connection.end();
        });
      });
    } else {
      const DisLikeVideoSqlQuerryString = `UPDATE videos SET VideoLikes=VideoLikes-${1} WHERE VideoToken="${req.body.VideoToken}"; DELETE FROM likes_class WHERE (UserPublicToken="${Data.UserPublicToken}" AND VideoToken="${req.body.VideoToken}");`
      Connect().then(connection => {
        Query(connection, DisLikeVideoSqlQuerryString).then(() => {
          return res.status(202).json({
            UserExist: true,
            UserLikedBolean: false
          });
        }).finally(() => {
          connection.end();
        });
      });
    }

  });

}

//* Get a specifc video data 
// const GetSpecificVideoData = (req: Request, res: Response, next: NextFunction) => {

//   logging.info(NAMESPACE, `Get - Specific video data`)

//   const GetVideoDataByTokenQueryString = `SELECT * FROM videos WHERE VideoToken="${req.params.PublicVideoToken}"`;

//   Connect().then(connection => {
//     Query(connection, GetVideoDataByTokenQueryString).then(results => {

//       //* Parse rows from database
//       let data = JSON.parse(JSON.stringify(results));


//       if (Object.keys(data).length === 0) {
//         return res.status(202).json({ error: true, message: "Video not found" });
//       }

//       ChanelManager.GetChanelInformatios(data[0].PublicChanelToken, false, (err: boolean, ChanelData: any) => {

//         if (err) {
//           logging.error(NAMESPACE, "A ERROR HAS OCCURED AT VIDEO PLAYER MANAGER SERVICE ");
//           res.status(202).json({
//             message: "a error has occured"
//           })
//         }

//         const VideoDatas = {
//           VideoToken: data[0].VideoToken,
//           VideoLikes: data[0].VideoLikes,
//           VideoTitle: data[0].VideoName,
//           ChanelNameFromVideo: ChanelData.ChanelName,
//           ChanelPublicToken: ChanelData.PublicChanelToken,
//           error: false
//         }

//         logging.info(NAMESPACE, `Get - ${VideoDatas.VideoTitle} video data`)
//         res.status(202).json(VideoDatas);

//       });


//     }).catch(error => {
//       logging.error(NAMESPACE, error.message, error);
//       return res.status(500).json({
//         message: error.message,
//         error
//       });
//     }).finally(() => {
//       connection.end();
//     });
//   }).catch(error => {
//     logging.error(NAMESPACE, error.message, error);
//     return res.status(500).json({
//       message: error.message,
//       error
//     });
//   });
// }


export default {
  SendTheVideo,
  // GetRandomVideoToken,
  UserLikedTheVideoCheck,
  LikeTheVideoFunc,
  // GetSpecificVideoData
};