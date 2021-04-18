import multer from "multer";
const fse = require("fs.extra");
import hat from "hat";
import fs from "fs";
import connection from "../DatabaseConnection/GetDatabaseConnection";


let storage = multer.diskStorage({
  destination: function (req:any, file:any, cb:any) {
    cb(null, `../videos/tmp`);
  },

  filename: function (req:any, file:any, cb:any) {
    cb(null, `${file.originalname}`);
  },

});

let upload = multer({
  storage: storage,
}).single("file");

function SendVidsDataToDb(req:any, filepath:string) {
  const VideoToken = hat();

  const SqlSendVidsDatasQuerry = `INSERT INTO videos( VideoName, VideoToken, ChanelToken, DatePublished, VideoLikes, VideoPath, VideoThumb) VALUES(?,?,?,?,?,?,?)`;

  connection.query(
    SqlSendVidsDatasQuerry,
    [
      req.file.filename,
      VideoToken,
      req.body.ChanelToken,
      "azi",
      0,
      filepath,
      "inaca nu",
    ],
    (err:any) => {
      if (err) {
        console.log(err);
        return;
      }
    }
  );
}

export function Upload (req:any, res:any) {
  upload(req, res, (err:any) => {
    if (err) {
      console.log(err);
    }

    const sql = `SELECT * FROM chanels WHERE ChanelToken= "${req.body.ChanelToken}"`;

    //console.log(req.file)

    connection.query(sql, (err:any, rows:any) => {
      if (err) {
        console.log(err);
        return;
      }

      const chanels = rows.map((row:any) => {
        return {
          chanelName: row.ChanelName,
          chanelFolder: row.ChanelFolder,
        };
      });

      let fileName = req.file.filename; 

      if (!fs.existsSync(`../videos/${chanels[0].chanelFolder}/${fileName}`)) {
        // TODO:treansform  all fs sync to unsync
        fs.mkdirSync(`../videos/${chanels[0].chanelFolder}/${fileName}`);
        fse.move(
          `../videos/tmp/${fileName}`,
          `../videos/${chanels[0].chanelFolder}/${fileName}/${fileName}`
        );
        SendVidsDataToDb(
          req,
          `../videos/${chanels[0].chanelFolder}/${fileName}/${fileName}`
        );
      } else {
        fs.rmSync(`../videos/tmp/${fileName}`);
      }
    });

    return res.json({
      success: true,
      filePath: res.req.path,
      fileName: res.req.filename,
    });
  });
};

export default {Upload}