import { useRef, useState, useEffect } from "react";
import axios from "axios";
import styles from "./style/VideoPlayerStyle.module.css";
import { useRouter } from 'next/router'
import Cookie from "js-cookie";


import { APIBACKEND } from "../../EnviormentalVariables"

const VideoPlayer = ({
    VideoPublicToken,
    VideoLikes,
    VideoTitle,
    Chanelname,
    ChanelPublicToken,
}) => {
    const videoRef = useRef();
    const previousUrl = useRef(VideoPublicToken);

    const router = useRouter()

    const [VidLikes, setVidLikes] = useState(0);
    const [ChanelName, setChanelName] = useState("");

    useEffect(() => {
        if (previousUrl.current !== VideoPublicToken) {
            videoRef?.current.load();
        }

        setVidLikes(VideoLikes);
        setChanelName(Chanelname)
        //TODO GEt chanel Infos by chanelToken

    }, [VideoPublicToken, VideoLikes]);

    const LikeVideoFunc = () => {
        const VideoData = {
            UserToken: Cookie.get("UserToken"),
            VideoToken: VideoPublicToken,
        };

        axios.post(
            `${APIBACKEND}/video-player-manager/like-the-video`,
            VideoData
        ).then((res) => {
            if (res.data.UserLikedBolean === true) {
                setVidLikes(VidLikes + 1);
            } else {
                setVidLikes(VidLikes - 1);

            }
        })
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
                    src={`${APIBACKEND}/video-player-manager/get-specific-video/${VideoPublicToken}`}
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
