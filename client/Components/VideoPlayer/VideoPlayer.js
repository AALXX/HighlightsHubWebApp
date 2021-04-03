import { useRef, useState, useEffect } from "react";
import axios from "axios";
import styles from "./style/VideoPlayerStyle.module.css";
import { useRouter } from 'next/router'

import { APIBACKEND } from "../../EnviormentalVariables"

const VideoPlayer = ({
    VideoPublicToken,
    ChanelName,
    VideoLikes,
    VideoTitle,
    HasUserLikedTheVideo,
    ChanelPublicToken
}) => {
    const videoRef = useRef();
    const previousUrl = useRef(VideoPublicToken);

    const router = useRouter()

    const [VidLikes, setVidLikes] = useState(0);
    const [HasUserLiked, setHasUserLiked] = useState(false);

    useEffect(() => {
        if (previousUrl.current !== VideoPublicToken) {
            videoRef?.current.load();
        }

        setVidLikes(VideoLikes);
        setHasUserLiked(HasUserLikedTheVideo);
    }, [VideoPublicToken, VideoLikes, HasUserLikedTheVideo]);

    const LikeVideoFunc = () => {
        const VideoData = {
            UserToken: localStorage.getItem("UserToken"),
            VideoToken: VideoPublicToken,
        };

        axios.post(
            `${APIBACKEND}/video-player-manager/like-a-video`,
            VideoData
        );

        if (HasUserLiked === true) {
            setVidLikes(VidLikes - 1);
            setHasUserLiked(false);
        } else {
            setVidLikes(VidLikes + 1);
            setHasUserLiked(true);
        }
    };

    return (
        <div className={styles.VideoPlayerFrame}>
            <video
                className={styles.Video}
                controls
                loop
                autoPlay
                muted
                ref={videoRef}
            >
                <source
                    src={`${APIBACKEND}/getspecificvideo/${VideoPublicToken}`}
                    type="video/mp4"
                />
            </video>
            <div className={styles.VideoPlayerFooter}>
                <button className={styles.ChanelButton} onClick={() => router.push(`/chanel/${ChanelPublicToken}`)}>{ChanelName}</button>
                <h3>{VideoTitle}</h3>
                <button onClick={LikeVideoFunc}>LikeButton</button>
                <p className={styles.VideoLikesNumber}>{VidLikes}</p>
            </div>
        </div>
    );
}

export default VideoPlayer;
