import Head from 'next/head'
import axios from "axios";
import Cookies from 'cookies'
import Cookie from "js-cookie";

import { APIBACKEND } from "../../EnviormentalVariables"
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer.js";
import CommentSection from "../../Components/CommentSystem/CommentSection"
import styles from "../../styles/WatchVideo.module.css"


const WatchVideoPage = (props) => {


    return (
        <div className={styles.WathVideoPageContent}>
            <Head><title>Watching: {props.VideoTitle}</title></Head>

            <VideoPlayer
                VideoPublicToken={props.VideoToken}
                ChanelName={props.VideoChanelName}
                VideoLikes={props.VideoLikes}
                HasUserLikedTheVideo={props.HasUserLikedTheVideo}
                ChanelPublicToken={props.ChanelPublicToken}
                VideoTitle={props.VideoTitle}
            />

            <CommentSection
                VideoPublicToken={props.VideoToken}
            />
        </div>
    )
}

const GetVideoData = async (VideoToken, UserToken) => {

    const VideoData = {
        UserToken: UserToken,
        VideoToken: VideoToken,
    }

    const HasUserLikedVideo = await axios.post(`${APIBACKEND}/has-user-liked-video`, VideoData)
    const GetVideoData = await axios.get(`${APIBACKEND}/get-video-data/${VideoToken}`);

    const GetChanelInfos = await axios.get(`${APIBACKEND}/get-creator-chanel-by-video/${VideoToken}`)
    const ChanelData = await axios.get(`${APIBACKEND}/get-creator-chanel-data/${GetChanelInfos.data}`);

    return {
        HasUserLikedTheVideo: HasUserLikedVideo.data[0].HasUserLiked,
        VideoTitle: GetVideoData.data[0].VideoName,
        VideoLikes: GetVideoData.data[0].VideoLikes,
        ChanelName: ChanelData.data[0].ChanelName,
        ChnalePublicToken: GetChanelInfos.data
    }
}

WatchVideoPage.getInitialProps = async ({ req, res, query }) => {

    //* Check if is rendered client-side or server-side
    if (req) {
        //*Create instance
        const ServerSideCookies = new Cookies(req, res)
        const VideoData = await GetVideoData(query.VideoToken, ServerSideCookies.get("UserToken"))


        return {
            VideoToken: query.VideoToken,
            VideoChanelName: VideoData.ChanelName,
            VideoLikes: VideoData.VideoLikes,
            HasUserLikedTheVideo: VideoData.HasUSerLikedTheVideo,
            ChanelPublicToken: VideoData.CreatorChanelPublicToken,
            VideoTitle: VideoData.VideoTitle,

        }
    } else {

        const VideoData = await GetVideoData(query.VideoToken, Cookie.get("UserToken"))

        return {
            VideoToken: query.VideoToken,
            VideoChanelName: VideoData.ChanelName,
            VideoLikes: VideoData.VideoLikes,
            HasUserLikedTheVideo: VideoData.HasUSerLikedTheVideo,
            ChanelPublicToken: VideoData.CreatorChanelPublicToken,
            VideoTitle: VideoData.VideoTitle,

        }
    }
}

export default WatchVideoPage