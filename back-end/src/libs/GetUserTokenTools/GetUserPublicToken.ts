import { Connect, Query } from "../../config/mysql";
import logging from "../../config/logging";


//*Get User Public Token by privaetToken
const GetUserPublicTokenByPrivateToken = (USerPrivateToken: string,  VideoToken: string, callback: any) => {
  const NAMESPACE = 'Getting_UserPublicToken_By_PrivateToken_Func';
  const getUserIdAndVideoIdQuerryString = `SELECT PublicToken FROM users WHERE PrivateToken="${USerPrivateToken}";`

  Connect()
    .then(connection => {
      Query(connection, getUserIdAndVideoIdQuerryString).then(results => {

        //*Parse rows from database
        let data = JSON.parse(JSON.stringify(results));


        if (Object.keys(data).length === 0) {
          callback(true, null);
        }
        
        callback(false, data[0].PublicToken);
          

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
}

export default {
  GetUserPublicTokenByPrivateToken,
};