import express from "express";

import ChanelManagerService from "../../Services/ChanelManager/ChanelManager";
import UploadManagerServce from "../../Services/ChanelManager/UploadManager";

const router = express.Router();

//*Creator Chanel
router.post("/get-creator-chanel-data/", ChanelManagerService.GetCreatorChanelData);
router.get("/get-creator-chanel-avatar/:ChanelId", ChanelManagerService.GetChanelAvatar );

//* User Chanel
router.post("/get-user-own-chanel-data/", ChanelManagerService.GetOwnerChanelData);
router.post("/get-chanel-videos/", ChanelManagerService.GetChanelVideos);
router.post("/chanel-login/", ChanelManagerService.LoginIntoChanel);
router.post("/upload-video/", UploadManagerServce.Upload);


export = router;