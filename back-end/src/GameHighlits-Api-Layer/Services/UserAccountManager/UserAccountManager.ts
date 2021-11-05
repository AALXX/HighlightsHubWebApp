import { Request, Response, NextFunction, json } from 'express';
import logging from "../../config/logging";
import { Connect, Query } from "../../config/mysql";
import hat from 'hat';
import bcrypt from 'bcrypt';
import fs from "fs"
import { validationResult } from 'express-validator'
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

import InternalTools from "../../CommonFunctions/GetUserTokenTools/GetUserPublicToken"
import AccountChecks from "../../CommonFunctions/AccountChecks/AccountExistCheck"
import GetUserPublicToken from '../../CommonFunctions/GetUserTokenTools/GetUserPublicToken';
const NAMESPACE = 'AccountManagerService';



const myValidationResult = validationResult.withDefaults({
  formatter: error => {
    return {
      errorMsg: error.msg,
    };
  },
});

//*Interfarces
interface ChanelsTokens {
  FolowedToken: string;
};

//*------------------------------------------------- Create accountp Part ------------------------------------------------------


//*Login user account into Database
const LoginUserAccount = (req: any, res: any) => {

  logging.info(NAMESPACE, "LogIn User Account Service called");

  const errors = myValidationResult(req);
  if (!errors.isEmpty()) {
    return res.status(200).json({ error: true, errors: errors.array() });
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
            return res.status(202).json({ UserToken: data[0].PrivateToken, PublicUserToken: data[0].PublicToken, pwdmathch: true, error: false, UserFound: true });
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

//*Register Account To dataBase
const RegisterUserAccount = (req: Request, res: Response) => {
  logging.info(NAMESPACE, "Register User Account Service called");

  //* Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = myValidationResult(req);
  if (!errors.isEmpty()) {
    return res.status(200).json({ error: true, errors: errors.array() });
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

//*------------------------------------------------- Get account infos part -----------------------------------------------------

//*Get user Account by provided user token
const GetOwnerUserAccountData = (req: Request, res: Response) => {
  //* if /:AccountToken param is null or empty send 404
  if (req.params.AccountToken === "" || req.params.AccountToken === null) {
    return res.status(200).json({
      error: true,
    });
  };

  const GetAccountQueryString = `SELECT UserName, UserEmail, ChanelFolowers, ChanelDescription, Visibility FROM users WHERE PrivateToken="${req.params.AccountToken}";`;
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
          AccountVisibility: data[0].Visibility,
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

//*Get Account Videos
const GetAccountVideos = (req: Request, res: Response) => {
  if (req.params.AccountToken === "" || req.params.AccountToken === undefined) {
    return res.status(200).json({
      error: true
    })
  }

  const GetChanelVideos = `SELECT VideoTitle, VideoToken, Fires FROM videos WHERE OwnerToken="${req.params.AccountToken}"`;
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

//* Get User Account public data by public token
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

const GetUserFolowedChanels = (req: Request, res: Response) => {

  if (req.params.AccountToken === "" || req.params.AccountToken === undefined) {
    return res.status(200).json({
      error: true
    })
  }


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
      let ChanelsName = await GetFolowedChanelNames(ChanelsTokens[i].FolowedToken).catch((err) => {
        return res.status(200).json({
          error: true
        });
      });;

      let ChanelData_Obj = {
        ChanelsId: ChanelsTokens[i].FolowedToken,
        ChanelName: ChanelsName,
      };

      Chanels.push(ChanelData_Obj);
    }


    return res.status(200).json(
      Chanels,

    )
  });
}

const GetFolowedChanelsTokens = (AcountToken: string, callBack: any) => {
  const GetFolowedChanelsTokensQuerryString = `SELECT FolowedToken FROM folow_class WHERE FolowerToken="${AcountToken}"`;

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
      logging.error(NAMESPACE, "CUM2");

      // logging.error(NAMESPACE, error.message, error);
      reject(error);
    });
});


//*------------------------------------------------- Change account infos part ---------------------------------------------------


//* Change ChangeAccountName to one send by user
const ChangeAccountName = (req: Request, res: Response) => {

  //* Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = myValidationResult(req);
  if (!errors.isEmpty()) {
    return res.status(200).json({ error: true, errors: errors.array() });
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
        logging.error(NAMESPACE, `${error.message}+1`, error);
        return res.status(505);
      }).finally(() => {
        connection.end();
      });

    }).catch(error => {
      logging.error(NAMESPACE, error.message, error);
      return res.status(505);
    });
}

//* Change ChangeAccountEmail to one send by user
const ChangeAccountEmail = (req: Request, res: Response) => {

  //* Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = myValidationResult(req);
  if (!errors.isEmpty()) {
    return res.status(200).json({ error: true, errors: errors.array() });
  }

  const ChangeAccountSettingsSqlQuery = `UPDATE users SET UserEmail="${req.body.newEmail}" WHERE PrivateToken="${req.body.AccountToken}"`;
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
const ChangeAccountvisibility = (req: Request, res: Response) => {
  logging.info(NAMESPACE, "Change User Name Service called");
  const errors = myValidationResult(req);
  if (!errors.isEmpty()) {
    return res.status(200).json({ error: true, errors: errors.array() });
  }

  const ChangeAccountSettingsSqlQuery = `UPDATE users SET Visibility="${req.body.newVisibility}" WHERE PrivateToken="${req.body.AccountToken}"`;
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

const ChangeAccountPassword = (req: Request, res: Response) => {

  const saltRounds = 10;
  bcrypt.hash(req.body.NewPassword, saltRounds, (err, hashedPwd) => {
    if (err) {
      return res.status(500);
    }

    const ChangeAccountSettingsSqlQuery = `UPDATE users SET UserPwd="${hashedPwd}" WHERE UserEmail="${req.body.AccountEmail}"`;
    Connect()
      .then(connection => {
        Query(connection, ChangeAccountSettingsSqlQuery).then(results => {

          let data = JSON.parse(JSON.stringify(results));
          if (data.affectedRows === 0) {
            return res.status(200).json({
              error: true,
              msg:"same password used"
            })
          }

          res.status(200).json({
            error: false
          })

        }).catch(error => {
          logging.error(NAMESPACE, `${error.message}`, error);
          return res.status(505);
        }).finally(() => {
          connection.end();
        });

      }).catch(error => {
        logging.error(NAMESPACE, error.message, error);
        return res.status(505);
      });
  });
}

//*------------------------------------------------- Delete account infos part ---------------------------------------------------


const DeleteAccount = (req: Request, res: Response) => {
  const errors = myValidationResult(req);

  if (!errors.isEmpty()) {
    return res.status(200).json({ error: true, errors: errors.array() });
  }

  console.log(req.body)

  const ChangeAccountSettingsSqlQuery = `DELETE FROM users WHERE PrivateToken="${req.body.AccountToken}"; DELETE FROM folow_class WHERE FolowerToken="${req.body.PublicAccountToken}";`;
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

export default {
  GetOwnerUserAccountData,
  GetUserAccountDataByPublicToken,
  GetAccountVideos,
  LoginUserAccount,
  RegisterUserAccount,
  ChangeAccountName,
  ChangeAccountEmail,
  ChangeAccountPassword,
  ChangeAccountvisibility,
  GetUserFolowedChanels,
  GetAccountImage,
  DeleteAccount
};