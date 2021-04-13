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
        Chanelname={props.ChanelName}
        VideoLikes={props.VideoLikes}
        VideoTitle={props.VideoTitle}
      />

      {/* <CommentSection
        VideoPublicToken={props.VideoToken}
      /> */}
    </div>
  )
}

const GetVideoData = async (UserToken) => {
  //*Get a video from backend
  const RandomVideo = await axios.get(`${APIBACKEND}/video-player-manager/get-random-video/`);

  const VideoData = {
    UserToken: UserToken,
    VideoToken: RandomVideo.data.VideoToken,
  };
  // //* GetChanelData
  // const CreatorChanelData = await axios.get(`${APIBACKEND}/get-creator-chanel-by-video/${RandomVideo.data.VideoToken}`)

  // console.log(RandomVideo.data.ChanelNameFromVideo)

  //* Return Data
  return {
    VideoToken: RandomVideo.data.VideoToken,
    VideoLikes: RandomVideo.data.VideoLikes,
    VideoTitle: RandomVideo.data.VideoTitle,
    ChanelName: RandomVideo.data.ChanelNameFromVideo,
    // CreatorChanelPublicToken: CreatorChanelData.data
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
      VideoLikes: VideoPlayerDatas.VideoLikes,
      VideoTitle: VideoPlayerDatas.VideoTitle,
      ChanelName: VideoPlayerDatas.ChanelName,
      // ChanelPublicToken: VideoPlayerDatas.CreatorChanelPublicToken,
    }

  } else {

    const VideoPlayerDatas = await GetVideoData(Cookie.get("UserToken"));

    
    return {
      VideoToken: VideoPlayerDatas.VideoToken,
      VideoLikes: VideoPlayerDatas.VideoLikes,
      VideoTitle: VideoPlayerDatas.VideoTitle,
      ChanelName: VideoPlayerDatas.ChanelName
      // ChanelPublicToken: VideoPlayerDatas.CreatorChanelPublicToken,
    }
  }
}

export default LandingPage;