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

export async function InsertChanelIntoDb(req: any, res: any) {
  //console.log(req.body);

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

export function VerifyifUserHasChanel(req: any, res: any) {
  const sqlQuerry = `SELECT * FROM chanels WHERE ChanelOwnderToken="${req.params.name}"`;

  connection.query(sqlQuerry, (err: any, rows: any) => {
    if (err) {
      console.log(err);
      return;
    }

    const chanels = rows.map((row: any) => {
      return {
        IsLoggedIn: row.IsLoggedIn,
        ChanelToken: row.ChanelToken,
      };
    });

    res.json(chanels);
  });
}

export function GetChanelVideos(req: any, res: any) {
  GetChanelVids(req.params.name, (err: boolean, Videos: any) => {
    res.json(Videos)
  });
}

export default { InsertChanelIntoDb, VerifyifUserHasChanel, GetChanelVideos };
