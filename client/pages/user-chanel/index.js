import Head from 'next/head'
import axios from "axios";
import { useRouter } from 'next/router'

import { useState, useEffect } from "react"
import { APIBACKEND } from "../../EnviormentalVariables"
import VideoTamplate from "../../Components/VideoTemplate/VideoTamplate"

const UserChanelPage = () => {
    const router = useRouter();
    const [VideoList, setVideoList] = useState([]);

    //Fetch Chanel Videos 
    const GetChanelVideos = () => {

        axios
            .get(
                `${APIBACKEND}/getchanelvideos/${localStorage.getItem("ChanelToken")}`
            )
            .then((res) => {
                let tmpVideoList = [];
                for (let index = 0; index < res.data.length; index++) {
                    tmpVideoList.push(res.data[index])

                }
                setVideoList(tmpVideoList)
            });
    };

    // Feth Chech if use has one or more chanels
    useEffect(() => {
        const Url = `${APIBACKEND}/checkforchanel/${localStorage.getItem("UserToken")}`;
        axios.get(Url).then((res) => {
            if (res.data[0] != null) {
                if (!res.data[0].IsLoggedIn) {
                    return (
                        localStorage.removeItem("ChanelToken"),
                        router.push('/user-chanel/create-chanel')
                    );
                }
                localStorage.setItem("ChanelToken", res.data[0].ChanelToken)
                GetChanelVideos();
            }
        });
    }, []);

    //Render jsx
    return (
        <div>
            <Head>
                <title>GameHighlights</title>
            </Head>

            {VideoList.map((Video, index) => (
                <div key={index}>
                    <VideoTamplate
                        VideoName={Video.VideoName}
                    />
                </div>
            ))}
        </div>
    )
}

export default UserChanelPage;