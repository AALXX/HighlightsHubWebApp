import Head from 'next/head'
import { useState, useEffect } from "react";
import axios from "axios";
import VideoPlayer from "../Components/VideoPlayer/VideoPlayer"

import styles from "../styles/Home.module.css"
import { APIBACKEND } from "../EnviormentalVariables"

const LandingPage = () => {

  const [HasUserLikedTheVideo, setHasUserLikedTheVideo] = useState("")
  const [landingPageVideoToken, setlandingPageVideoToken] = useState("")
  const [ChanelPublicToken, setChanelPublicToken] = useState("")
  const [VideoChanelName, setVideoChanelName] = useState("")
  const [VideoTitle, setVideoTitle] = useState("")
  const [VideoLikes, setVideoLikes] = useState(0)

  const [isError, setisError] = useState(false)

  const HasUserLikedVideo = async (VideoToken) => {

    const VideoData = {
      UserToken: localStorage.getItem("UserToken"),
      VideoToken: VideoToken,
    };
    try {
      await axios.post(
        `${APIBACKEND}/video-player-manager/has-user-liked-video`,
        VideoData
      )
        .then((res) => {
          setHasUserLikedTheVideo(res.data[0].HasUserLiked)
        });

    } catch (error) {
      setisError(true)
    }

  };

  const GetChanelInfos = (VideoToken) => {
    axios
      .get(
        `${APIBACKEND}/get-creator-chanel-by-video/${VideoToken}`
      )
      .then((res) => {
        setChanelPublicToken(res.data)
      });
  };

  useEffect(() => {

    const GetVideo = () => {
      axios.get(`${APIBACKEND}/getrandomvideos/`)
        .then((res) => {

          setlandingPageVideoToken(res.data.VideoToken)
          setVideoChanelName(res.data.ChanelName)
          setVideoLikes(res.data.VideoLikes)
          setVideoTitle(res.data.VideoTitle)
          HasUserLikedVideo(res.data.VideoToken);
          GetChanelInfos(res.data.VideoToken);
        })
        .catch((err) => console.log(err));
    };

    GetVideo();
  }, [])

  if (isError === true) return <h1>There Was a error</h1>;

  return (
    <div className={styles.ForTouPageContent}>
      <Head>
        <title>GameHighlights</title>
      </Head>

      <VideoPlayer
        VideoPublicToken={landingPageVideoToken}
        ChanelName={VideoChanelName}
        VideoLikes={VideoLikes}
        HasUserLikedTheVideo={HasUserLikedTheVideo}
        ChanelPublicToken={ChanelPublicToken}
        VideoTitle={VideoTitle}
      />
      {/* <CommentSection
        VideoPublicToken={landingPageVideoToken}
      /> */}
    </div>
  )
}

export default LandingPage;