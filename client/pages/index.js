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
        ChanelPublicToken={props.ChanelPublicToken}
      />

      <CommentSection
        VideoPublicToken={props.VideoToken}
      />
    </div>
  )
}

const GetVideoData = async () => {
  //*Get a video from backend
  const RandomVideo = await axios.get(`${APIBACKEND}/video-player-manager/get-random-video/`);

  if(RandomVideo.data.error === true){
    return <h1>No videoAvailabele</h1>
  }
  
  //* Return Data
  return {
    VideoToken: RandomVideo.data.VideoToken,
    VideoLikes: RandomVideo.data.VideoLikes,
    VideoTitle: RandomVideo.data.VideoTitle,
    ChanelName: RandomVideo.data.ChanelNameFromVideo,
    ChanelPublicToken: RandomVideo.data.ChanelPublicToken
  }
}

LandingPage.getInitialProps = async ({ req, res }) => {

  //* Check if is rendered client-side / server-side 
  if (req) {

    //*Create instance
    const VideoPlayerDatas = await GetVideoData();
    
    return {
      VideoToken: VideoPlayerDatas.VideoToken,
      VideoLikes: VideoPlayerDatas.VideoLikes,
      VideoTitle: VideoPlayerDatas.VideoTitle,
      ChanelName: VideoPlayerDatas.ChanelName,
      ChanelPublicToken: VideoPlayerDatas.ChanelPublicToken,
    }

  } else {

    const VideoPlayerDatas = await GetVideoData();

    
    return {
      VideoToken: VideoPlayerDatas.VideoToken,
      VideoLikes: VideoPlayerDatas.VideoLikes,
      VideoTitle: VideoPlayerDatas.VideoTitle,
      ChanelName: VideoPlayerDatas.ChanelName,
      ChanelPublicToken: VideoPlayerDatas.ChanelPublicToken,
    }
  }
}

export default LandingPage;