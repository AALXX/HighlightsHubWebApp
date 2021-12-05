import fs from "fs";
import { Request, Response, NextFunction } from 'express';

import logging from "../../config/logging";
import { Connect, Query } from "../../config/mysql";
// import ChanelManager from "../ChanelManager/ChanelManager";
import { validationResult } from 'express-validator'

const NAMESPACE = 'VideoPlayerManagerService'; ''
const myValidationResult = validationResult.withDefaults({
  formatter: error => {
    return {
      errorMsg: error.msg,
    };
  },
});

// * Send RandomVideo
const GetRandomVideoToken = (req: Request, res: Response) => {
  const getRandomVideosQuerySttring = `SELECT VideoToken FROM videos ORDER BY RAND() LIMIT 1`;

  Connect()
    .then(connection => {

      Query(connection, getRandomVideosQuerySttring).then(results => {

        let data = JSON.parse(JSON.stringify(results));

        if (Object.keys(data).length === 0) {
          return res.status(202).json({
            error: true,
          })
        }

        return res.status(200).json({
          error: false,
          VideoToken:data[0].VideoToken
        });

      }).catch(error => {
        logging.error(NAMESPACE, error.message, error);
        return res.status(500).json({
          error
        });
      }).finally(() => {
        connection.end();
      });

    }).catch(error => {
      logging.error(NAMESPACE, error.message, error);
      return res.status(500).json({
        error
      });
    });
}




//*Check If The User Liked The Video
const UserLikedTheVideoCheck = (UserPublicToken: string, VideoToken: string, res: any, callback: any) => {

  const CheckIFUserLikedQuerryStgring = `SELECT * FROM videos_likes_class WHERE VideoToken="${VideoToken}" AND UserPublicToken="${UserPublicToken}"`;

  Connect()
    .then(connection => {
      Query(connection, CheckIFUserLikedQuerryStgring).then(results => {

        //* Parse rows from database
        let data = JSON.parse(JSON.stringify(results));

        if (Object.keys(data).length === 0) {

          return callback(false, false);
        }

        return callback(false, true);

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


};


/**
 ** Like The Video Function by VideoToken
 * @param req 
 * @param res 
 * @returns 
 */
export const LikeTheVideoFunc = (req: any, res: any) => {

  //* Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = myValidationResult(req);
  if (!errors.isEmpty()) {
    return res.status(200).json({ error: true, errors: errors.array() });
  }


  UserLikedTheVideoCheck(req.body.UserPublicToken, req.body.VideoToken, res, (err: boolean, UserLikedBoolean: boolean) => {
    if (err) {
      res.status(500);
    }

    if (UserLikedBoolean == false) {
      const likeVideoSqlQuerry = `UPDATE videos SET Fires=Fires+${1} WHERE VideoToken="${req.body.VideoToken}"; INSERT INTO videos_likes_class(UserPublicToken, VideoToken) VALUES("${req.body.UserPublicToken}", "${req.body.VideoToken}");`
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
      const DisLikeVideoSqlQuerryString = `UPDATE videos SET Fires=Fires-${1} WHERE VideoToken="${req.body.VideoToken}"; DELETE FROM videos_likes_class WHERE (UserPublicToken="${req.body.UserPublicToken}" AND VideoToken="${req.body.VideoToken}");`
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

/**
 * Gets Data About Video from db
 * @param req 
 * @param res 
 */
const GetVideoData = (req: Request, res: Response) => {
  const GetVideoDataByTokenQueryString = `SELECT VideoTitle, Fires, DatePublished, OwnerToken FROM videos WHERE VideoToken="${req.params.VideoToken}"`;

  UserLikedTheVideoCheck(req.params.UserPublicToken, req.params.VideoToken, res, (err: boolean, UserLikedBoolean: boolean) => {
    if (err) {
      res.status(500);
    }

    Connect().then(connection => {
      Query(connection, GetVideoDataByTokenQueryString).then(results => {

        //* Parse rows from database
        let data = JSON.parse(JSON.stringify(results));


        if (Object.keys(data).length === 0) {
          return res.status(202).json({ error: false, VideoFound: false });
        }

        res.status(202).json({ error: false, VideoFound: true, VideoTitle: data[0].VideoTitle, FIres: data[0].Fires, PublishDate: data[0].DatePublished, OwnerToken: data[0].OwnerToken, UserLikedBoolean: UserLikedBoolean });

      }).catch(error => {
        logging.error(NAMESPACE, error.message, error);
        return res.status(500).json({
          message: error.message,
          error: true
        });
      }).finally(() => {
        connection.end();
      });
    }).catch(error => {
      logging.error(NAMESPACE, error.message, error);
      return res.status(500).json({
        message: error.message,
        error: true
      });
    });
  })
}


export default {
  GetRandomVideoToken,
  UserLikedTheVideoCheck,
  LikeTheVideoFunc,
  GetVideoData
};