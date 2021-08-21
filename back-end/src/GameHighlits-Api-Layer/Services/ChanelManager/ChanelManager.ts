import { Request, Response, NextFunction } from 'express';

import logging from "../../../config/logging";
import { Connect, Query } from "../../../config/mysql";
import fs from 'fs';

const NAMESPACE = 'ChanelManagerService';


//* Get ChanelInformations
const GetChanelInformatios = (PublicChanelToken: string, SendPrivateInformations: Boolean, callback: any) => {
  const GetChanelFromVideoSqlQueryString = `SELECT * FROM chanels  WHERE PublicChanelToken="${PublicChanelToken}"`;
  Connect()
    .then(connection => {

      Query(connection, GetChanelFromVideoSqlQueryString).then(results => {

        let data = JSON.parse(JSON.stringify(results));

        if (Object.keys(data).length === 0) {
          return;
        }
        
        const PublicChanelData = {
          ChanelName: data[0].ChanelName,
          ChanelAvatarPath: data[0].ChanelAvatarPath,
          ChanelFolowers: data[0].ChanelFolowers,
          ChanelPublicToken: data[0].PublicChanelToken
        }

        const privateChanelData = {
          ChanelEmail: data[0].ChanelEmail,
          ChanelHashedPassword: data[0].ChanelPwd
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

//* Get Public Token  By PrivateToken
const GetChanelPublicTokenByPrivateToken = (PrivateChanelToken: string, callback: any) => {

  const GetChanelId = `SELECT PublicChanelToken FROM chanels WHERE PrivateChanelToken="${PrivateChanelToken}"`;

  Connect()
    .then(connection => {

      Query(connection, GetChanelId).then(results => {

        let data = JSON.parse(JSON.stringify(results));

        if (Object.keys(data).length === 0) {
          return callback(true, null);
        }

        callback(false, data[0].PublicChanelToken);
        

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

  if (req.params.ChanelPublicToken === "" || req.params.ChanelPublicToken === undefined) {
    return res.status(200).json({
      ChanelExists: false
    })
  }

  
  const GetChanelVideos = `SELECT VideoTitle, VideoToken FROM videos WHERE PublicChanelToken="${req.params.ChanelPublicToken}"`;

  Connect()
    .then(connection => {

      Query(connection, GetChanelVideos).then(results => {

        let Videos = JSON.parse(JSON.stringify(results));

        res.status(200).json({ Videos: Videos })

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

    GetChanelInformatios(req.body.ChanelPubicToken, false, (err: boolean, ChanelInfos: any) => {

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
        ChanelPublicToken:ChanelInfos.ChanelPublicToken
      }

      return res.status(200).json({
        ChanelExists: true,
        ChanelData: ChanelData,
      })
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
  GetChanelPublicTokenByPrivateToken,
  GetChanelIdByPublicToken,
  GetChanelInformatios,
  GetCreatorChanelData,
  GetChanelVideos,
  GetChanelAvatar
};
