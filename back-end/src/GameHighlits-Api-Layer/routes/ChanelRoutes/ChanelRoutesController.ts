import express from "express";

import ChanelManagerService from "../../Services/ChanelManager/ChanelManager";
import OwnerChanelManagerService from "../../Services/ChanelManager/OwnerChanelManager";
import UploadManagerServce from "../../Services/ChanelManager/UploadManager";

const router = express.Router();

//*Creator Chanel
router.post("/get-creator-chanel-data/", ChanelManagerService.GetCreatorChanelData);
router.get("/get-creator-chanel-avatar/:ChanelId", ChanelManagerService.GetChanelAvatar );

//* User Chanel
router.post("/get-user-own-chanel-data/", OwnerChanelManagerService.GetOwnerChanelData);
router.post("/get-chanel-videos/", ChanelManagerService.GetChanelVideos);
router.post("/chanel-login/", OwnerChanelManagerService.LoginIntoChanel);
router.post("/chanel-create/", OwnerChanelManagerService.CreateChanel);


router.post("/upload-video/", UploadManagerServce.Upload);
router.post("/change-video-title-or-description/", OwnerChanelManagerService.ChangeVideoTitle);
router.post("/delete-video/", OwnerChanelManagerService.DeleteVideo);


export = router;