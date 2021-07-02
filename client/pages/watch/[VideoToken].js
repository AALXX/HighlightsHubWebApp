import Head from 'next/head'
import axios from "axios";
import { useEffect } from "react";

import { APIBACKEND } from "../../EnviormentalVariables"
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer.js";
import CommentSection from "../../Components/CommentSystem/CommentSection"
import styles from "../../styles/WatchVideo.module.css"


const WatchVideoPage = (props) => {

    useEffect(() => {
        if (props.IsError === true) {
            window.alert("Video Doesent exits")
        }
    }, [])

    return (
        <div>
            {props.IsError ? (
                <div><h1>Video doesen't exists</h1></div>

            ) : (

                <div className={styles.WathVideoPageContent}>
                    <Head><title>Watching: {props.VideoTitle}</title></Head>

                    <VideoPlayer
                        VideoPublicToken={props.VideoToken}
                        Chanelname={props.ChanelName}
                        VideoLikes={props.VideoLikes}
                        VideoTitle={props.VideoTitle}
                        ChanelPublicToken={props.ChanelPublicToken}
                    />

                    <CommentSection
                        VideoPublicToken={props.VideoToken}
                    />
                </div>

            )}

        </div>
    )
}

const GetVideoData = async (PublicVideoToken) => {

    const Video = await axios.get(`${APIBACKEND}/video-player-manager/get-specific-video-data/${PublicVideoToken}`);

    if (Video.data.error === true) {
        return {
            IsError: true,

        }
    }

    console.log(Video)
    
    return {
        VideoToken: Video.data.VideoToken,
        VideoLikes: Video.data.VideoLikes,
        VideoTitle: Video.data.VideoTitle,
        ChanelName: Video.data.ChanelNameFromVideo,
        ChanelPublicToken: Video.data.ChanelPublicToken,
        IsError: false
    }
}

WatchVideoPage.getInitialProps = async ({ req, res, query }) => {

    //* Check if is rendered client-side or server-side
    if (req) {
        //*Create instance
        const VideoData = await GetVideoData(query.VideoToken)

        return {
            IsError: VideoData.IsError,
            VideoToken: VideoData.VideoToken,
            VideoLikes: VideoData.VideoLikes,
            VideoTitle: VideoData.VideoTitle,
            ChanelName: VideoData.ChanelName,
            ChanelPublicToken: VideoData.ChanelPublicToken,
        }
    } else {

        const VideoData = await GetVideoData(query.VideoToken)

        return {
            IsError: VideoData.IsError,
            VideoToken: VideoData.VideoToken,
            VideoLikes: VideoData.VideoLikes,
            VideoTitle: VideoData.VideoTitle,
            ChanelName: VideoData.ChanelName,
            ChanelPublicToken: VideoData.ChanelPublicToken,
        }
    }
}

export default WatchVideoPage