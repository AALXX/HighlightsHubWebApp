import { Request, Response, NextFunction, json } from 'express';

import logging from "../../../config/logging";
import { Connect, Query } from "../../../config/mysql";
import ChanelManager from "./ChanelManager";
import fs from "fs";

const NAMESPACE = 'OwnerChanelMgerService';

//* Get Owner Chanel PrivateData
const GetOwnerChanelData = (req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, "GetOwnerChanelData Service called");

  if (req.body.ChanelToken === "" || req.body.ChanelToken === "") {
    return res.status(200).json({
      ChanelExists: false
    })
  }

  ChanelManager.GetChanelIdByPrivateToken(req.body.ChanelToken, (err: boolean, ChanelId: any) => {
    if (err) {

      const ChanelData = {
        ChanelExists: false

      }

      return res.status(200).json({
        ChanelData: ChanelData
      })
    }

    ChanelManager.GetChanelInformatios(ChanelId, false, (err: boolean, ChanelInfos: any) => {

      if (err) {
        return res.status(200).json({
          ChanelData: false
        })
      }

      if (Object.keys(ChanelInfos).length === 0) {
        return res.status(200).json({
          ChanelExists: false
        });
      }

      const ChanelData: object = {
        ChanelName: ChanelInfos.ChanelName,
        ChanelEmail: ChanelInfos.ChanelEmail,
        ChanelAvatarPath: ChanelInfos.ChanelAvatarPath,
        ChanelFolowers: ChanelInfos.Folowers,
        ChanelId: ChanelId
      }


      res.status(200).json({
        ChanelData: ChanelData,
        ChanelExists: true
      })

    })

  });
}

//* Login User into Chanel
const LoginIntoChanel = (req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, "LoginIntoChanel Service called");

  if (req.body.ChanelMail === "" || req.body.ChanelPassword === "" || req.body.UserToken === "") {
    return res.status(200).json({
      message: "Uncompleted forms",
      succeded: false
    });
  }

  const LoginIntoChanel = `SELECT ChanelToken FROM chanels WHERE ChanelEmail="${req.body.ChanelMail}"`;

  Connect().then(connection => {
    Query(connection, LoginIntoChanel).then(results => {

      let data = JSON.parse(JSON.stringify(results));

      if (Object.keys(data).length === 0) {
        return res.status(200).json({
          message: "Chanel doesen't exist",
          succeded: false
        })
      }

      res.status(200).json({
        succeded: true,
        ChanelToken: data[0].ChanelToken

      })

    }).catch(error => {
      logging.error(NAMESPACE, error.message, error);
      return res.status(505);
    }).finally(() => {
      connection.end();
    });

  }).catch(error => {
    logging.error(NAMESPACE, error.message, error);
    return res.status(505);
  });
}

//* Chaneg Video Title
const ChangeVideoTitle = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.VideoName === undefined || req.body.VideoName === "" || req.body.VideoToken === "" || req.body.VideoToken === undefined) {
    return res.status(200).json({
      error: true,
      message: "invalid"
    })
  }


  const ChanegVideoTitleOrDescription = `UPDATE videos SET VideoName="${req.body.VideoName}" WHERE VideoToken="${req.body.VideoToken}" `

  Connect().then(connection => {
    Query(connection, ChanegVideoTitleOrDescription).then(results => {

      let data = JSON.parse(JSON.stringify(results));

      if (data.affectedRows === 0) {
        return res.status(200).json({
          message: "Video doesen't exist",
          succeded: false
        })
      }

      res.status(200).json({
        succeded: true
      })

    }).catch(error => {
      logging.error(NAMESPACE, error.message, error);
      return res.status(505);
    }).finally(() => {
      connection.end();
    });

  }).catch(error => {
    logging.error(NAMESPACE, error.message, error);
    return res.status(505);
  });

}

//* Delete A video
const DeleteVideo = (req: Request, res: Response, next: NextFunction) => {
  const GetChanelPath = `SELECT VideoPath FROM videos WHERE VideoToken="${req.body.VideoToken}"; `;

  Connect().then(connection => {
    Query(connection, GetChanelPath).then(results => {

      let data = JSON.parse(JSON.stringify(results));

      if (Object.keys(data).length === 0) {
        return res.status(200).json({
          message: "Video doesen't exist",
          error: true
        })
      }

      fs.stat(data[0].VideoPath, (err) => {
        if (err === null) {

          fs.rm(data[0].VideoPath, (err) => {

            if (err) {
              return res.status(200).json({
                message: "error",
                error: true
              });
            }
          })

          DeleteVideoFromDataBase(req.body.VideoToken)
          
          return res.status(200).json({
            error: false,
          });

        } else if (err.code === 'ENOENT') {
          //* file does not exist
          return res.status(200).json({
            error: true,
            message: "Video doesen't exists"
          });
        }
      })

    }).catch(error => {
      logging.error(NAMESPACE, error.message, error);
      return res.status(505);
    }).finally(() => {
      connection.end();
    });

  }).catch(error => {
    logging.error(NAMESPACE, error.message, error);
    return res.status(505);
  });
}

const DeleteVideoFromDataBase = (VideoToken: string) => {
  const DeleteVideoFromDataBase = `DELETE  FROM videos WHERE VideoToken="${VideoToken}"`;

  Connect().then(connection => {
    Query(connection, DeleteVideoFromDataBase).then(results => {

      let data = JSON.parse(JSON.stringify(results));

      if (data.affectedRows === 0) {
        return { error: true };
      }

    }).catch(error => {
      logging.error(NAMESPACE, error.message, error);
      return { error: true };
    }).finally(() => {
      connection.end();
    });

  }).catch(error => {
    logging.error(NAMESPACE, error.message, error);
    return { error: true };
  });

}

export default {
  GetOwnerChanelData,
  LoginIntoChanel,
  ChangeVideoTitle,
  DeleteVideo
};
