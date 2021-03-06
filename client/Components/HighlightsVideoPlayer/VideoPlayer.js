import styles from "./styles/VideoPlayer.module.css"
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/router'
import Link from "next/Link"

export default function VideoPlayer(props) {

    //* Mutable state of props.VideoToken
    const [Folowers, setFolowers] = useState(0);
    const [AccountName, setAccountName] = useState("TEST");
    const [VideoTitle, setVideoTitle] = useState("")
    const [VideoFires, setVideoFires] = useState(0)
    const [UserHadLiked, setUserHadLiked] = useState(false)
    const [AccountToken, setVideoOwnerToken] = useState("")
    const [CurrentMinutes, setCurrentMinutes] = useState(0)
    const [CurrentSeconds, setCurrentSeconds] = useState(0)
    const [DurationMinutes, setDurationMinutes] = useState(0)
    const [durationSeconds, setDurationSeconds] = useState(0)

    const [VideoTokenState, setVideoTokenState] = useState("");
    const [Progress, setProgress] = useState(0);
    const [Playing, setPlaying] = useState(false);
    const [Volume, setVolume] = useState(0.5);
    const [VideoExist, setVideoExist] = useState(false)
    const [VideoEnded, setVideoEnded] = useState(false)



    const mounted = useRef(false);
    const videoRef = useRef();
    const previousUrl = useRef(props.VideoToken);

    useEffect(() => {
        mounted.current = true;

        //*Store volume value
        setVolume(localStorage.getItem("Volume"));

        //*player delay load stats
        setTimeout(() => {
            videoRef?.current?.volume = localStorage.getItem("Volume");
            if (videoRef?.current?.paused) {
                setPlaying(true);
            }
            else {
                setPlaying(false);
            }
        }, 100);

        setVideoTokenState(props.VideoToken)
        GetVideoData(props.VideoToken);

        if (previousUrl.current !== VideoTokenState) {
            videoRef?.current?.load();
        }

        //*update method every 1 sec
        const VideoChecks = window.setInterval(() => {

            if (!mounted.current) {
                return;
            }

            //*it updates progress bar
            setProgress((videoRef?.current?.currentTime / videoRef?.current?.duration) * 100);

            //*it updates current and total minutes shown  
            setCurrentMinutes(Math.floor(videoRef?.current?.currentTime / 60));
            setCurrentSeconds(Math.floor(videoRef?.current?.currentTime - CurrentMinutes * 60));
            setDurationMinutes(Math.floor(videoRef?.current?.duration / 60));
            setDurationSeconds(Math.floor(videoRef?.current?.duration - DurationMinutes * 60));

            if (videoRef?.current?.duration === videoRef?.current?.currentTime) {
                setVideoEnded(true);
            }

        }, 1000);

        return () => { mounted.current = false; clearInterval(VideoChecks); };

    }, [props.VideoToken]);


    /**
     ** Get Data About Video 
     */
    const GetVideoData = (VideoToken) => {
        axios.get(`${process.env.LOCAL_BACKEND_URL}/videos-manager/get-video-data/${props.UserPublicToken}/${VideoToken}`).then((res) => {

            if (res.data.error) {
                return window.alert("error");
            }

            if (!res.data.VideoFound) {
                return setVideoExist(false);
            }

            setVideoExist(true);

            setUserHadLiked(res.data.UserLikedBoolean);
            setVideoTitle(res.data.VideoTitle);
            setVideoFires(res.data.FIres);
            setVideoOwnerToken(res.data.OwnerToken);

            axios.get(`${process.env.LOCAL_BACKEND_URL}/user-account-manager/get-other-user-account-data/${res.data.OwnerToken}`).then((res) => {
                setAccountName(res.data.AccountName);
                setFolowers(res.data.AccountFolowers);
            });

        });

    }

    //* volume
    const ChangeVolume = (e) => {
        videoRef.current.volume = e.target.value;
        setVolume(e.target.value);
        localStorage.setItem("Volume", e.target.value);

    }

    //* Play/Pause
    const PlayOrPauseVideo = () => {
        if (videoRef?.current.paused) {
            videoRef?.current.play();
            setPlaying(true);
        }
        else {
            videoRef?.current.pause();
            setPlaying(false);
        }
    }

    const NextRandomVideo = () => {

        axios.get(`${process.env.LOCAL_BACKEND_URL}/videos-manager/get-random-video-token/`).then((res) => {
            if (res.data.error) {
                return window.alert("Error has occured");
            }
            setVideoTokenState(res.data.VideoToken);
            GetVideoData(res.data.VideoToken);
            videoRef?.current.load();
        });
    }

    const LikeHighlight = () => {
        
        if(props.UserPublicToken === null){
            window.alert("Can't like without an account")
        }

        axios.post(`${process.env.LOCAL_BACKEND_URL}/videos-manager/like-the-video/`, { UserPublicToken: props.UserPublicToken, VideoToken: VideoTokenState }).then((res) => {
            if (!res.data.UserLikedBolean) {
                setUserHadLiked(false);
                return setVideoFires(VideoFires - 1)
            }

            setUserHadLiked(true);
            return setVideoFires(VideoFires + 1)
        });
    }

    return (
        <div className={styles.VideoPlayerBorder} >
            {VideoExist ? (
                <div className={styles.VideoComponentContainer}>
                    {VideoEnded ? (
                        <div className={styles.EndOfVideoOverlay}>
                            <img src='/assets/Player/replayIcon.svg' className={styles.ReplayButton} alt=" replay image" onClick={() => { setVideoTokenState(props.VideoToken); videoRef?.current.load(); setVideoEnded(false) }} />

                            <img src='/assets/Player/nextIcon.svg' className={styles.NextButton} alt=" replay image" onClick={() => { NextRandomVideo(); setVideoEnded(false) }} />
                        </div>

                    ) : (null)}
                    <div onClick={() => { PlayOrPauseVideo(); }} className={styles.VideoClickPlay}>
                        <video ref={videoRef} className={styles.VideoComponent} autoPlay>
                            <source src={`${process.env.LOCAL_VIDEO_STREAM_API_URL}/video-stream/${VideoTokenState}`} type="video/mp4" />
                            <p>Your user agent does not support the HTML5 Video element.</p>
                        </video>
                    </div>

                    <div className={styles.VideoControlsContainer}>
                        <div className={styles.PlayBarProgress}>
                            <div className={styles.PlayBarProgressFill} style={{ width: `${Progress}%` }} />
                        </div>

                        <div className={styles.VideoControls}>
                            {Playing ? (
                                <img src='/assets/Player/PauseButton.svg' className={styles.PlayButton} alt="playing Image" onClick={() => { PlayOrPauseVideo(); }} />
                            ) : (
                                <img src='/assets/Player/PlayButton.svg' className={styles.PlayButton} alt="playing Image" onClick={() => { PlayOrPauseVideo(); }} />
                            )}

                            <div className={styles.Volume}>
                                {Volume == 0 ? (
                                    <img src='/assets/Player/volumeOff.svg' className={styles.MuteButton} alt="not muted imgage" onClick={() => { setVolume(0.5); videoRef.current.volume = 0.5; localStorage.setItem("Volume", 0.5) }} />
                                ) : (
                                    <img src='/assets/Player/volumeOn.svg' className={styles.MuteButton} alt="muted imgage" onClick={() => { setVolume(0); videoRef.current.volume = 0; localStorage.setItem("Volume", 0) }} />

                                )}
                                <input type="range" className={styles.VolumeBar} min="0" max="1" step="0.01" onChange={(e) => { ChangeVolume(e); }} value={Volume} />
                            </div>

                            <div className={styles.VideoTime}>
                                <span className={styles.CurrentTime}>{CurrentMinutes}:{CurrentSeconds < 10 ? "0" + CurrentSeconds : CurrentSeconds}</span> / <span className={styles.VideoTotalTime}>{DurationMinutes}:{durationSeconds}</span>
                            </div>
                            <img src='/assets/Player/Fullscreen.svg' className={styles.FullScreenButton} alt=" fullsScreen image" onClick={() => { videoRef.current.requestFullscreen(); }} />
                        </div>

                    </div>
                </div>
            ) : (
                <h1>Video Not Found</h1>
            )}

            <div className={styles.PlayerFooterCntainer}>
                <div className={styles.ChanelStatsContainer}>
                    <Link href={`/u/${AccountToken}`} >
                        <img className={styles.ProfilePicture} src='/assets/NavBarIcons/RedAccountDefaultImage.svg' />
                    </Link>

                    <div className={styles.ChanelStats}>
                        <h2 className={styles.AccountNameText}>{AccountName}</h2>
                        <hr color="#676767" className={styles.ChanelStatsBar} />
                        <h2 className={styles.AccountFolowersText}>Folowers: {Folowers}</h2>
                    </div>
                </div>
                <h1 className={styles.VideoTitleText}>{VideoTitle}</h1>
                {UserHadLiked ? (
                    <img src="/assets/Chanelicons/ActiveFireIcon.svg" alt="FireIcon" className={styles.Fireicon} onClick={() => { LikeHighlight(); }} />

                ) : (

                    <img src="/assets/Chanelicons/InactiveFireIcon.svg" alt="FireIcon" className={styles.Fireicon} onClick={() => { LikeHighlight(); }} />
                )}
                <div className={styles.VideoFiresTextDiv}>
                    <h1 className={styles.VideoFiresText}>{VideoFires}</h1>
                </div>

            </div>
            {/* <button onClick={() => {
                setVideoTokenState("kwb8agx17foqwi7ofno"); videoRef?.current.load();
            }} >test</button> */}
        </div>
    )
}
