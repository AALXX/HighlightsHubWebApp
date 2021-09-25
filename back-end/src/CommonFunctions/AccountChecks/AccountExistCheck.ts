import { Connect, Query } from "../../config/mysql";
import logging from "../../config/logging";


//* checks if ussername and email exists in database
const UserNameAndEmailCheck = (UserName: string, Email:string, callback: any) => {
  const NAMESPACE = 'UserNameAndEmailCheck_Func';
  
  const CheckIfUsernamexExistsQuerryString = `SELECT 1 FROM users WHERE UserName="${UserName}" OR UserEmail="${Email}";`


  Connect()
    .then(connection => {
      Query(connection, CheckIfUsernamexExistsQuerryString).then(results => {

        //*Parse rows from database
        let data = JSON.parse(JSON.stringify(results));

        if (Object.keys(data).length === 1) {
          return callback(false, true);
        }
        
        return callback(false, false);
        

      }).catch(error => {
        logging.error(NAMESPACE, error.message, error);
        return callback(true, false);
        
      }).finally(() => {
        connection.end();
      });

    }).catch(error => {
      logging.error(NAMESPACE, error.message, error);
      return callback(true, false);

    });
}

const CheckIfPublicTokenExists = (PublicToken: string, callback: any) => {
  const NAMESPACE = 'UserNameAndEmailCheck_Func';

  const CheckIfUsernamexExistsQuerryString = `SELECT 1 FROM users WHERE PublicToken="${PublicToken}";`


  Connect()
    .then(connection => {
      Query(connection, CheckIfUsernamexExistsQuerryString).then(results => {

        //*Parse rows from database
        let data = JSON.parse(JSON.stringify(results));

        if (Object.keys(data).length === 1) {
          return callback(false, true);
        }
        
        return callback(false, false);
        

      }).catch(error => {
        logging.error(NAMESPACE, error.message, error);
        return callback(true, false);
        
      }).finally(() => {
        connection.end();
      });

    }).catch(error => {
      logging.error(NAMESPACE, error.message, error);
      return callback(true, false);

    });
}

const CheckIfPrivateTokenExists = (Private: string, callback: any) => {
  const NAMESPACE = 'UserNameAndEmailCheck_Func';

  const CheckIfUsernamexExistsQuerryString = `SELECT 1 FROM users WHERE PrivateToken="${Private}";`


  Connect()
    .then(connection => {
      Query(connection, CheckIfUsernamexExistsQuerryString).then(results => {

        //*Parse rows from database
        let data = JSON.parse(JSON.stringify(results));

        if (Object.keys(data).length === 1) {
          return callback(false, true);
        }
        
        return callback(false, false);
        

      }).catch(error => {
        logging.error(NAMESPACE, error.message, error);
        return callback(true, false);
        
      }).finally(() => {
        connection.end();
      });

    }).catch(error => {
      logging.error(NAMESPACE, error.message, error);
      return callback(true, false);

    });
}

export default {
  UserNameAndEmailCheck,
  CheckIfPublicTokenExists,
  CheckIfPrivateTokenExists
};