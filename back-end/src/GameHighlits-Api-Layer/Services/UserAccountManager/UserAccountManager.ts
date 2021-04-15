import { Request, Response, NextFunction } from 'express';
import logging from "../../../config/logging";
import { Connect, Query } from "../../../config/mysql";
import hat from 'hat';
import bcrypt from 'bcrypt';

const NAMESPACE = 'AccountManagerService';

//*Get user Account by provided user token
const GetUserAccountData = (req: Request, res: Response) => {
  logging.info(NAMESPACE, "Get User Account Service called");

  //* if /:AccountToken param is null or empty send 404
  if (req.params.AccountToken === "" || req.params.AccountToken === null) {
    return res.status(404).json({
      message: "User didnt provide a token"
    });
  };

  const GetAccountQueryString = `SELECT * FROM users WHERE Token="${req.params.AccountToken}";`;
  Connect()
    .then(connection => {

      Query(connection, GetAccountQueryString).then(results => {

        let data = JSON.parse(JSON.stringify(results));

        if (Object.keys(data).length === 0) {
          return res.status(200).json({
            succeded:false
          })
        }
        
        const UserAccountData = {
          AcountName: data[0].uidUsers,
          message: null,
          succeded:true
        }

        res.status(200).json(UserAccountData);

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
};

//*Login user account into Database
const LoginUserAccount = (req: any, res: any, next: NextFunction) => {

  logging.info(NAMESPACE, "LogIn User Account Service called");

  if (req.body.UserMail === "" || req.body.UserMail === null || req.body.Password === "" || req.body.Password === null) {
    return res.status(404).json({
      message: "User didnt provide a e-mail or password"
    });
  }

  const loginAccountQuerryString = `SELECT * FROM users WHERE emailUsers="${req.body.UserMail}"`;
  Connect()
    .then(connection => {

      Query(connection, loginAccountQuerryString).then(results => {

        let data = JSON.parse(JSON.stringify(results));

        if (Object.keys(data).length === 0) {
          return res.status(200).json({
            message: "User Not Found",
            UserFound: false
          });
        }

        return res.status(202).json({ UserToken: data[0].Token });

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

};


//*Rehister Account To dataBase
const RegisterUserAccount = (req: any, res: any, next: NextFunction) => {
  logging.info(NAMESPACE, "Register User Account Service called");
  let UserToken = hat();
  const saltRounds = 10;

  if (req.body.Username === "" || req.body.Username === null || req.body.Mailuid === "" || req.body.Mailuid === null || req.body.PassWord === "" || req.body.PassWord === null || req.body.RepeatePassWord === "" || req.body.RepeatePassWord === null) {
    return res.status(404).json({
      message: "User didnt provide credentials or password"
    });
  }

  bcrypt.hash(req.body.PassWord, saltRounds, (err, hash) => {
    if (err) {
      return res.status(500);
    }
    Connect()
      .then(connection => {

        let UserCredentials = {
          UserName: req.body.Username,
          UserToken: UserToken,
          UserEmail: req.body.Mailuid,
          HashedPasWord: hash
        }
        
        const RegisterqueryString = `INSERT INTO users(uidUsers,Token ,emailUsers,pwdUsers) VALUES ("${UserCredentials.UserName}","${UserCredentials.UserToken}","${UserCredentials.UserEmail}","${UserCredentials.HashedPasWord}")`;

        Query(connection, RegisterqueryString).then(() => {
          return res.status(202).json({ UserToken: UserToken});
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
  });

}

export default {
  GetUserAccountData,
  LoginUserAccount,
  RegisterUserAccount
};