import "./style/VideoTamplate.module.css"
import { useRouter } from 'next/router'


const VideoTamplate = (props) => {
  const router = useRouter();
  

  return (
    
    <div className="VideoBody">
        <button onClick={() =>{router.push(`/watch/${props.VideoToken}`)}} >{props.VideoName}</button>
    </div>
  );
}

export default VideoTamplate;
