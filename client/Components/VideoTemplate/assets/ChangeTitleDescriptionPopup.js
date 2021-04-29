import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./PopUp.module.css";
import { APIBACKEND } from "../../../EnviormentalVariables"

const ChanegTitleDescriptionPopUp = (props) => {

    const [VideoName, setVideoName] = useState(""); 
    const [VideoToken, setVideoToken] = useState(""); 
    const [VideoDescription, setVideoDescription] = useState("");

    useEffect(() => {
        setVideoName(props.VideoName);
        setVideoDescription(props.VideoDescription);
        setVideoToken(props.VideoToken);
        
        return;
    }, [])

    const SendChanges = () =>{
        axios.post(`${APIBACKEND}/chanel-manager/change-video-title-or-description/`, {VideoName, VideoToken}).then((res) =>{
            if(!res.data.succeded){
                window.alert("Problem, Can't Change Name");
            }
            window.location.reload();
        });
    }
    
    return (
        <div className={styles.popup}>
            <div className={styles.popup_inner}>
                <button onClick={props.closePopup}>X</button>
                <input
                    type="text"
                    name="VideoTitle"
                    placeholder={VideoName}
                    onChange={(e) => {
                        setVideoName(e.target.value)
                    }}
                    value={VideoName}
                    maxlength="20"
                    required
                />
                <br />
                <button onClick={SendChanges}>Change!</button>
            </div>
        </div>
    )
}

export default ChanegTitleDescriptionPopUp