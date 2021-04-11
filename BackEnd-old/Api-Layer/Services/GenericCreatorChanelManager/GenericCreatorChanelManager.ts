import connection from "../DatabaseConnection/GetDatabaseConnection";
import { GetChanelVids } from "../ChanelManager/videosManager/VideosManager";


import fs from "fs";


//Get Chanel PublicToken
const GetChanelTokenbyVideoToken = (VideoToken: string, callback: any) => {
  const GetChanelTokenqueryString = `SELECT * FROM videos WHERE VideoToken="${VideoToken}";`;

  connection.query(GetChanelTokenqueryString, (err: any, rows: any) => {
    if (err) {
      console.log(err);
      return;
    }
    const Chanel = rows.map((row: any) => {
      return {
        ChanelToken: row.ChanelToken,
      };
    });
    callback(null, Chanel[0].ChanelToken);
  });
};

export const GetPublicChanelToken = (req: any, res: any) => {
  GetChanelTokenbyVideoToken(
    req.params.videotoken,
    function (err: any, ChanelToken: string) {
      if (err) {
        console.log(err);
        console.log("Mysql error, check your query");
      } else {
        const GetPublicChanelTokenByChanelToken = `SELECT * FROM chanels WHERE ChanelToken="${ChanelToken}"`;
        connection.query(
          GetPublicChanelTokenByChanelToken,
          (err: any, rows: any) => {
            if (err) {
              console.log(err);
              return;
            }
            const CreatorChanel = rows.map((row: any) => {
              return {
                publicToken: row.PublicToken,
              };
            });

            res.json(CreatorChanel[0].publicToken);
          }
        );
      }
    }
  );
};


//* Get Chanel Public Data
const GetChanelInfos = (PublicToken: any, res:any, callback: any,) => {
  const GetCreatorChanelInfo = `SELECT * FROM chanels WHERE PublicToken="${PublicToken}"`;

  connection.query(GetCreatorChanelInfo, (err: any, rows: string[]) => {
    if (err) {
      console.log(err);
    }
    
    const PrivateCreatorChanelInfos = rows.map((row: any) => {
      return {
        PrivateChanelToken: row.ChanelToken,
        ChanelAvatarPath: row.ChanelAvatarPath,
        ChanelPriateToken: row.ChanelToken
      };
    });

    const PublicCreatorChanelInfos = rows.map((row: any) => {
      return {
        ChanelName: row.ChanelName,
        ChanelFolowers: row.Folowers,
      };
    });

    const PrivateInfoisEmpty = Object.keys(PrivateCreatorChanelInfos).length === 0
    const PublicInfoisEmpty = Object.keys(PublicCreatorChanelInfos).length === 0

    if (!PrivateInfoisEmpty && !PublicInfoisEmpty) {
      callback(null, { PublicCreatorChanelInfos, PrivateCreatorChanelInfos });
    } else {
      res.end();
    }

  });
};

//Get Chanel Public Data
export const GetCreatorChanelPubliucData = (req: any, res: any) => {
  GetChanelInfos(req.params.publicchaneltoken, res, (err: boolean, ChanelInfos: any) => {
    if (err) {
      console.log(err);
    }
    res.json(ChanelInfos.PublicCreatorChanelInfos);
  });
};
//Get Creator Chanel Avatar
export const GetCreatorChanelPubliucAvatar = (req: any, res: any) => {
  GetChanelInfos(req.params.publicchaneltoken, res, (err: boolean, ChanelInfos: any) => {
    if (err) {
      console.log(err);
    }

    if (ChanelInfos.PrivateCreatorChanelInfos[0].ChanelAvatarPath !== "") {
      const imgStream = fs.createReadStream(
        ChanelInfos.PrivateCreatorChanelInfos[0].ChanelAvatarPath
      );

      // ADD image.pipe percentej and after it's done res.end()
      
      imgStream.pipe(res);
      setTimeout(() => {
        res.end();
      }, 100);
    }
  });
};

export const GetChanelPublicVideos = (req: any, res: any) => {
  GetChanelInfos(req.params.publicchaneltoken, res, (err: boolean, ChanelInfos: any) => {
    if (err) {
      console.log(err);
    }
    GetChanelVids(ChanelInfos.PrivateCreatorChanelInfos[0].PrivateChanelToken, (err: boolean, Videos: any) => {
      res.json(Videos)
      res.end();
    });
  });
}



export default {
  GetPublicChanelToken,
  GetCreatorChanelPubliucData,
  GetCreatorChanelPubliucAvatar,
  GetChanelPublicVideos,
};
