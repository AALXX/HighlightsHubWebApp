//Apliction pakeges
import express, { Application, Request, Response } from "express";
const UniversalServerApi: Application = express();
const http = require("http").createServer(UniversalServerApi);
import cors from "cors";

//Chanel/Creato Packages
import {
  GetChanelVideos,
  InsertChanelIntoDb,
  VerifyifUserHasChanel,
} from "../Services/ChanelManager/ChanelManager";
import {
  SendVideos,
  GetVideo,
} from "../Services/LandingPageManager/LandingPageManager";
import { LikeTheVideoFunc, GetVideoData} from "../Services/Video-PlayerManager/VideoPlayerManager";

//User Packages
import { GetusserAcount, RegisterUser, LoginUser } from "../Services/ManageUserAccount/GetUserAcount";

// CommentSystem packages

import { InsertCommentToDatabase, GetVideoComments } from "../Services/CommentSystemManager/CommentSystem"

//Creator Packages
import {
  GetPublicChanelToken,
  GetCreatorChanelPubliucData,
  GetCreatorChanelPubliucAvatar,
  GetChanelPublicVideos,
} from "../Services/GenericCreatorChanelManager/GenericCreatorChanelManager";

import { Upload } from "../Services/UploadManager/UploadManager";

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
UniversalServerApi.use(cors(corsOptions));
UniversalServerApi.use(express.json());


//UserAccount
UniversalServerApi.post("/api/register", (req: Request, res: Response) => {
  RegisterUser(req, res);
})

UniversalServerApi.post("/api/login-user", (req: Request, res: Response) => {
  LoginUser(req, res);
})

UniversalServerApi.get("/api/login/:name", (req: Request, res: Response) => {
  GetusserAcount(req, res);
});

UniversalServerApi.get("/api/login/", (req: Request, res: Response) => {
  res.json([
    {
      IsLoggedIn: 0,
    },
  ]);
});

//Video Sharing
UniversalServerApi.post(
  "/api/video-player-manager/:name",
  (req: Request, res: Response) => {
    LikeTheVideoFunc(req, res);
  }
);

UniversalServerApi.get(
  "/api/get-video-data/:videotoken",
  (req: Request, res: Response) => {
    GetVideoData(req.params.videotoken, res);
    
  }
);

UniversalServerApi.get(
  "/api/getrandomvideos/",
  (req: Request, res: Response) => {
    GetVideo(req, res);
  }
);

UniversalServerApi.get(
  "/api/getchanelvideos/:name",
  (req: Request, res: Response) => {
    GetChanelVideos(req, res);
  }
);

UniversalServerApi.get(
  "/api/getspecificvideo/:name",
  (req: Request, res: Response) => {
    SendVideos(req, res);
  }
);

//CommentSystem
UniversalServerApi.post(
  "/api/postacomment/",
  (req: Request, res: Response) => {
    InsertCommentToDatabase(req, res);
  }
);

UniversalServerApi.post(
  "/api/getvideocomment",
  (req: Request, res: Response) => {
    GetVideoComments(req, res)
  }
)

//User Chanel
UniversalServerApi.post("/api/upload/", (req: Request, res: Response) => {
  Upload(req, res);
});

UniversalServerApi.post("/api/createchanel/", (req: Request, res: Response) => {
  InsertChanelIntoDb(req, res);
});

UniversalServerApi.get(
  "/api/checkforchanel/:name",
  (req: Request, res: Response) => {
    VerifyifUserHasChanel(req, res);
  }
);

//GenericCreator
UniversalServerApi.get(
  "/api/get-creator-chanel-by-video/:videotoken",
  (req: Request, res: Response) => {
    GetPublicChanelToken(req, res);
  }
);

UniversalServerApi.get(
  "/api/get-creator-chanel-videos/:publicchaneltoken",
  (req: Request, res: Response) => {
    GetChanelPublicVideos(req, res);
  }
);

UniversalServerApi.get(
  "/api/get-creator-chanel-data/:publicchaneltoken",
  (req: Request, res: Response) => {
    GetCreatorChanelPubliucData(req, res);
  }
);

UniversalServerApi.get(
  "/api/get-creatro-chanel-avatar/:publicchaneltoken",
  (req: Request, res: Response) => {
    GetCreatorChanelPubliucAvatar(req, res);
  }
);

http.listen(7000, function () {
  console.log("Server listening on port 7000");
});