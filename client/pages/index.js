import styles from '../styles/Home.module.css'
import {useEffect} from "react"
import VideoPlayer from "../Components/HighlightsVideoPlayer/VideoPlayer"

export default function Home() {
  
  return (
    <div className={styles.PageContainer}>
      <VideoPlayer VideoToken={"kw8rybzkj4ova9uyj1"}/>
    </div>
  )
}
