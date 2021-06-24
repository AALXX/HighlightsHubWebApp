import express from "express";
import VideoPlayerManager from "../../Services/VidePlayerManager/VideoPlayerManager";
import VideoCommentsManager from "../../Services/VidePlayerManager/VideoCommentManager";

const router = express.Router();

//*SendVideo TO Fron-End
router.get("/get-specific-video/:VideoToken", VideoPlayerManager.SendTheVideo);
router.get("/get-random-video/", VideoPlayerManager.GetRandomVideoToken);
router.post("/like-the-video/", VideoPlayerManager.LikeTheVideoFunc);

router.get("/get-specific-video-data/:PublicVideoToken", VideoPlayerManager.GetSpecificVideoData);
router.post("/get-video-comments", VideoCommentsManager.GetVideoComments);
router.post("/post-comment-to-video", VideoCommentsManager.PostRecivedCommentToDataBase);


export = router;