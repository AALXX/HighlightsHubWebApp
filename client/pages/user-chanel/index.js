import axios from "axios";
//*Import Cookies packages
import Cookies from 'cookies';
import Cookie from "js-cookie";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from "react";
import OwnerVideoTamplate from "../../Components/VideoTemplate/OwnerVideoTamplate";
import { APIBACKEND } from "../../EnviormentalVariables";
import styles from "../../styles/UserChanel.module.css";



const UserChanelPage = (props) => {
    const Router = useRouter();

    useEffect(() => {
        if (props.HasChanelCheck === false) {
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

                    {props.VideoList === undefined ? (<div>
                    </div>) : (<div>
                        {props.VideoList.map((Video, index) => (
                            <div key={index}>
                                <OwnerVideoTamplate
                                    VideoName={Video.VideoName}
                                    VideoToken={Video.VideoToken}
                                />
                            </div>
                        ))}
                    </div>)}

                </div>
            )}
        </div>
    )
}

const GetChanelData = async (ChanelToken) => {



    
    //* Requests
    const ChanelData = await axios.post(`${APIBACKEND}/chanel-manager/get-user-own-chanel-data/`, {ChanelToken});

    const data = {
        ChanelId:ChanelData.data.ChanelData.ChanelId
    }
    
    const ChanelVideos = await axios.post(`${APIBACKEND}/chanel-manager/get-chanel-videos/`, data);

    
    if (!ChanelData.data.ChanelExists) {
        return { HasChanelCheck: false }
    }
    
    let VideoList = [];
    for (let index = 0; index < ChanelVideos.data.Videos.length; index++) {
        VideoList.push(ChanelVideos.data.Videos[index])
    }

    return {
        HasChanelCheck: true,
        ChanelName: ChanelData.data.ChanelData.ChanelName,
        ChanelFolowers: ChanelData.data.ChanelData.ChanelFolowers,
        VideoList: VideoList,
    }
}

UserChanelPage.getInitialProps = async ({ req, res }) => {

    //* Check if is rendered client-side or server-side
    if (req) {
        //* Create a cookies instance
        const ServerSideCookies = new Cookies(req, res)

        if (ServerSideCookies.get("ChanelToken") === undefined || ServerSideCookies.get("ChanelToken") === null || ServerSideCookies.get("UserToken") === undefined || ServerSideCookies.get("UserToken") === null) {
            return {
                HasChanelCheck: false
            }
        }

        const ChanelData = await GetChanelData(ServerSideCookies.get("ChanelToken"));
        return {
            HasChanelCheck: ChanelData.HasChanelCheck,
            ChanelName: ChanelData.ChanelName,
            ChanelFolowers: ChanelData.ChanelFolowers,
            VideoList: ChanelData.VideoList,
        }

    } else {

        if (Cookie.get("ChanelToken") === undefined || Cookie.get("ChanelToken") === null || Cookie.get("UserToken") === undefined || Cookie.get("UserToken") === null) {
            return {
                HasChanelCheck: false
            }
        }

        const ChanelData = await GetChanelData(Cookie.get("ChanelToken"));

        return {
            HasChanelCheck: ChanelData.HasChanelCheck,
            ChanelName: ChanelData.ChanelName,
            ChanelFolowers: ChanelData.ChanelFolowers,
            VideoList: ChanelData.VideoList,
        }
    }
}

export default UserChanelPage;