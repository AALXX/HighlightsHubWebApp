import express from "express";
import VideoPlayerManager from "../../Services/VideosManager/VideoPlayerManager";
import VideoCommentsManager from "../../Services/VideosManager/VideoCommentManager";
import UploadVideoService from "../../Services/VideosManager/UploadVideoService";

const router = express.Router();

router.post("/upload-video", UploadVideoService.UploadVideoFileToServer);


router.post("/like-the-video/", VideoPlayerManager.LikeTheVideoFunc);
// router.get("/get-specific-video-data/:PublicVideoToken", VideoPlayerManager.GetSpecificVideoData);
router.post("/get-video-comments", VideoCommentsManager.GetVideoComments);
router.post("/post-comment-to-video", VideoCommentsManager.PostRecivedCommentToDataBase);


export = router;