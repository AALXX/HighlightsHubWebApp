import { Request, Response, NextFunction } from "express";

import multer from "multer";
import hat from "hat";
import fs from "fs";

import logging from "../../../config/logging";
import { Connect, Query } from "../../../config/mysql";

import ChanelManager from "../ChanelManager/ChanelManager"

const NAMESPACE = 'UploadManagerService';


let storage = multer.diskStorage({
  destination: (req: Request, file: any, cb: any) => {
    cb(null, `../videos/tmp`);
  },

  filename: (req: Request, file, cb: any) => {
    cb(null, `${file.originalname}`);
  },

});

let upload = multer({
  storage: storage,
}).single("file");

const SendVidsDataToDb = (req: Request, res:Response, filepath: string) => {
  const VideoToken = hat();

  ChanelManager.GetChanelPublicTokenByPrivateToken(req.body.ChanelToken, (err: boolean, ChanelId: any) => {
    if (err) {
      res.status(500);
    }


    const SqlSendVidsDatasQuery = `INSERT INTO videos( VideoName, VideoToken, ChanelId, DatePublished, VideoLikes, VideoPath, VideoThumb) 
    VALUES("${req.body.VideoTitle}", "${VideoToken}", "${ChanelId}", "azi", "${0}", "${filepath}", "inaca nu")`;
    
    Connect().then(connection => {
      Query(connection, SqlSendVidsDatasQuery).then(() => {
        return;
        
      }).catch(error => {
        logging.error(NAMESPACE, error.message, error);
      }).finally(() => {
        connection.end();
      });
      
    }).catch(error => {
      logging.error(NAMESPACE, error.message, error);
    });
  });
    
}

const Upload = (req: Request, res: Response, next: NextFunction) => {

  logging.info(NAMESPACE, "Posting Video service called");
  
  upload(req, res, (err: any) => {
    if (err) {
      return res.status(200).json({
        error: true,
        message: err
      })
    }
    const GetOwnerChanel = `SELECT ChanelFolder FROM chanels WHERE ChanelToken= "${req.body.ChanelToken}"`;

    Connect().then(connection => {
      Query(connection, GetOwnerChanel).then(results => {

        let data = JSON.parse(JSON.stringify(results));

        
        fs.stat(`../videos/${data[0].ChanelFolder}/${req.file?.originalname}`, (err) => {
          if (err === null) {

            fs.rmSync(`../videos/tmp/${req.file?.originalname}`);

            return res.status(200).json({
              error: true,
              message: "Video already exists"
            })
          } else if (err.code === 'ENOENT') {
            //* file does not exist
            fs.mkdir(`../videos/${data[0].ChanelFolder}/${req.file?.originalname}`, (err) => {
              if (err) {
                return res.status(200).json({
                  error: true,
                  message: err
                })
              }
              //* Directory Created Succesfully
              fs.rename(`../videos/tmp/${req.file?.originalname}`, `../videos/${data[0].ChanelFolder}/${req.file?.originalname}/${req.body.VideoTitle}.mp4`, (err) => {
                if (err) {
                  return res.status(200).json({
                    error: true,
                    message: err
                  })
                }
                //*File Moved succesfully
                SendVidsDataToDb(req, res, `../videos/${data[0].ChanelFolder}/${req.file?.originalname}/${req.body.VideoTitle}.mp4`);
                return res.status(200).json({
                  error: false,
                })
              });
            });
          }
        });


      }).catch(error => {
        logging.error(NAMESPACE, error.message, error);
      }).finally(() => {
        connection.end();
      });

    }).catch(error => {
      logging.error(NAMESPACE, error.message, error);
    });

  })
}


export default {
  Upload
}