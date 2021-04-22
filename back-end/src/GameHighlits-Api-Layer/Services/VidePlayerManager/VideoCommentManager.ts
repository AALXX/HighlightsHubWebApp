import { Request, Response, NextFunction } from 'express';

import logging from "../../../config/logging";
import { Connect, Query } from "../../../config/mysql";

const NAMESPACE = 'VideoPlayerManagerService';

//*Get a specific video comments
const GetVideoComments = (req: Request, res: Response, next: NextFunction) => {
  if (Object.keys(req.body).length === 0 ) {
    return res.status(200).json({
      error: true,
      message: "Invalid video Token"
    });
  }
  
  const GetVideoComments = `SELECT UserName, CommentContent, RespondToUserToken, Date FROM comments WHERE VideoToken="${req.body.VideoToken}"`;
  
  Connect()
  .then(connection => {
    Query(connection, GetVideoComments).then(results => {
      
      //* Parse rows from database
      let data = JSON.parse(JSON.stringify(results));
      return res.status(200).json(data);
      
    }).catch(error => {
      logging.error(NAMESPACE, error.message, error);
      return res.status(500).json({
        error: true,
        message: "Invalid video Token"
      });
    }).finally(() => {
      connection.end();
    });
  }).catch(error => {
    logging.error(NAMESPACE, error.message, error);
    return res.status(500).json({
      error: true,
      message: "Invalid video Token"
    });
  });
}

//* Recive the comment and post it to db
const PostRecivedCommentToDataBase = (req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, "Post Comments To video function call")

  const GetUserName = `SELECT uidUsers FROM users WHERE Token="${req.body.UserToken}"; `;
  
  Connect()
  .then(connection => {

    Query(connection, GetUserName).then(results => {

      let data = JSON.parse(JSON.stringify(results));

      let today = new Date().toLocaleDateString();
      
      const InsertCommentIntoDataBaseQuerry = `INSERT INTO comments (CommentContent, UserName, VideoToken, Date) 
      VALUES ("${req.body.CommentText}","${data[0].uidUsers}","${req.body.VideoToken}","${today}")`;
      
      Query(connection, InsertCommentIntoDataBaseQuerry).then(() => {
        res.status(200).json({
          UserName: data[0].uidUsers,
          CommentContent: req.body.CommentText
        })
      }).catch(error => {
        logging.error(NAMESPACE, error.message, error);
        return res.status(500).json({
          message: error.message,
          error
        });
      });
      
      // console.log(data[0].uidUsers);

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
  GetVideoComments,
  PostRecivedCommentToDataBase
}