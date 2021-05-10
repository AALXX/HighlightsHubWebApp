import axios from "axios";
import { useEffect } from "react";
import VideoTamplate from "../../Components/VideoTemplate/VideoTamplate";
import styles from "../../styles/GenericChanel.module.css"


import { APIBACKEND } from "../../EnviormentalVariables"

const GenericChanelPage = (props) => {

    useEffect(() => {

        if (props.ChanelExists === false) {
            window.alert("this chanel doesen't exists")
        }

    }, [])

    return (
        <div className={styles.GeneralCreatorChanelContentPage}>

            {props.ChanelExists ? (
                <div>
                    <div className={styles.GenericCreatorChanelTop}>
                        <img className={styles.ChanelAvatarImage} src={`${APIBACKEND}/chanel-manager/get-creator-chanel-avatar/${props.ChanelId}`} alt="" width="150" height="150" />
                        <h1>{props.ChanelName}</h1>
                        <h1>Folowers: {props.ChanelFolowers}</h1>
                        <button>Follow</button>
                    </div>
                    <br />
                    {props.VideoList.map((Video, index) => (
                        <div key={index}>
                            <VideoTamplate
                                VideoToken={Video.VideoToken}
                                VideoName={Video.VideoName}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div><h1>Chanel doesen't exist</h1></div>
            )}
        </div>
    )
}

//* Get creator chanel by public tocken
const GetCreatorChanelData = async (ChanelPubicToken) => {

    //*Get creator chanel data
    const CreatorChanelData = await axios.post(`${APIBACKEND}/chanel-manager/get-creator-chanel-data/`, { ChanelPubicToken });

    if (CreatorChanelData.data.ChanelExists === false) {
        return { ChanelExists: false }
    }
    
    //*Get Chanel videos
    const data = {
        ChanelId: CreatorChanelData.data.ChanelData.ChanelId
    }
    const ChanelVideos = await axios.post(`${APIBACKEND}/chanel-manager/get-chanel-videos/`, data);

    let VideoList = [];
    for (let index = 0; index < ChanelVideos.data.Videos.length; index++) {
        VideoList.push(ChanelVideos.data.Videos[index])
    }

    return {
        ChanelName: CreatorChanelData.data.ChanelData.ChanelName,
        ChanelFolowers: CreatorChanelData.data.ChanelData.ChanelFolowers,
        VideoList: VideoList,
        ChanelExists: true,
        ChanelId:CreatorChanelData.data.ChanelData.ChanelId
    }
}

GenericChanelPage.getInitialProps = async ({ req, res, query }) => {

    //*Determinate if is clientside/render-side rendering
    if (req) {
        const CreatroChanelData = await GetCreatorChanelData(query.ChanelToken);

        return {
            ChanelName: CreatroChanelData.ChanelName,
            ChanelFolowers: CreatroChanelData.ChanelFolowers,
            VideoList: CreatroChanelData.VideoList,
            ChanelExists: CreatroChanelData.ChanelExists,
            ChanelId:CreatroChanelData.ChanelId
        }
    } else {

        const CreatroChanelData = await GetCreatorChanelData(query.ChanelToken);

        return {
            ChanelName: CreatroChanelData.ChanelName,
            ChanelFolowers: CreatroChanelData.ChanelFolowers,
            VideoList: CreatroChanelData.VideoList,
            ChanelExists: CreatroChanelData.ChanelExists,
            ChanelId:CreatroChanelData.ChanelId
        }
    }

}

export default GenericChanelPage;