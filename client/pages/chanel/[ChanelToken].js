import { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import axios from "axios";
import VideoTamplate from "../../Components/VideoTemplate/VideoTamplate";
import styles from "../../styles/GenericChanel.module.css"

import { APIBACKEND } from "../../EnviormentalVariables"

const GenericChanelPage = ({PublicChanelToken}) => {

    const [ChanelName, setChanelName] = useState("")
    const [ChanelFolowers, setChanelFolowers] = useState("")
    const [VideoList, setVideoList] = useState([])

    useEffect(() => {
        const GetCreatorChanelData = (PublicToken) => {
            axios
                .get(
                    `${APIBACKEND}/get-creator-chanel-data/${PublicToken}`
                )
                .then((res) => {
                    setChanelName(res.data[0].ChanelName);
                    setChanelFolowers(res.data[0].ChanelFolowers);
                    GetCreatorChanelVideos(PublicChanelToken);
                });
        };
        const GetCreatorChanelVideos = (PublicToken) => {
            axios
                .get(
                    `${APIBACKEND}/get-creator-chanel-videos/${PublicToken}`
                ).then((res) => {
                    let tmpVideoList = [];
                    for (let index = 0; index < res.data.length; index++) {
                        tmpVideoList.push(res.data[index])
                    }
                    setVideoList(tmpVideoList)
                })
        }
        
        GetCreatorChanelData(PublicChanelToken);
        // console.log(PublicChanelToken)
    }, []);

    return (
        <div className={styles.GeneralCreatorChanelContentPage}>

            <div className={styles.GenericCreatorChanelTop}>
                <img className={styles.ChanelAvatarImage} src={`${APIBACKEND}/get-creator-chanel-avatar/${PublicChanelToken}`} alt="" width="150" height="150" />
                <h1>{ChanelName}</h1>
                <h1>Folowers: {ChanelFolowers}</h1>
                <button>Follow</button>
            </div>
            <br />
            {VideoList.map((Video, index) => (
                <div key={index}>
                    <VideoTamplate
                        VideoToken={Video.VideoToken}
                        VideoName={Video.VideoName}
                    />
                </div>
            ))}
        </div>
    )
}


//Move all Use Effect TO get Initial props
GenericChanelPage.getInitialProps = async (ctx) =>{
    const {query} = ctx;
    return {PublicChanelToken: query.ChanelToken}
}

export default GenericChanelPage;