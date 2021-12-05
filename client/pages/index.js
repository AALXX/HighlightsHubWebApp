import styles from '../styles/Home.module.css'
import { useEffect } from "react"
import VideoPlayer from "../Components/HighlightsVideoPlayer/VideoPlayer"
import * as cookie from 'cookie'

export default function Home(props) {

  return (
    <div className={styles.PageContainer}>
      <VideoPlayer VideoToken={"kwmqcijbxfrbbtm7jmg"} UserPublicToken={props.UserPublicToken} />
    </div>
  )
}

export async function getServerSideProps(context) {

  if (context.req.headers.cookie === undefined) {
    return {
      props: {
        UserPublicToken: null
      }
    }
  }

  const parsedCookies = cookie.parse(context.req.headers.cookie);

  return {
    props: {
      UserPublicToken: parsedCookies.PublicUserToken,
    },
  }
}