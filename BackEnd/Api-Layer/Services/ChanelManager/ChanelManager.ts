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

// CrateChanel

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

// Login Into Chanel
export const LoginToChanel = (req: any, res: any) => {

  const ChanelLoginQuerryString = `SELECT * FROM chanels WHERE ChanelEmail=?`;
  connection.query(ChanelLoginQuerryString, [req.body.ChanelMail], (err: any, rows: any) => {
    if (err) {
      console.log(err)
    }

    // GetChanel Data by e-mail
    const Chanel = rows.map((row: any) => {
      return {
        HashedPassword: row.ChanelPassword,
        ChanelToken: row.ChanelToken
      }
    })

    //Compare hasedPassword with one from the usser
    bcrypt.compare(req.body.ChanelPassword, Chanel[0].HashedPassword, function (err, isMatch) {
      if (err) {
        throw err
      } else if (!isMatch) {
        console.log("Password doesn't match!")
        res.end()
      } else {
        const IsAuthentificatedSqlQuerry = `UPDATE chanels SET IsLoggedIn="1"  WHERE ChanelToken="${Chanel[0].ChanelToken}";`
        connection.query(IsAuthentificatedSqlQuerry, (err: any) => {
          if (err) {
            console.log(err)
          }
          res.json(Chanel[0].ChanelToken)
        })
      }
    })

  })

}

//VerifyIfThe User has a Chanel
export const VerifyifUserHasChanel = (req: any, res: any) => {
  const sqlQuerry = `SELECT * FROM chanels WHERE ChanelOwnderToken="${req.params.name}"`;
  //TODO Add a ele statemant to not send
  connection.query(sqlQuerry, (err: any, rows: any) => {
    if (err) {
      console.log(err);
      return;
    }

    const chanel = rows.map((row: any) => {
      return {
        IsLoggedIn: row.IsLoggedIn,
        ChanelToken: row.ChanelToken,
      };
    });

    if (chanel == "" || chanel == null) {
      return (
        res.json([
          {
            IsLoggedIn: 0,
          },
        ])
      )
    }
    res.json(chanel);
  });
}

//Get Chanel Videos
export const GetChanelVideos = (req: any, res: any) => {
  GetChanelVids(req.params.name, (err: boolean, Videos: any) => {
    res.json(Videos)
  });
}



export default { InsertChanelIntoDb, VerifyifUserHasChanel, GetChanelVideos };
