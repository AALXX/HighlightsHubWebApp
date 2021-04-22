import styles from"./style/OwnVideoTaplate.module.css"
import { useRouter } from 'next/router'
import {useState} from "react"
import ChanegTitleDescriptionPopUp from "./assets/ChangeTitleDescriptionPopup.js"

const OwnerVideoTamplate = (props) => {
  const router = useRouter();
  const [ToggledPopUp, setToggledPopUp] = useState(false)



  return (
    
    <div className={styles.VideoBody}>
        <button onClick={() =>{router.push(`/watch/${props.VideoToken}`)}}> {props.VideoName} </button>
        <button onClick={() =>{setToggledPopUp(!ToggledPopUp)}}>Change Title/Descritption</button>
        <button>Delete Video</button>

        {ToggledPopUp? (
                <ChanegTitleDescriptionPopUp closePopup={() =>{setToggledPopUp(!ToggledPopUp)}} />
            ) : null}
    </div>
  );
}

export default OwnerVideoTamplate;