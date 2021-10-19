import { Request, Response, NextFunction } from "express";

import multer from "multer";
import hat from "hat";
import fs from "fs";
import FFmpeg from "fluent-ffmpeg"

import logging from "../../config/logging";
import { Connect, Query } from "../../config/mysql";
import CommonFunctions from "../../CommonFunctions/GetUserTokenTools/GetUserPublicToken"

const NAMESPACE = "UploadManagerService";

let storage = multer.diskStorage({
  destination: (req: Request, file: any, callback: any) => {
    callback(null, "../Videos/tmp");
  },

  filename: (req: Request, file, cb: any) => {
    cb(null, `${file.originalname}`);
  },
});

let upload = multer({
  storage: storage,
}).single("file");

const UploadVideoFileToServer = async (req: Request, res: Response) => {
  logging.info(NAMESPACE, "Posting Video service called");

  upload(req, res, async (err: any) => {
    if (err) {
      return res.status(200).json({
        error: true,
      });
    }
    //*check if the video exists
    fs.stat(`../videos/${req.body.VideoTitle}`, (err) => {
      if (err === null) {

        //* check if the file exists in tmp folder
        fs.stat(`../videos/tmp/${req.file?.originalname}`, (err) => {

          if (err === null) {
            //*if exists delete the video from tmp folder
            fs.unlink(`../videos/tmp/${req.file?.originalname}`, (err) => {
              if (err) return console.log(err);
              return res.status(200).json({
                error: true,
                mesage:"video exists"
              })
            });

          }else if (err.code === 'ENOENT') {
            //* The file does not exists
            return res.status(200).json({
              error: true,
            })
          }
        });

      } else if (err.code === 'ENOENT') {
        //* file does not exist
        fs.mkdir(`../videos/${req.body.VideoTitle}`, (err) => {
          if (err) {
            return res.status(200).json({
              error: true,
            })
          }
          //* Directory Created Succesfully
          fs.rename(`../videos/tmp/${req.file?.originalname}`, `../videos/${req.body.VideoTitle}/${req.body.VideoTitle}_Source.mp4`, (err) => {
            if (err) {
              return res.status(200).json({
                error: true,
              })
            }

            //*File Moved succesfully
            SendVideoDataToDb(req.body.UserPublicToken, `../videos/${req.body.VideoTitle}/${req.body.VideoTitle}_Source.mp4`, req.body.VideoTitle,  req.body.VideoVisibility, async (err: boolean) => {

              if (err) {
                return res.status(200).json({
                  error: true,
                })
              }
              //* Creates a 720p and 480p variant of the video
              // await VideoProceesor(`${req.body.VideoTitle}`, `../videos/${req.body.VideoTitle}/${req.body.VideoTitle}_Source.mp4`, "1280x720").then(async () => {
              //   await VideoProceesor(`${req.body.VideoTitle}`, `../videos/${req.body.VideoTitle}/${req.body.VideoTitle}_Source.mp4`, "480x360").then(() => {
              //   })
              // });

              return res.status(200).json({
                error: false
              })
            });

          });
        });
      }
    });
  });
};

const SendVideoDataToDb = (publicToken: string, filepath: string, VideoTitle: string,  VideoVisibility:string ,callback: any) => {
  const VideoToken = hat();
  let today = new Date().toISOString().slice(0, 10)

  const SendVidsDatasSqlQuery = `INSERT INTO videos (VideoTitle, Fires, DatePublished, VideoToken, OwnerToken, VideoPath, Visibility) 
  VALUES("${VideoTitle}", "0", "${today}","${VideoToken}", "${publicToken}", "${filepath}", "${VideoVisibility}")`;

  Connect().then(connection => {
    Query(connection, SendVidsDatasSqlQuery).then(() => {
      return callback(false);

    }).catch(error => {
      logging.error(NAMESPACE, error.message, error);
    }).finally(() => {
      connection.end();
    });

  }).catch(error => {
    logging.error(NAMESPACE, error.message, error);
  });

}

const VideoProceesor = async (Title: string, path: string, VideoSize: string) => new Promise((resolve, reject) => {
  FFmpeg(path)
    .videoCodec('libx264')
    .audioCodec('libmp3lame')
    .on("progress", (progress) => {
      console.log("Processing: " + progress.timemark);
    })
    .size(VideoSize)
    .on('error', (err) => {
      reject(err)
    })
    .save(`../videos/${Title}/${Title}_${VideoSize}.mp4`)
    .on("end", () => {
      resolve({ error: false })
    })
});


export default {
  UploadVideoFileToServer
};
