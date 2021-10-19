import Cookies from 'js-cookie'
import { useEffect, useState, useRef } from "react";
import axios from "axios"
import * as cookie from 'cookie'
import Link from "next/Link"
import style from "../../styles/Account/UploadPage.module.css"

//*Video PriviewComponent
function Clip({ url }) {
    const videoRef = useRef();
    const previousUrl = useRef(url);

    useEffect(() => {
        if (previousUrl.current === url) {
            return;
        }

        if (videoRef.current) {
            videoRef.current.load();
        }

        previousUrl.current = url;
    }, [url]);

    if (url == null) {
        return (
            <div className={style.NoVideoPreviewBox}>
                <h1 className={style.NoVideoText}>No video Inputed</h1>
            </div>
        );
    }

    return (
        <video ref={videoRef} controls className={style.PreviewVideo}>
            <source src={url} />
        </video>
    );
}

export default function UploadPage(props) {

    //*Video attr states
    const [videoTitle, setvideoTitle] = useState("");
    const [videoVisibility, setvideoVisibility] = useState("public");

    //*Video object states
    const [videoFile, setvideoFile] = useState(null);
    const [ObjectUrl, setObjectUrl] = useState(null);

    //*Upload Progress State
    const [progress, setProgress] = useState(0);


    //*Uploads Video to server
    const UploadFile = () => {
        if (videoFile[0] == null) {
            return window.alert("No Video file inputed");
        }

        let formData = new FormData();
        formData.append("file", videoFile[0]);
        formData.append("VideoTitle", videoTitle);
        formData.append("VideoVisibility", videoVisibility);
        formData.append("UserPublicToken", Cookies.get("PublicUserToken"));

        const config = {
            header: { 'content-type': 'multipart/formdata' },
            onUploadProgress: (progressEvent) => {
                let percent = 0;
                const { loaded, total } = progressEvent;
                percent = Math.floor((loaded * 100) / total) //* set percent
                if (percent <= 100) {
                    setProgress(percent)
                }
            }
        }

        axios.post(`${process.env.LOCAL_BACKEND_URL}/videos-manager/upload-video`, formData, config).then((res) => {
            console.log(res.data);
        })
    }

    //*Creates a Url for previe video
    const PreviewVideo = (e) => {
        e.preventDefault();
        setObjectUrl(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <>
            {props.AccountExist ? (
                <div className={style.PageContainer}>
                    <div className={style.UploadFileSection}>
                        <label htmlFor="VideoFile" className={style.UploadBox}>
                            <input className={style.UploadInput} type="file" id="VideoFile" onChange={(e) => { setvideoFile(e.target.files); PreviewVideo(e); }} accept=".mov,.mp4" />
                            <img src='/assets/UploadPageIcons/VideoUploadIcon.svg' alt='AccountImageButton' className={style.UploadIcon} />
                        </label>
                        <div className={style.ProgresAndAtributesContainer}>
                            <div className={style.ProgressNarContainer}>
                                <div className={style.ProgressBar} style={{ width: `${progress}%` }}>

                                </div>
                            </div>
                            <div className={style.VideoAtributesContainer}>

                                <input type="text" placeholder="Highlight Title" className={style.VideoTitleInput} onChange={(e) => {
                                    setvideoTitle(e.target.value)
                                }} />

                                <select name="videoVisibility" className={style.videoVisibilitySelect} onChange={(e) => setvideoVisibility(e.target.value)}>
                                    <option value="public">Public</option>
                                    <option value="private">Private</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <hr color="#7c7c7c" className={style.HorizontalLine} />

                    <div className={style.PreveiwContainer}>
                        <h1 className={style.PreviewHeadLine}>Preview:</h1>
                        <Clip url={ObjectUrl} />
                    </div>

                    <button className={style.UploadButton} onClick={() => { UploadFile() }}>Upload</button>
                </div>
            ) : (
                <div>
                    <h1>Account Not Found</h1>
                    <Link href="/u/signup" >
                        <a className={style.ToLoginLink}>Create an account</a>
                    </Link>
                </div>
            )}

        </>
    )
}

export async function getServerSideProps(context) {

    if (context.req.headers.cookie === undefined) {
        return {
            props: {
                AccountExist: false,
                UserToken: null
            }
        }
    }

    const parsedCookies = cookie.parse(context.req.headers.cookie);


    const AccountData = await axios.get(`${process.env.LOCAL_BACKEND_URL}/user-account-manager/get-owner-user-account-data/${parsedCookies.UserToken}`);


    if (AccountData.data.AccountExist === false) {
        return {
            props: {
                AccountExist: AccountData.data.AccountExist,
                UserToken: null
            }
        }
    }

    return {
        props: {
            AccountExist: AccountData.data.AccountExist,
            UserToken: parsedCookies.UserToken
        },
    }
}