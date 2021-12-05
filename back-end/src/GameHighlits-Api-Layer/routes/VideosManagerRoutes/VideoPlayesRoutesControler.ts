import express from "express";
import VideoPlayerManager from "../../Services/VideosManager/VideoPlayerManager";
import VideoCommentsManager from "../../Services/VideosManager/VideoCommentManager";
import UploadVideoService from "../../Services/VideosManager/UploadVideoService";
import { body } from 'express-validator'

const router = express.Router();

router.post("/upload-video", UploadVideoService.UploadVideoFileToServer);


router.post("/like-the-video/", body('UserPublicToken').not().isEmpty().trim(), body('VideoToken').not().isEmpty().trim(), VideoPlayerManager.LikeTheVideoFunc);
router.get("/get-video-data/:UserPublicToken/:VideoToken", VideoPlayerManager.GetVideoData);
router.get("/get-random-video-token/", VideoPlayerManager.GetRandomVideoToken);

router.post("/get-video-comments", VideoCommentsManager.GetVideoComments);
router.post("/post-comment-to-video", VideoCommentsManager.PostRecivedCommentToDataBase);


export = router;