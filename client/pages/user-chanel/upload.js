import axios from "axios";
import * as FormData from 'form-data'

import { useState } from "react"
import { APIBACKEND } from "../../EnviormentalVariables"

const UploadPage = () => {

    const [VideoFile, setVideoFileFile] = useState('');
    const [VideoPreviewUrl, setVideoPreviewUrl] = useState('')

    const fileChangedHandler = e => {
        setVideoFileFile(e.target.files[0])
        
        let reader = new FileReader();
        reader.onloadend = () => {
            setVideoPreviewUrl(reader.result)
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const PublishVideo = e => {
        e.preventDefault();

        const fd = new FormData();
        fd.append('file', VideoFile);
        fd.append("ChanelToken", localStorage.getItem("ChanelToken"));

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

        axios.post(`${APIBACKEND}/upload`, fd, config);
    }


    return (
        <div>
            <h1>Inserta video file</h1>
            <input type="file" name="file" onChange={fileChangedHandler} />
            <button onClick={PublishVideo}> MakeItPublic </button>
        </div>
    );
}

export default UploadPage;
