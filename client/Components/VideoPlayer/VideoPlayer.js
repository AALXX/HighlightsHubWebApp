import { useRef, useState, useEffect } from "react";
import axios from "axios";
import styles from "./style/VideoPlayerStyle.module.css";
import { useRouter } from 'next/router'
import Cookie from "js-cookie";
import Image from "next/image";


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
    const [VideoTitleState, setVideoTitleState] = useState("");
    const [VideoTokenState, setVideoTokenState] = useState("");
    const [ChanelPublicTokenState, setChanelPublicTokenState] = useState("");

    useEffect(() => {
        setVidLikes(VideoLikes);
        setChanelName(Chanelname);
        setVideoTitleState(VideoTitle);
        setVideoTokenState(VideoPublicToken);
        setChanelPublicTokenState(ChanelPublicToken);

        if (previousUrl.current !== VideoTokenState) {
            videoRef?.current.load();
        }

    }, [VideoPublicToken, VideoLikes]);

    const LikeVideoFunc = () => {
        const VideoData = {
            UserToken: Cookie.get("UserToken"),
            VideoToken: VideoTokenState,
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

    const NextVideo = () => {
        //*Get a video from backend
        axios.get(`${APIBACKEND}/video-player-manager/get-random-video/`).then((res) => {
            if (res.data.error === true) {
                return window.alert("There aren't videos");
            }
            setVideoTokenState(res.data.VideoToken);
            setVideoTitleState(res.data.VideoTitle);

            videoRef?.current.load();
        })


    }

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
                    src={`${APIBACKEND}/video-player-manager/get-specific-video/${VideoTokenState}`}
                    type="video/mp4"
                />
            </video>
            <div className={styles.VideoPlayerFooter}>
                <button className={styles.ChanelButton} onClick={() => router.push(`/chanel/${ChanelPublicTokenState}`)}>{ChanelName}</button>
                <h3>{VideoTitleState}</h3>
                <button onClick={LikeVideoFunc}>LikeButton</button>
                <p className={styles.VideoLikesNumber}>{VidLikes}</p>
                <button onClick={NextVideo}>Next</button>
            </div>
        </div>
    );
}

export default VideoPlayer;
