//packages
import connection from '../DatabaseConnection/GetDatabaseConnection';
import hat from "hat";
import bcrypt from "bcrypt";

const saltRounds = 10;

export const GetusserAcount = (req: any, res: any) => {
  const queryString = `SELECT * FROM users WHERE Token="${req.params.name}";`;

  connection.query(queryString, (err: any, rows: any) => {
    if (err) {
      console.log(err);
      return;
    }

    const users = rows.map((row: any) => {
      return {
        AcountName: row.uidUsers,
        IsLoggedIn: row.IsLogedIn,
      };
    });

    res.json(users);
  });
}

export const RegisterUser = (req: any, res: any) => {
  const RegisterqueryString = `INSERT INTO users(uidUsers,Token ,emailUsers,pwdUsers) VALUES (?,?,?,?)`;
  let UserToken = hat();
  
  bcrypt.hash(req.body.PassWord, saltRounds, (err, hash) => {
    if (err) {
      console.log(err)
    }
    connection.query(RegisterqueryString, [req.body.Username, UserToken, req.body.Mailuid, hash] , (err: any, rows: any) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  });
    
}
export const LoginUser = (req: any, res: any) => {
  const loginQuerryString = `SELECT * FROM users WHERE emailUsers=?`

  connection.query(loginQuerryString, [req.body.mailuid], (err: any, rows: any) => {
    if (err) {
      console.log(err)
    }

    const User = rows.map((row:any) => {
      return {
        HashedPassword: row.pwdUsers,
        UserToken: row.Token
      }
    })

    bcrypt.compare(req.body.Password, User[0].HashedPassword, function (err, isMatch) {
      if (err) {
        throw err
      } else if (!isMatch) {
        console.log("Password doesn't match!")
        res.end()
      } else {
        const IsAuthentificatedSqlQuerry = `UPDATE users SET IsLogedIn="1"  WHERE Token="${User[0].UserToken}";`
        connection.query(IsAuthentificatedSqlQuerry, (err: any) => {
          if (err) {
          console.log(err)
          }
          res.json(User[0].UserToken)
        })
      }
    })
    
  })
}

export const GetUserPrivateAndPublicInformationsByToken = (Token:any, callback:any) => {
  const GetAccountPublicAndPrivateInfo = `SELECT * FROM users WHERE Token="${Token}"`;
  connection.query(GetAccountPublicAndPrivateInfo, (err: any, rows: string[]) => {
    if (err) {
      console.log(err);
    }
    const PrivateAccountInfos = rows.map((row: any) => {
      return {
        PrivateAcountToken: row.Token,
        UserEmail: row.emailUsers
        //TODO: AccountPath: row.ChanelAvatarPath,
      };
    });

    const PublicAccountInfos = rows.map((row: any) => {
      return {
        AccountName: row.uidUsers,
      };
    });

    const PrivateInfoisEmpty = Object.keys(PrivateAccountInfos).length === 0
    const PublicInfoisEmpty = Object.keys(PublicAccountInfos).length === 0

    if (!PrivateInfoisEmpty && !PublicInfoisEmpty) {
      callback(null, { PublicAccountInfos, PrivateAccountInfos });
    }
  })
}

export default { GetusserAcount, RegisterUser, LoginUser , GetUserPrivateAndPublicInformationsByToken};
    