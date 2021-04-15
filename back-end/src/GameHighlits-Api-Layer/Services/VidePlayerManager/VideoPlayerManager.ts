import fs from "fs";
import { Request, Response, NextFunction } from 'express';

import logging from "../../../config/logging";
import { Connect, Query } from "../../../config/mysql";
import ChanelManager  from "../ChanelManager/ChanelManager";

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
        const chnuk_size = 10 ** 6; //* 1mb

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

          console.log("Nu are headders")
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
const GetRandomVideoToken = (req: Request, res: Response, next: NextFunction) => {
  const getRandomVideosQuerySttring = `SELECT * FROM  videos`;

  Connect()
    .then(connection => {

      Query(connection, getRandomVideosQuerySttring).then(results => {

        let data = JSON.parse(JSON.stringify(results));

        let VideosTonkensLenght = Object.keys(data).length;
        let VideoToBeSend = data[Math.floor(Math.random() * VideosTonkensLenght)];

        
        ChanelManager.GetChanelInformatios(VideoToBeSend.ChanelId, false, (err: boolean, ChanelData: any) => {

          if (err) {
            logging.error(NAMESPACE, "A ERROR HAS OCCURED AT VIDEO PLAYER MANAGER SERVICE ");
            res.status(202).json({
              message:"a error has occured"
            })
          }
          
          // console.log(ChanelData);
          
          const VideoDatas = {
            VideoToken: VideoToBeSend.VideoToken,
            VideoLikes: VideoToBeSend.VideoLikes,
            VideoTitle: VideoToBeSend.VideoName,
            ChanelNameFromVideo: ChanelData.ChanelName,
            ChanelPublicToken:ChanelData.PublicChanelToken
          }
          res.status(202).json(VideoDatas);
          
        });

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


//* Get user and Video Id from db
const GetUserAndVideoID = (UserToken: string, res: Response, VideoToken: string, callback: any) => {
  const getUserIdAndVideoIdQuerryString = `SELECT * FROM users WHERE Token="${UserToken}"; SELECT * FROM videos WHERE VideoToken="${VideoToken}";`

  Connect()
    .then(connection => {
      Query(connection, getUserIdAndVideoIdQuerryString).then(results => {

        //*Parse rows from database
        let data = JSON.parse(JSON.stringify(results));


        let User = JSON.parse(JSON.stringify(data[0]));
        let Video = JSON.parse(JSON.stringify(data[1]));

        if (User !== undefined || Object.keys(User).length !== 0 || Video !== undefined || Object.keys(Video).length !== 0) {
          //* pack userId and VideoId To be sendTo callback
          const data = {
            idUser: User[0].idUsers,
            idVideo: Video[0].idVideo
          }
          callback(null, data);

        } else {
          res.status(202).json({
            message: "Video dosen'tExists",
          })
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




//*Check If The User Liked The Video
const UserLikedTheVideoCheck = (UserToken: string, VideoToken: string, res: any, callback: any) => {

  if (UserToken != null && VideoToken != null) {

    GetUserAndVideoID(UserToken, res, VideoToken, (err: any, data: any) => {
      if (err) {
        callback(true, null);
      }

      const GetUserIdAndVideoId = `SELECT * FROM video_class WHERE IdVideo="${data.idVideo}"`;

      Connect()
        .then(connection => {
          Query(connection, GetUserIdAndVideoId).then(results => {

            //* Parse rows from database
            let UserThatLikedThevideo = JSON.parse(JSON.stringify(results));

            let UserThatLikedVideoIdsSorted = UserThatLikedThevideo.sort(function (a: any, b: any) {
              return a.UserId - b.UserId
            });

            let UserLikedBoolean = BinarySearchAlgorythmIfUserLiked(data.idUser, UserThatLikedVideoIdsSorted);

            data = {
              VideoId: data.idVideo,
              UserId: data.idUser,
              UserLikedBoolean: UserLikedBoolean
            }

            callback(null, data)

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
  } else {
    res.status(202).json({
      message: "User Token or video token empty"
    });
  }
};

//* Binary Search if UserId is in Array
const BinarySearchAlgorythmIfUserLiked = (UserId: number, UserIdsArray: any) => {
  let lower = 0;
  let upper = UserIdsArray.length - 1;

  while (lower <= upper) {
    const middle = Math.floor((upper + lower) / 2);
    if (UserIdsArray[middle].UserId === UserId) {
      return true;
    }
    if (UserId > UserIdsArray[middle].UserId) {
      lower = middle + 1
    } else {
      upper = middle - 1;
    }
  }
  return false;
}

//* Like The Video Function by VideoToken
export const LikeTheVideoFunc = (req: any, res: any) => {

  logging.info(NAMESPACE, "Video Player Manager Service LikeTheVideoFunc function called ");


  UserLikedTheVideoCheck(req.body.UserToken, req.body.VideoToken, res, (err: boolean, Data: any) => {
    if (err) {
      res.status(500);
    }

    if (Data.UserLikedBoolean === true) {
      const UnlikeVideoSqlQuerry = `UPDATE videos SET VideoLikes=VideoLikes+${1} WHERE VideoToken="${req.body.VideoToken}"; DELETE FROM video_class WHERE (IdVideo=${Data.VideoId} AND UserId=${Data.UserId});`
      Connect().then(connection => {
        Query(connection, UnlikeVideoSqlQuerry).then(() => {
          res.status(202).json({
            UserLikedBolean: true
          });
        }).finally(() => {
          connection.end();
        });
      });
    } else {
      const UnlikeVideoSqlQuerry = `UPDATE videos SET VideoLikes=VideoLikes-${1} WHERE VideoToken="${req.body.VideoToken}"; INSERT INTO video_class(IdVideo,UserId) VALUES("${Data.VideoId}", "${Data.UserId}");`
      Connect().then(connection => {
        Query(connection, UnlikeVideoSqlQuerry).then(() => {
          res.status(202).json({
            UserLikedBolean: false
          });
        }).finally(() => {
          connection.end();
        });
      });
    }

  });

}


export default {
  SendTheVideo,
  GetRandomVideoToken,
  UserLikedTheVideoCheck,
  LikeTheVideoFunc
};