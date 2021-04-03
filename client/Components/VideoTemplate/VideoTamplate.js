import "./style/VideoTamplate.module.css"


const VideoTamplate = (props) => {
  return (
    
    <div className="VideoBody">
        <button onClick={() =>{/* Add push to watchViedeo/props*/}} >{props.VideoName}</button>
    </div>
  );
}

export default VideoTamplate;
