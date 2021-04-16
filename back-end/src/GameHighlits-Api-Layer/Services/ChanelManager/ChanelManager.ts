import { Request, Response, NextFunction } from 'express';

import logging from "../../../config/logging";
import { Connect, Query } from "../../../config/mysql";
import fs from 'fs';

const NAMESPACE = 'VideoPlayerManagerService';


//* Get ChanelInformations
const GetChanelInformatios = (ChaChanelId: string, SendPrivateInformations: Boolean, callback: any) => {
  const GetChanelFromVideoSqlQueryString = `SELECT * FROM chanels  WHERE idChanel="${ChaChanelId}"`;
  Connect()
    .then(connection => {

      Query(connection, GetChanelFromVideoSqlQueryString).then(results => {

        let data = JSON.parse(JSON.stringify(results));

        const PublicChanelData = {
          ChanelName: data[0].ChanelName,
          PublicChanelToken: data[0].PublicToken,
          ChanelAvatarPath: data[0].ChanelAvatarPath,
          ChanelFolowers: data[0].Folowers,
          ChanelOwnerId: data[0].ChanelOwnerId
        }

        const privateChanelData = {
          ChanelEmail: data[0].ChanelEmail,
          ChanelHashedPassword: data[0].ChanelPassword

        }

        if (SendPrivateInformations === false) {
          callback(null, PublicChanelData);
        } else {
          callback(null, { PublicChanelData, privateChanelData });
        }


      }).catch(error => {
        logging.error(NAMESPACE, error.message, error);
        return callback("there was a error", null)
      }).finally(() => {
        connection.end();
      });

    }).catch(error => {
      logging.error(NAMESPACE, error.message, error);
      return callback("there was a error", null)
    });
}

//* Get ChanelId ByPrivateToken
const GetChanelIdByPrivateToken = (PrivateChanelToken: string, callback: any) => {

  const GetChanelId = `SELECT idChanel FROM chanels WHERE ChanelToken="${PrivateChanelToken}"`;

  Connect()
    .then(connection => {

      Query(connection, GetChanelId).then(results => {

        let data = JSON.parse(JSON.stringify(results));

        if (Object.keys(data).length === 0) {
          return callback(true, null);
        }

        callback(false, data[0].idChanel);

      }).catch(error => {
        logging.error(NAMESPACE, error.message, error);
        return callback(true, null)
      }).finally(() => {
        connection.end();
      });

    }).catch(error => {
      logging.error(NAMESPACE, error.message, error);
      return callback(true, null)
    });
}

//* Get ChanelId By Public Id

const GetChanelIdByPublicToken = (PublicChanelToken: string, callback: any) => {

  const GetChanelId = `SELECT idChanel FROM chanels WHERE PublicToken="${PublicChanelToken}"`;

  Connect()
    .then(connection => {

      Query(connection, GetChanelId).then(results => {

        let data = JSON.parse(JSON.stringify(results));

        if (Object.keys(data).length === 0) {
          return callback(true, null);
        }

        callback(false, data[0].idChanel);

      }).catch(error => {
        logging.error(NAMESPACE, error.message, error);
        return callback(true, null)
      }).finally(() => {
        connection.end();
      });

    }).catch(error => {
      logging.error(NAMESPACE, error.message, error);
      return callback(true, null)
    });
}

//* Get ChanelVideos
const GetChanelVideos = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.ChanelToken === "" || req.body.ChanelToken === null) {
    return res.status(200).json({
      ChanelExists: false
    })
  }

  const GetChanelVideos = `SELECT VideoName, VideoToken FROM videos WHERE ChanelId="${req.body.ChanelId}"`;

  Connect()
    .then(connection => {

      Query(connection, GetChanelVideos).then(results => {

        let data = JSON.parse(JSON.stringify(results));

        res.status(200).json({ Videos: data })

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


//* Get Owner Chanel PrivateData
const GetOwnerChanelData = (req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, "GetOwnerChanelData Service called");

  if (req.body.ChanelToken === "" || req.body.ChanelToken === "") {
    return res.status(200).json({
      ChanelExists: false
    })
  }

  GetChanelIdByPrivateToken(req.body.ChanelToken, (err: boolean, ChanelId: any) => {
    if (err) {

      const ChanelData = {
        ChanelExists: false

      }

      return res.status(200).json({
        ChanelData: ChanelData
      })
    }

    GetChanelInformatios(ChanelId, false, (err: boolean, ChanelInfos: any) => {

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


//* Get Creator chanel data
const GetCreatorChanelData = (req: Request, res: Response, next: NextFunction) => {

  logging.info(NAMESPACE, "get Creator Chanel Service called");

  GetChanelIdByPublicToken(req.body.ChanelPubicToken, (err: boolean, ChanelId: string) => {
    if (err) {
      return res.status(200).json({
        ChanelExists: false,
        message: 'Chanel not exists'
      })
    }

    GetChanelInformatios(ChanelId, false, (err: boolean, ChanelInfos: any) => {

      if (err) {
        return res.status(200).json({
          ChanelData: false
        })
      }

      if (Object.keys(ChanelInfos).length === 0) {
        return res.status(200).json({
          ChanelExists: false,
          message: 'Chanel not exists'

        });
      }


      const ChanelData: object = {
        ChanelName: ChanelInfos.ChanelName,
        ChanelFolowers: ChanelInfos.ChanelFolowers,
        ChanelId: ChanelId
      }

      res.status(200).json({
        ChanelData: ChanelData,
        ChanelExists: true
      })
    });
  });
}

//* Send the avatar image to fron-end
const GetChanelAvatar = (req: Request, res: Response, next: NextFunction) => {
  GetChanelInformatios(req.params.ChanelId, false, (err: boolean, ChanelInfos: any) => {

    if (err) {
      return res.status(200).json({
        ChanelData: false
      })
    }

    if (Object.keys(ChanelInfos).length === 0) {
      return res.status(200).json({
        ChanelExists: false,
        message: 'Chanel not exists'

      });
    }

    if (ChanelInfos.ChanelAvatarPath == "" ||ChanelInfos.ChanelAvatarPath == null) {
      
      const imgStream = fs.createReadStream(`${__dirname }/assets/PlaceHolder.jpg`);
      return imgStream.pipe(res);
      
    }
    
    const imgStream = fs.createReadStream(
      ChanelInfos.ChanelAvatarPath
    );
    return imgStream.pipe(res);

  });
}

export default {
  GetChanelInformatios,
  GetCreatorChanelData,
  GetOwnerChanelData,
  GetChanelVideos,
  LoginIntoChanel,
  GetChanelAvatar
};
