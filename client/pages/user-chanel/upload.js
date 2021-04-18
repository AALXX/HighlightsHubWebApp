import axios from "axios";
import * as FormData from 'form-data'

import { useState } from "react"
import { APIBACKEND } from "../../EnviormentalVariables"
import Cookie from "js-cookie";
import { useRouter } from 'next/router'

const UploadPage = () => {
    const Router = useRouter();

    const [VideoFile, setVideoFileFile] = useState('');
    const [VideoPreviewUrl, setVideoPreviewUrl] = useState('')
    const [VideoTitle, setVideoTitle] = useState("");
    
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
        fd.append("ChanelToken", Cookie.get("ChanelToken"));
        fd.append("VideoTitle", VideoTitle);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

        axios.post(`${APIBACKEND}/chanel-manager/upload-video`, fd, config).then(res =>{
            if(res.data.error){
                window.alert(res.data.message)
            }else{
                window.alert("Posted Succesfully")
                Router.push("/")
            }
        });
    }


    return (
        <div>
            <h1>Inserta video file</h1>
            <input type="file" name="file" onChange={fileChangedHandler} />
            <br />
            <input type="text" name="mail" placeholder="video title..." onChange={(e) => {setVideoTitle(e.target.value)}} required/>
            <button onClick={PublishVideo}> Publish </button>
        </div>
    );
}

export default UploadPage;
