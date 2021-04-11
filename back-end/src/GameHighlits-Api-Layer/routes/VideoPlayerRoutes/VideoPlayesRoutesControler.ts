import express from "express";
import VideoPlayerManager from "../../Services/VidePlayerManager/VideoPlayerManager";

const router = express.Router();

//*SendVideo TO Fron-End
router.get("/get-specific-video/:VideoToken", VideoPlayerManager.SendTheVideo);
router.get("/get-random-video/", VideoPlayerManager.GetRandomVideoToken);
router.post("/has-user-liked-check/", VideoPlayerManager.UserLikedTheVideoCheck);
router.post("/like-the-video/", VideoPlayerManager.UserLikedTheVideoCheck);


export = router;