import fs from "fs";
import connection from "../DatabaseConnection/GetDatabaseConnection";

export function SendVideos(req: any, res: any) {
  const range = req.headers.range;

  if (!range) {
    res.status(400).send("Requires Range HEadder");
  }

  const queryString = `SELECT * FROM videos WHERE VideoToken="${req.params.name}";`;

  connection.query(queryString, (err: any, rows: any) => {
    if (err) {
      console.log(err);
      return;
    }

    const Videos = rows.map((row: any) => {
      return {
        VideoPath: row.VideoPath,
      };
    });

    
    if (Videos === "" || Videos === null) {
      return (
        res.json([
          {
            VideoDoesentExist: true,
          },
        ])
      )
    }

    const videoPath = Videos[0].VideoPath;
    const videoSize = fs.statSync(videoPath).size;

    //* parse range
    const chnuk_size = 10 ** 6; //* 1mb
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + chnuk_size, videoSize - 1);

    const contentLenght = end - start + 1;

    const headers = {
      "Content-Range": `bytes ${start} - ${end} / ${videoSize}`,
      "Accept-Ranges": "bytes",
      "Content-Lenght": contentLenght,
      "Content-Type": "video/mp4",
    };

    res.writeHead(206, headers);

    const videoStream = fs.createReadStream(videoPath, {
      start,
      end,
    });

    videoStream.pipe(res);
  });
}

function GetVideoChanel(ChanelToken: string, callback: any) {
  const getVideoChanelQuerryString = `SELECT * FROM chanels WHERE ChanelToken="${ChanelToken}"`;

  connection.query(getVideoChanelQuerryString, (err: any, rows: any) => {
    if (err) {
      console.log(err);
      return;
    }

    const Chanel = rows.map((row: any) => {
      return {
        ChanelName: row.ChanelName,
      };
    });

    callback(null, Chanel[0]);
  });
}

export function GetVideo(req: any, res: any) {
  const getRandomVideosQuerrySttring = `SELECT * FROM  videos`;
  connection.query(getRandomVideosQuerrySttring, (err: any, rows: any) => {
    if (err) {
      console.log(err);
      return;
    }

    const Videos = rows.map((row: any) => {
      return {
        VideosToken: row.VideoToken,
        ChanelToken: row.ChanelToken,
        VideoLikes: row.VideoLikes,
        VideoTitle: row.VideoName,
      };
    });

    let VideosTonkensLenght = Object.keys(Videos).length;

    let Video = Videos[Math.floor(Math.random() * VideosTonkensLenght)];

    GetVideoChanel(Video.ChanelToken, function (err: any, Chanel: any) {
      if (err) {
        console.log(err);
        console.log("Mysql error, check your query");
      } else {
        const VideoDatas = {
          VideoToken: Video.VideosToken,
          VideoLikes: Video.VideoLikes,
          VideoTitle: Video.VideoTitle,
          ChanelName: Chanel.ChanelName,
        };
        res.json(VideoDatas);
      }
    });
  });
}
