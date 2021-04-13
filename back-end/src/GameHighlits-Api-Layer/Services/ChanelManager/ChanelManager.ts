import { Request, Response, NextFunction } from 'express';

import logging from "../../../config/logging";
import { Connect, Query } from "../../../config/mysql";

const NAMESPACE = 'VideoPlayerManagerService';


//* Get ChanelInformationsByVideoToken
const GetChanelInformatiosFromVideo = (ChaChanelId: string, SendPrivateInformations: Boolean, callback: any) => {

  
  
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
          ChanelOwnerId:data[0].ChanelOwnerId
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

const GetChanelOwnerData = () => {

}

export default {
  GetChanelInformatiosFromVideo,
  GetChanelOwnerData
};
