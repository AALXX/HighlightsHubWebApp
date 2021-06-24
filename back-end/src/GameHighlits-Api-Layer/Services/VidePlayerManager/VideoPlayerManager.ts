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
  const getRandomVideosQuerySttring = `SELECT * FROM videos ORDER BY RAND() LIMIT 1`;

  Connect()
    .then(connection => {

      Query(connection, getRandomVideosQuerySttring).then(results => {

        let data = JSON.parse(JSON.stringify(results));

        if (Object.keys(data).length === 0) {
          return res.status(202).json({
            error: true,
            message:"a error has occured"
          })
        }

        ChanelManager.GetChanelInformatios(data[0].ChanelId, false, (err: boolean, ChanelData: any) => {

          if (err) {
            logging.error(NAMESPACE, "A ERROR HAS OCCURED AT VIDEO PLAYER MANAGER SERVICE ");
            return res.status(202).json({
              error: true,
              message:"a error has occured"
            })
          }
          
          const VideoDatas = {
            VideoToken: data[0].VideoToken,
            VideoLikes: data[0].VideoLikes,
            VideoTitle: data[0].VideoName,
            ChanelNameFromVideo: ChanelData.ChanelName,
            ChanelPublicToken: ChanelData.PublicChanelToken,
            error: false,
            
          }
          return res.status(202).json(VideoDatas);
          
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

    GetUserAndVideoID(UserToken, res, VideoToken, (err: any, Idsdata: any) => {
      if (err) {
        callback(true, null);
      }


      const GetUserIdAndVideoId = `SELECT * FROM video_class WHERE IdVideo="${Idsdata.idVideo}" AND UserId="${Idsdata.idUser}"`;

      Connect()
        .then(connection => {
          Query(connection, GetUserIdAndVideoId).then(results => {

            //* Parse rows from database
            let data = JSON.parse(JSON.stringify(results));

            if (Object.keys(data).length === 0) {
              
              return callback(false, { VideoId: Idsdata.idVideo, UserId: Idsdata.idUser, UserLikedBoolean: false});
            }
            
            return callback(false, { VideoId: Idsdata.idVideo, UserId: Idsdata.idUser, UserLikedBoolean: true});

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


//* Like The Video Function by VideoToken
export const LikeTheVideoFunc = (req: any, res: any) => {

  logging.info(NAMESPACE, "Video Player Manager Service LikeTheVideoFunc function called ");


  UserLikedTheVideoCheck(req.body.UserToken, req.body.VideoToken, res, (err: boolean, Data: any) => {
    if (err) {
      res.status(500);
    }

    if (Data.UserLikedBoolean === false) {

      
      const likeVideoSqlQuerry = `UPDATE videos SET VideoLikes=VideoLikes+${1} WHERE VideoToken="${req.body.VideoToken}"; INSERT INTO video_class(IdVideo,UserId) VALUES("${Data.VideoId}", "${Data.UserId}");`
      Connect().then(connection => {
        Query(connection, likeVideoSqlQuerry).then(() => {
          return res.status(202).json({
            UserLikedBolean: true
          });
        }).finally(() => {
          connection.end();
        });
      });
    } else {
      const UnlikeVideoSqlQuerry = `UPDATE videos SET VideoLikes=VideoLikes-${1} WHERE VideoToken="${req.body.VideoToken}"; DELETE FROM video_class WHERE (IdVideo=${Data.VideoId} AND UserId=${Data.UserId});`
      Connect().then(connection => {
        Query(connection, UnlikeVideoSqlQuerry).then(() => {
          return res.status(202).json({
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
const GetSpecificVideoData = (req: Request, res: Response, next: NextFunction) => {

  logging.info(NAMESPACE, `Get - Specific video data`)
  
  const GetVideoDataByTokenQueryString = `SELECT * FROM videos WHERE VideoToken="${req.params.PublicVideoToken}"`;
  
  Connect().then(connection => {
    Query(connection, GetVideoDataByTokenQueryString).then(results => {
      
      //* Parse rows from database
      let data = JSON.parse(JSON.stringify(results));
      
      
      if (Object.keys(data).length === 0) {
        return res.status(202).json({error: true,message: "Video not found"});
      }
      
      // console.log(data)
      
      ChanelManager.GetChanelInformatios(data[0].ChanelId, false, (err: boolean, ChanelData: any) => {
        
        if (err) {
          logging.error(NAMESPACE, "A ERROR HAS OCCURED AT VIDEO PLAYER MANAGER SERVICE ");
          res.status(202).json({
            message:"a error has occured"
          })
        }
        
        
        const VideoDatas = {
          VideoToken: data[0].VideoToken,
          VideoLikes: data[0].VideoLikes,
          VideoTitle: data[0].VideoName,
          ChanelNameFromVideo: ChanelData.ChanelName,
          ChanelPublicToken: ChanelData.PublicChanelToken,
          error:false
        }
        
        logging.info(NAMESPACE, `Get - ${VideoDatas.VideoTitle} video data`)
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


export default {
  SendTheVideo,
  GetRandomVideoToken,
  UserLikedTheVideoCheck,
  LikeTheVideoFunc,
  GetSpecificVideoData
};