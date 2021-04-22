import axios from "axios";
import { useState } from "react";
import styles from "./PopUp.module.css";

const ChanegTitleDescriptionPopUp = (props) => {

    const [VideoName, setVideoName] = useState("");
    const [VideoDescription, setVideoDescription] = useState("");

    return (
        <div className={styles.popup}>
            <div className={styles.popup_inner}>


            <button onClick={props.closePopup}>X</button>
            </div>
        </div>
    )
}

export default ChanegTitleDescriptionPopUp