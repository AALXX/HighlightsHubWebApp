import axios from "axios"
import styles from"./style/OwnVideoTaplate.module.css"
import { useRouter } from 'next/router'
import {useState} from "react"

import ChanegTitleDescriptionPopUp from "./assets/ChangeTitleDescriptionPopup.js"
import { APIBACKEND } from "../../EnviormentalVariables"

const OwnerVideoTamplate = (props) => {
  const router = useRouter();
  const [ToggledPopUp, setToggledPopUp] = useState(false)


  const DeleteVideoRequest = (VideoToken) =>{

    axios.post(`${APIBACKEND}/chanel-manager/delete-video/`, {VideoToken}).then((res)=>{
      console.log(res.data);
    });
    
  }
  

  return (
    
    <div className={styles.VideoBody}>
        <button onClick={() =>{router.push(`/watch/${props.VideoToken}`)}}> {props.VideoName} </button>
        <button onClick={() =>{setToggledPopUp(!ToggledPopUp)}}>Change Title/Descritption</button>
        <button onClick={() =>{DeleteVideoRequest(props.VideoToken)}}>Delete Video</button>

        {ToggledPopUp? (
                <ChanegTitleDescriptionPopUp closePopup={() =>{setToggledPopUp(!ToggledPopUp)}} 
                  VideoToken={props.VideoToken} 
                  VideoName={props.VideoName}
                  // VideoDescription={props.VideoDescription}
                />
            ) : null}
    </div>
  );
}

export default OwnerVideoTamplate;