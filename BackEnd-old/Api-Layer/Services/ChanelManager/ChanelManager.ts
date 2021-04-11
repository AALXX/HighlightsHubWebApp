import connection from "../DatabaseConnection/GetDatabaseConnection";
import hat from "hat";
import bcrypt from "bcrypt";
import fs from "fs";
const fse = require("fs.extra");
import multer from "multer";

import { GetChanelVids } from "./videosManager/VideosManager";

let storage = multer.diskStorage({
  destination: function (req: any, file: any, cb: any) {
    cb(null, `../videos/tmp`);
  },

  filename: function (req: any, file: any, cb: any) {
    cb(null, `${file.originalname}`);
  },
});

let upload = multer({
  storage: storage,
}).single("file");

//* CrateChanel
export async function InsertChanelIntoDb(req: any, res: any) {

  upload(req, res, (err: any) => {
    if (err) {
      console.log(err);
    }
    let VideoData = JSON.parse(req.body.data);

    const sqlQuerry = `INSERT INTO chanels(ChanelName, ChanelToken, PublicToken, ChanelEmail, ChanelPassword, ChanelOwnderToken, ChanelFolder, ChanelAvatarPath) VALUES(?,?,?,?,?,?,?,?)`;
    let ChanelToken = hat();
    let ChanelFolder = hat();
    let ChanelPublicToken = hat();
    const HashedPasword = bcrypt.hashSync(VideoData.Password, 8);
    const pathToChanelAvatar = `../videos/${ChanelFolder}/style/avatar/ChanelAvatar.jpg`;

    fs.mkdirSync(`../videos/${ChanelFolder}`);
    fs.mkdirSync(`../videos/${ChanelFolder}/style/`);
    let fileName = req.file.filename;
    fse.move(
      `../videos/tmp/${fileName}`,
      `../videos/${ChanelFolder}/style/ChanelAvatar.jpg`
    );
    connection.query(
      sqlQuerry,
      [
        VideoData.ChanelName,
        ChanelToken,
        ChanelPublicToken,
        VideoData.ChanelEmail,
        HashedPasword,
        VideoData.ChanelOwnerToken,
        ChanelFolder,
        pathToChanelAvatar,
      ],
      (err: any, rows: any) => {
        if (err) {
          console.log(err);
          return;
        }
      }
    );
  });
}

//* Login Into Chanel
export const LoginToChanel = (req: any, res: any) => {

  const ChanelLoginQuerryString = `SELECT * FROM chanels WHERE ChanelEmail=? AND ChanelOwnderToken=?`;
  connection.query(ChanelLoginQuerryString, [req.body.ChanelMail, req.body.UserToken], (err: any, rows: any) => {
    if (err) {
      console.log(err)
    }

    const ChanelPasswordFromDb = rows.map((row: any) => {
      return {
        HashedPassword: row.ChanelPassword,
      }
    })

    //* GetChanel Data by e-mail
    const Chanel = rows.map((row: any) => {
      return {
        ChanelToken: row.ChanelToken,
        WrongCredentials: false,
      }
    })

    //* If Credentals are wrong Send wrong credentials status
    if (Chanel == "" || Chanel == null) {
      return (
        res.json([
          {
            WrongCredentials: true,
          },
        ])
      )
    }

    //*Compare hasedPassword with one from the usser
    bcrypt.compare(req.body.ChanelPassword, ChanelPasswordFromDb[0].HashedPassword, function (err, isMatch) {
      if (err) {
        throw err
      } else if (!isMatch) {
        //* If Password is wrong Send wrong credentials status
        res.json([
          {
            WrongCredentials: true,
          },
        ])
      } else {
        const IsAuthentificatedSqlQuerry = `UPDATE chanels SET IsLoggedIn="1"  WHERE ChanelToken="${ChanelPasswordFromDb[0].ChanelToken}";`
        connection.query(IsAuthentificatedSqlQuerry, (err: any) => {
          if (err) {
            console.log(err)
          }
          res.json(Chanel)
        })
      }
    })

  })

}

//* Get Chanel Videos
export const GetChanelVideos = (req: any, res: any) => {
  GetChanelVids(req.params.name, (err: boolean, Videos: any) => {
    res.json(Videos)
  });
}

//* Get UserChanel  Data
export const UserChanelDataByPrivateToken = (ChanelPrivateToken:string, res:any) => {
  const GetCreatorChanelInfo = `SELECT * FROM chanels WHERE ChanelToken="${ChanelPrivateToken}"`;

  connection.query(GetCreatorChanelInfo, (err: any, rows: string[]) => {
    if (err) {
      console.log(err);
    }
    
    const UserrChanelInfos = rows.map((row: any) => {
      return {
        ChanelExists: true,
        ChanelName: row.ChanelName,
        ChanelFolowers: row.Folowers,
        ChanelAvatarPath: row.ChanelAvatarPath,
      };
    });

    const PublicInfoisEmpty = Object.keys(UserrChanelInfos).length === 0

    //*Check if infos are Empty
    if (!PublicInfoisEmpty) {
      res.json(UserrChanelInfos)
    } else {
      res.json([
        {
          ChanelExists: false,
        },
      ]);
    }

  });
}

//* Get UserAccount Videos
export const GetUserChanelVideos = (PrivateChanelToken:any, res:any) => {
  GetChanelVids(PrivateChanelToken, (err: boolean, Videos: any) => {
    res.json(Videos)
  });
}

export default { InsertChanelIntoDb, GetChanelVideos };