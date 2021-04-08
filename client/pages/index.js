import Head from 'next/head'
import axios from "axios";
import Cookies from 'cookies'
import Cookie from "js-cookie";

import VideoPlayer from "../Components/VideoPlayer/VideoPlayer"
import CommentSection from "../Components/CommentSystem/CommentSection"

import styles from "../styles/Home.module.css"
import { APIBACKEND } from "../EnviormentalVariables"

const LandingPage = (props) => {

  return (
    <div className={styles.ForTouPageContent}>
      <Head>
        <title>GameHighlights</title>
      </Head>

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

const GetVideoData = async (UserToken) => {
  //*Get a video from backend
  const RandomVideo = await axios.get(`${APIBACKEND}/getrandomvideos/`);

  const VideoData = {
    UserToken: UserToken,
    VideoToken: RandomVideo.data.VideoToken,
  };

  //*Chech if user liked It
  const HasUserLikedTheVideo = await axios.post(`${APIBACKEND}/has-user-liked-video`, VideoData);
  //* GetChanelData
  const CreatorChanelData = await axios.get(`${APIBACKEND}/get-creator-chanel-by-video/${RandomVideo.data.VideoToken}`)

  //* Return Data
  return {
    ChanelName: RandomVideo.data.ChanelName,
    VideoToken: RandomVideo.data.VideoToken,
    VideoLikes: RandomVideo.data.VideoLikes,
    VideoTitle: RandomVideo.data.VideoTitle,
    HasUSerLikedTheVideo: HasUserLikedTheVideo.data[0].HasUserLiked,
    CreatorChanelPublicToken: CreatorChanelData.data
  }
}

LandingPage.getInitialProps = async ({ req, res }) => {

  //* Check if is rendered client-side / server-side
  
  if (req) {

    //*Create instance
    const ServerSideCookies = new Cookies(req, res)
    const VideoPlayerDatas = await GetVideoData(ServerSideCookies.get("UserToken"));

    return {
      VideoToken: VideoPlayerDatas.VideoToken,
      VideoChanelName: VideoPlayerDatas.ChanelName,
      VideoLikes: VideoPlayerDatas.VideoLikes,
      HasUserLikedTheVideo: VideoPlayerDatas.HasUSerLikedTheVideo,
      ChanelPublicToken: VideoPlayerDatas.CreatorChanelPublicToken,
      VideoTitle: VideoPlayerDatas.VideoTitle,
    }

  } else {

    const VideoPlayerDatas = await GetVideoData(Cookie.get("UserToken"));

    
    return {
      VideoToken: VideoPlayerDatas.VideoToken,
      VideoChanelName: VideoPlayerDatas.ChanelName,
      VideoLikes: VideoPlayerDatas.VideoLikes,
      HasUserLikedTheVideo: VideoPlayerDatas.HasUSerLikedTheVideo,
      ChanelPublicToken: VideoPlayerDatas.CreatorChanelPublicToken,
      VideoTitle: VideoPlayerDatas.VideoTitle,
    }
  }
}

export default LandingPage;