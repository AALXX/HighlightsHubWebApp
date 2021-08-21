import { Request, Response, NextFunction, json } from 'express';
import logging from "../../../config/logging";
import { Connect, Query } from "../../../config/mysql";
import hat from 'hat';
import bcrypt from 'bcrypt';
import InternalTools from "../../../libs/GetUserTokenTools/GetUserPublicToken"

const NAMESPACE = 'AccountManagerService';


//*Interfarces
interface ChanelsTokens {
  ChanelId:string
  ChanelName: any;
};
interface ChanelsTokens {
  ChanelId: string;
};

//*Get user Account by provided user token
const GetUserAccountData = (req: Request, res: Response) => {
  logging.info(NAMESPACE, "Get User Account Service called");

  //* if /:AccountToken param is null or empty send 404
  if (req.params.AccountToken === "" || req.params.AccountToken === null) {
    return res.status(200).json({
      succeded: false,
      message: "User didnt provide a token"
    });
  };

  const GetAccountQueryString = `SELECT * FROM users WHERE PrivateToken="${req.params.AccountToken}";`;
  Connect()
    .then(connection => {

      Query(connection, GetAccountQueryString).then(results => {

        let data = JSON.parse(JSON.stringify(results));

        if (Object.keys(data).length === 0) {
          return res.status(200).json({
            succeded: false
          })
        }

        const UserAccountData = {
          AcountName: data[0].UserName,
          message: null,
          succeded: true
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

  const loginAccountQuerryString = `SELECT * FROM users WHERE UserEmail="${req.body.UserMail}"`;
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

        bcrypt.compare(req.body.Password, data[0].UserPwd, (err, isMatch) => {
          if (err) {
            return res.status(500).json({
              message: "error",
              error: true
            });
          } else if (!isMatch) {
            return res.status(200).json({
              pwdmathch: false,
              error: false
            })
          } else {
            return res.status(202).json({ UserToken: data[0].PrivateToken, pwdmathch: true, error: false });
          }
        })

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
const RegisterUserAccount = (req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, "Register User Account Service called");

  if (req.body.Username === "" || req.body.Username === null || req.body.Mailuid === "" || req.body.Mailuid === null || req.body.PassWord === "" || req.body.PassWord === null || req.body.RepeatePassWord === "" || req.body.RepeatePassWord === null) {
    return res.status(404).json({
      message: "User didnt provide credentials or password"
    });
  }

  const saltRounds = 10;
  bcrypt.hash(req.body.PassWord, saltRounds, (err, hash) => {
    if (err) {
      return res.status(500);
    }

    let PublicUserToken = hat();
    let PrivateUserToken = hat();

    Connect()
      .then(connection => {

        let UserCredentials = {
          UserName: req.body.Username,
          PrivateUserToken: PrivateUserToken,
          PublicUserToken: PublicUserToken,
          UserEmail: req.body.Mailuid,
          HashedPasWord: hash
        }

        const RegisterqueryString = `INSERT INTO users(UserName, PrivateToken, PublicToken, UserEmail, UserPwd) VALUES ("${UserCredentials.UserName}","${UserCredentials.PrivateUserToken}","${UserCredentials.PublicUserToken}","${UserCredentials.UserEmail}","${UserCredentials.HashedPasWord}")`;

        Query(connection, RegisterqueryString).then(() => {
          return res.status(202).json({ UserToken: PrivateUserToken });
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

const CheckPassword = (InputedPassword: string, Token: string, callback: any) => {
  const GetUserPasswordFromDb = `SELECT pwdUsers FROM users WHERE Token="${Token}"`;

  Connect()
    .then(connection => {

      Query(connection, GetUserPasswordFromDb).then(results => {

        let data = JSON.parse(JSON.stringify(results));

        if (Object.keys(data).length === 0) {
          return callback(false, false);
        }

        bcrypt.compare(InputedPassword, data[0].pwdUsers, (err, isMatch) => {
          if (err) {
            return callback(true, null);
          } else if (!isMatch) {
            return  callback(false, false);
          } else {
            return  callback(false, true);
          }
        })

      }).catch(error => {
        logging.error(NAMESPACE, error.message, error);
        return callback(true, null);
      }).finally(() => {
        connection.end();
      });

    }).catch(error => {
      logging.error(NAMESPACE, error.message, error);
      return callback(true, null);
    });
}

//* Change AccountSettings to one send by user
const ChangeAccountSettings = (req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, "Change User Account Service called");

  if (req.body.UserMail === "" || req.body.UserMail === null || req.body.Password === "" || req.body.Password === null) {
    return res.status(200).json({
      message: "User didnt completed inputs "
    });
  }

  CheckPassword(req.body.UserInputedPassword, req.body.AccountToken, (err: boolean, isMatch: any) => {

    if (err) {

      return res.status(200).json({
        error: true
      })
    }
    if (!isMatch) {
      return res.status(200).json({
        error: false,
        matchcredentials: false
      })
    }

    const ChangeAccountSettingsSqlQuery = `UPDATE users SET uidUsers="${req.body.NewAccountName}" WHERE Token="${req.body.AccountToken}"`;
    Connect()
      .then(connection => {
        Query(connection, ChangeAccountSettingsSqlQuery).then(results => {

          let data = JSON.parse(JSON.stringify(results));

          if (data.affectedRows === 0) {
            return res.status(200).json({
              message: "Account doesen't exist",
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
  })
}

//* Get User Account public data by publick token
const GetUserAccountDataByPublicToken = (PublickToken: string, callback: any) => {
  logging.info(NAMESPACE, "Get User Account Service called");

  //* if /:AccountToken param is null or empty send 404
  if (PublickToken === "" || PublickToken === null) {
    return callback(true, null);
  };

  const GetAccountQueryString = `SELECT * FROM users WHERE PublicToken="${PublickToken}";`;
  Connect()
    .then(connection => {

      Query(connection, GetAccountQueryString).then(results => {

        let data = JSON.parse(JSON.stringify(results));

        if (Object.keys(data).length === 0) {
          return callback(true, null);
        }

        const UserAccountData = {
          AcountName: data[0].uidUsers,
        }

        callback(false, UserAccountData);

      }).catch(error => {
        logging.error(NAMESPACE, error.message, error);
        return callback(true, null);
      }).finally(() => {
        connection.end();
      });

    }).catch(error => {
      logging.error(NAMESPACE, error.message, error);
      return callback(true, null);
    });
}

const GetUserFolowedChanels = (req: Request, res: Response, next: NextFunction) => {

  //* if AccountToken param is null or empty send 404
  if (req.params.AccountToken === "" || req.params.AccountToken === null) {
    return res.status(200).json({
      error: true,
    });
  };

  InternalTools.GetUserPublicTokenByPrivateToken(req.params.AccountToken, (err: boolean, PublicToken: string) => {

    if (err) {
      return res.status(200).json({
        error: true
      })

    }

    //*it defines a type for chanel tokens object
    GetFolowedChanelsTokens(PublicToken, async (err: boolean, ChanelsTokens: ChanelsTokens[]) => {
      if (err) {
        return res.status(200).json({
          error: true 
        })
      }
      
      let Chanels:any = [];
      
      //*it is here to get all chanels data because it makes multiple requests to db
      for (let i = 0; i < ChanelsTokens.length; i++) {
        let ChanelsName = await GetFolowedChanelNames(ChanelsTokens[i].ChanelId).catch((err) => {
          return res.status(200).json({
            error: true
          });
        });;

        
        let ChanelData_Obj = {
          ChanelsId:ChanelsTokens[i].ChanelId,
          ChanelName: ChanelsName,
        };

        Chanels.push(ChanelData_Obj);
      }


      return res.status(200).json(
        Chanels,

      )
    });
  });
}

const GetFolowedChanelNames = async (ChanelId: string) => new Promise((resolve, reject) => {
  const GetFolowedChanelsTokensQuerryString = `SELECT ChanelName FROM chanels WHERE PublicChanelToken="${ChanelId}"`;
  Connect()
    .then(connection => {
      Query(connection, GetFolowedChanelsTokensQuerryString).then(results => {

        let data = JSON.parse(JSON.stringify(results));
        resolve(data[0].ChanelName);

      }).catch(error => {
        logging.error(NAMESPACE, error.message, error);
        reject(error);

      })
        .finally(() => {
          connection.end();
        });

    }).catch(error => {
      logging.error(NAMESPACE, error.message, error);
      reject(error);
    });
});

const GetFolowedChanelsTokens = (AcountId: string, callBack: any) => {
  const GetFolowedChanelsTokensQuerryString = `SELECT ChanelId FROM folow_class WHERE UserId="${AcountId}"`;

  Connect()
    .then(connection => {

      Query(connection, GetFolowedChanelsTokensQuerryString).then(results => {

        let data = JSON.parse(JSON.stringify(results));
        callBack(false, data);

      }).catch(error => {
        logging.error(NAMESPACE, error.message, error);
        return callBack(true, null);
      }).finally(() => {
        connection.end();
      });

    }).catch(error => {
      logging.error(NAMESPACE, error.message, error);
      return callBack(true, null);
    });
}

export default {
  GetUserAccountData,
  GetUserAccountDataByPublicToken,
  LoginUserAccount,
  RegisterUserAccount,
  ChangeAccountSettings,
  GetUserFolowedChanels
};