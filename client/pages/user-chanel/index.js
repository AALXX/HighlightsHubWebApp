import { useRouter } from 'next/router'
import Head from 'next/head'
import axios from "axios";
import Cookies from 'cookies'
import Cookie from "js-cookie";


import { APIBACKEND } from "../../EnviormentalVariables"
import { useEffect } from "react"
import VideoTamplate from "../../Components/VideoTemplate/VideoTamplate"
import styles from "../../styles/UserChanel.module.css"

const UserChanelPage = (props) => {
    const Router = useRouter();

    useEffect(() => {
        if (props.HasChanel === false) {
            Router.push("/user-chanel/chanel-login")
        }


    }, [])

    //* Render jsx
    return (
        <div>
            <Head>
                <title>GameHighlights</title>
            </Head>

            <button onClick={() => { Cookie.remove("ChanelToken") }}>Log out</button>
            {props.HasChanel ? (
                <div><h1>Has no chanel</h1></div>
            ) : (
                <div>
                    <div className={styles.UserChanelTop}>
                        {/* <img className={styles.ChanelAvatarImage} src={`${APIBACKEND}/get-creator-chanel-avatar/${PublicChanelToken}`} alt="" width="150" height="150" /> */}
                        <h1 className={styles.ChanelNameText}>{props.ChanelName}</h1>

                        <h1>Folowers: {props.ChanelFolowers}</h1>
                    </div>

                    {props.VideoList.map((Video, index) => (
                        <div key={index}>
                            <VideoTamplate
                                VideoName={Video.VideoName}
                                VideoToken={Video.VideoToken}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

const GetChanelData = async (ChanelToken) => {

    const data = {
        ChanelToken: ChanelToken
    }

    //*Requests
    const ChanelData = await axios.post(`${APIBACKEND}/get-user-chanel-data-by-private-token/`, data);
    const ChanelVideos = await axios.post(`${APIBACKEND}/get-user-chanel-videos-by-private-token/`, data);

    let tmpVideoList = [];
    for (let index = 0; index < ChanelVideos.data.length; index++) {
        tmpVideoList.push(ChanelVideos.data[index])
    }

    if (!ChanelData.data[0].ChanelExists) {
        return { HasChanel: false }
    }

    return {
        ChanelName: ChanelData.data[0].ChanelName,
        ChanelFolowers: ChanelData.data[0].ChanelFolowers,
        VideoList: tmpVideoList,
    }
}

UserChanelPage.getInitialProps = async ({ req, res }) => {

    //* Check if is rendered client-side or server-side
    if (req) {
        //* Create a cookies instance
        const ServerSideCookies = new Cookies(req, res)

        if (ServerSideCookies.get("ChanelToken") === undefined || ServerSideCookies.get("ChanelToken") === null) {
            return {
                HasChanel: false
            }
        }

        const ChanelData = await GetChanelData(ServerSideCookies.get("ChanelToken"));
        return {
            ChanelName: ChanelData.ChanelName,
            ChanelFolowers: ChanelData.ChanelFolowers,
            VideoList: ChanelData.VideoList
        }

    } else {

        if (Cookie.get("ChanelToken") === undefined || Cookie.get("ChanelToken") === null) {
            return {
                HasChanel: false
            }
        }

        const ChanelData = await GetChanelData(Cookie.get("ChanelToken"));

        return {
            ChanelName: ChanelData.ChanelName,
            ChanelFolowers: ChanelData.ChanelFolowers,
            VideoList: ChanelData.VideoList
        }
    }
}

export default UserChanelPage;