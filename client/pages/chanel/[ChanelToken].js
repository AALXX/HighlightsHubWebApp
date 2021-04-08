import axios from "axios";
import VideoTamplate from "../../Components/VideoTemplate/VideoTamplate";
import styles from "../../styles/GenericChanel.module.css"

import { APIBACKEND } from "../../EnviormentalVariables"

const GenericChanelPage = ({ PublicChanelToken, ChanelName, ChanelFolowers, VideoList }) => {
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

//* Make get requests
GenericChanelPage.getInitialProps = async (ctx) => {
    const { query } = ctx;
    const ChanelData = await axios.get(`${APIBACKEND}/get-creator-chanel-data/${query.ChanelToken}`);
    const ChanelVideos = await axios.get(`${APIBACKEND}/get-creator-chanel-videos/${query.ChanelToken}`);

    let tmpVideoList = [];
    for (let index = 0; index < ChanelVideos.data.length; index++) {
        tmpVideoList.push(ChanelVideos.data[index])
    }
    
    return {
        ChanelName: ChanelData.data[0].ChanelName,
        ChanelFolowers: ChanelData.data[0].ChanelFolowers,
        VideoList:tmpVideoList,
        PublicChanelToken: query.ChanelToken
    }
}

export default GenericChanelPage;