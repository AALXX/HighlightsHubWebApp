import { Request, Response, NextFunction, json } from 'express';
import logging from "../../config/logging";
import { Connect, Query } from "../../config/mysql";
import hat from 'hat';
import bcrypt from 'bcrypt';
import fs, { exists } from "fs"


import InternalTools from "../../CommonFunctions/GetUserTokenTools/GetUserPublicToken"
import AccountChecks from "../../CommonFunctions/AccountChecks/AccountExistCheck"
const NAMESPACE = 'AccountManagerService';


//*Interfarces
interface ChanelsTokens {
  ChanelToken: string;
};

//*Get user Account by provided user token
const GetOwnerUserAccountData = (req: Request, res: Response) => {
  //* if /:AccountToken param is null or empty send 404
  if (req.params.AccountToken === "" || req.params.AccountToken === null) {
    return res.status(200).json({
      error: true,
    });
  };

  const GetAccountQueryString = `SELECT UserName, UserEmail, ChanelFolowers, ChanelDescription FROM users WHERE PrivateToken="${req.params.AccountToken}";`;
  Connect()
    .then(connection => {

      Query(connection, GetAccountQueryString).then(results => {

        let data = JSON.parse(JSON.stringify(results));

        //*it checks if data object has values if not it sends back account ecist false
        if (Object.keys(data).length === 0) {
          return res.status(200).json({
            error: true,
            AccountExist: false
          })
        }

        res.status(200).json({
          AccountExist: true,
          error: false,
          AccountName: data[0].UserName,
          AccountEmail: data[0].UserEmail,
          AccountFolowers: data[0].ChanelFolowers,
          ChanelDescription: data[0].ChanelDescription,
        });

      }).catch(error => {
        logging.error(NAMESPACE, error.message, error);
        return res.status(500).json({
          error: true
        });
      }).finally(() => {
        connection.end();
      });

    }).catch(error => {
      logging.error(NAMESPACE, error.message, error);
      return res.status(500).json({
        error: true
      });
    });
};

const GetAccountImage = (req: Request, res: Response) => {

  const GetAccountImageQuerryString = `SELECT AccountAvatarIconPath FROM users WHERE PublicToken="${req.params.PublicAccountToken}"`;
  Connect()
    .then(connection => {

      Query(connection, GetAccountImageQuerryString).then(results => {

        let data = JSON.parse(JSON.stringify(results));
        console.log(data)
        if (Object.keys(data).length === 0) {

          return fs.readFile("./assets/AccountDefaulImage/RedAccountDefaultImage.png", (err, image) => {
            res.writeHead(200, {
              "Content-Type": "image/png"
            }),
              res.end(image);
          });

        }



        if (data[0].AccountAvatarIconPath === null) {
          return fs.readFile("./assets/AccountDefaulImage/RedAccountDefaultImage.png", (err, image) => {
            res.writeHead(200, {
              "Content-Type": "image/png"
            }),
              res.end(image);
          });
        }
        
        res.writeHead(200, {
          "Content-Type": "image/png"
        });

        fs.readFile(data[0].AccountAvatarIconPath, (err, image) => {
          res.end(image);
        });

      }).catch(error => {
        logging.error(NAMESPACE, error.message, error);
        return res.status(500).json({
          error: true
        });
      }).finally(() => {
        connection.end();
      });

    }).catch(error => {
      logging.error(NAMESPACE, error.message, error);
      return res.status(500).json({
        error: true
      });
    });
}

//*Login user account into Database
const LoginUserAccount = (req: any, res: any, next: NextFunction) => {

  logging.info(NAMESPACE, "LogIn User Account Service called");

  if (req.body.UserEmail === "" || req.body.UserEmail === undefined || req.body.Password === "" || req.body.Password === undefined) {
    return res.status(200).json({
      error: true,
    });
  }
  const loginAccountQuerryString = `SELECT PrivateToken, UserPwd, PublicToken FROM users WHERE UserEmail="${req.body.UserEmail}"`;
  Connect()
    .then(connection => {

      Query(connection, loginAccountQuerryString).then(results => {

        let data = JSON.parse(JSON.stringify(results));
        if (Object.keys(data).length === 0) {
          return res.status(200).json({
            UserFound: false
          });
        }

        bcrypt.compare(req.body.Password, data[0].UserPwd, (err, isMatch) => {
          if (err) {
            return res.status(500).json({
              error: true
            });
          } else if (!isMatch) {
            return res.status(200).json({
              UserFound: true,
              pwdmathch: false,
              error: false
            })
          } else {
            return res.status(202).json({ UserToken: data[0].PrivateToken, PublicUserToken: data[0].PublicToken,  pwdmathch: true, error: false, UserFound: true });
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

  if (req.body.UserName === "" || req.body.UserName === undefined || req.body.UserEmail === "" || req.body.UserEmail === undefined || req.body.Password === "" || req.body.Password === undefined) {
    return res.status(200).json({
      error: true,
    });
  }


  AccountChecks.UserNameAndEmailCheck(req.body.UserName, req.body.UserEmail, (err: boolean, exist: boolean) => {

    if (err) {
      return res.status(200).json({
        error: false,
      })
    }

    if (exist) {
      return res.status(200).json({
        error: false,
        UserNameExistsorEmailExists: true,
      })
    }

    const saltRounds = 10;
    bcrypt.hash(req.body.Password, saltRounds, (err, hash) => {
      if (err) {
        return res.status(500);
      }

      let PublicUserToken = hat();
      let PrivateUserToken = hat();

      let UserCredentials = {
        UserName: req.body.UserName,
        PrivateUserToken: PrivateUserToken,
        PublicUserToken: PublicUserToken,
        UserEmail: req.body.UserEmail,
        HashedPasWord: hash
      }

      Connect()
        .then(connection => {

          const RegisterqueryString = `INSERT INTO users (UserName, PrivateToken, PublicToken, UserEmail, UserPwd) VALUES ("${UserCredentials.UserName}","${UserCredentials.PrivateUserToken}","${UserCredentials.PublicUserToken}","${UserCredentials.UserEmail}","${UserCredentials.HashedPasWord}")`;

          Query(connection, RegisterqueryString).then(() => {
            return res.status(200).json({ UserToken: PrivateUserToken, PublicUserToken: PublicUserToken });

          }).catch(error => {
            logging.error(NAMESPACE, error.message, error);
            return res.status(500);
          }).finally(() => {
            connection.end();
          });

        }).catch(error => {
          logging.error(NAMESPACE, error.message, error);
          return res.status(500);
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
            return callback(false, false);
          } else {
            return callback(false, true);
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
const ChangeAccountName = (req: Request, res: Response, next: NextFunction) => {

  if (req.body.AccountToken === undefined || req.body.AccountToken === null || req.body.newAccountName === undefined || req.body.newAccountName === null) {
    return res.status(200).json({
      error: true
    });
  }

  const ChangeAccountSettingsSqlQuery = `UPDATE users SET UserName="${req.body.newAccountName}" WHERE PrivateToken="${req.body.AccountToken}"`;
  Connect()
    .then(connection => {
      Query(connection, ChangeAccountSettingsSqlQuery).then(results => {

        let data = JSON.parse(JSON.stringify(results));

        if (data.affectedRows === 0) {
          return res.status(200).json({
            error: true,
          })
        }

        res.status(200).json({
          error: false
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

//*Make profile public/private
const ChangeProfileVisibility = (req: Request, res: Response) => {
  logging.info(NAMESPACE, "Change User Name Service called");
  if (req.body.AccountToken === undefined || req.body.AccountToken === null) {
    return res.status(200).json({
      error: true
    });
  }

  // const ChangeAccountSettingsSqlQuery = `UPDATE users SET public="${req.body.newAccountName}" WHERE PrivateToken="${req.body.AccountToken}"`;
  // Connect()
  //   .then(connection => {
  //     Query(connection, ChangeAccountSettingsSqlQuery).then(results => {

  //       let data = JSON.parse(JSON.stringify(results));

  //       if (data.affectedRows === 0) {
  //         return res.status(200).json({
  //           error: true,
  //         })
  //       }

  //       res.status(200).json({
  //         error: false
  //       })

  //     }).catch(error => {
  //       logging.error(NAMESPACE, error.message, error);
  //       return res.status(505);
  //     }).finally(() => {
  //       connection.end();
  //     });

  //   }).catch(error => {
  //     logging.error(NAMESPACE, error.message, error);
  //     return res.status(505);
  //   });

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


    //*it defines a type for chanel tokens object
    GetFolowedChanelsTokens(req.params.AccountToken, async (err: boolean, ChanelsTokens: ChanelsTokens[]) => {
      if (err) {
        return res.status(200).json({
          error: true
        })
      }

      let Chanels: any = [];

      //*get all chanels data because it makes multiple requests to db
      for (let i = 0; i < ChanelsTokens.length; i++) {
        let ChanelsName = await GetFolowedChanelNames(ChanelsTokens[i].ChanelToken).catch((err) => {
          return res.status(200).json({
            error: true
          });
        });;

        let ChanelData_Obj = {
          ChanelsId: ChanelsTokens[i].ChanelToken,
          ChanelName: ChanelsName,
        };

        Chanels.push(ChanelData_Obj);
      }


      return res.status(200).json(
        Chanels,

      )
    });
}

const GetFolowedChanelNames = async (AccountToken: string) => new Promise((resolve, reject) => {
  const GetFolowedChanelsTokensQuerryString = `SELECT UserName FROM users WHERE PublicToken="${AccountToken}"`;
  Connect()
    .then(connection => {
      Query(connection, GetFolowedChanelsTokensQuerryString).then(results => {

        let data = JSON.parse(JSON.stringify(results));
        resolve(data[0].UserName);

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

const GetFolowedChanelsTokens = (AcountToken: string, callBack: any) => {
  const GetFolowedChanelsTokensQuerryString = `SELECT ChanelToken FROM folow_class WHERE UserToken="${AcountToken}"`;

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
  GetOwnerUserAccountData,
  GetUserAccountDataByPublicToken,
  LoginUserAccount,
  RegisterUserAccount,
  ChangeAccountName,
  GetUserFolowedChanels,
  GetAccountImage
};