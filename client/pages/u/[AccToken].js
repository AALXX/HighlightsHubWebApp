import style from "../../styles/Account/NonOwnerAccount.module.css"
import Cookies from 'js-cookie'
import { useEffect, useState } from "react";
import axios from "axios"
import * as cookie from 'cookie'
import { useRouter } from 'next/router'

import VideoTamplate from "../../Components/userAccount/VideoTamplate"

export default function ExternAccountPage(props) {
  const router = useRouter()

  const [AccountPublicToken, setAccountPublicToken] = useState("");
  const [Folows, setFolows] = useState(false);
  const [Folowers, setFolowers] = useState(0);

  useEffect(() => {
    setAccountPublicToken(Cookies.get("PublicUserToken"));
    setFolows(props.UserFolowStatus)
    setFolowers(Number(props.AccountFolowers))
    if (props.onwerAccount) {
      router.push("/u");
    }
  }, [])

  const FollowChanel = () => {
    axios.post(`${process.env.LOCAL_BACKEND_URL}/user-account-manager/user-folow-acc/`, { UserPublicToken: Cookies.get("PublicUserToken"), ChanelToken: props.AccountToken }).then((res) => {
      setFolows(res.data.itfolows)

      if (res.data.itfolows) {
        return setFolowers(Folowers + 1);
      } else {
        return setFolowers(Folowers - 1);
      }
    })
  }

  return (
    <>
      {props.AccountExist ? (
        <div className={style.PageContainer}>
          <div className={style.ChanelUpperBar}>
            <img src={`${process.env.LOCAL_BACKEND_URL}/user-account-manager/get-user-account-image/${AccountPublicToken}`} className={style.AccountProfileImage} />
            <div className={style.ChanelStats}>
              <h2 className={style.AccountNameText}>{props.AccountName}</h2>
              <hr color="#676767" className={style.ChanelStatsBar} />
              <h2 className={style.AccountFolowersText}>Folowers: {Folowers}</h2>
            </div>
            {Folows ? (
              <button onClick={() => { FollowChanel(); }} className={style.UnFollowButton}>UnFollow</button>
            ) : (
              <button onClick={() => { FollowChanel(); }} className={style.FollowButton}>Follow</button>
            )}
          </div>

          <div className={style.Content}>
            <div className={style.Videos}>
              <div className={style.VideosGrid}>
                {props.VideoList.map((Chanel, index) => (
                  <div key={index}>
                    <VideoTamplate
                      VideoTitle={Chanel.VideoTitle}
                      VideoFires={Chanel.Fires}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={style.ChanelInfos}>
              <div className={style.AboutChanelPart}>
                <h2 className={style.AboutChanelText}>About Chanel</h2>
                <hr color="#676767" className={style.AboutChanelLine} />
                <textarea className={style.AboutChanelPargraphText} value={props.ChanelDescription} readOnly />

              </div>

              <div className={style.MostHighlithedGamesPart}>
                <h2 className={style.MostHighlithedGamesText}>Highlithed Games</h2>
                <hr color="#676767" className={style.AboutChanelLine} />
                <h2 className={style.MostHighlithedGamesText}>NULL</h2>
              </div>
            </div>
          </div>
        </div>
      ) : (

        <div className={style.AccountNotFoundcontainer}>
          <h1 className={style.AccountNotFoundtext}>Account Not Found</h1>
        </div>
      )}

    </>
  )
}


export async function getServerSideProps(context) {

  let IsUserFolowingChanel = { data: { error: false, itfolows: false } };
  //* Checks if the user is the owner of this chanel
  if (context.req.headers.cookie !== undefined) {
    const parsedCookies = cookie.parse(context.req.headers.cookie);
    if (parsedCookies.PublicUserToken === context.query.AccToken) {
      return {
        props: {
          onwerAccount: true,
        }
      }
    }
    IsUserFolowingChanel = await axios.get(`${process.env.LOCAL_BACKEND_URL}/user-account-manager/user-folow-acc-check/${context.query.AccToken}/${parsedCookies.PublicUserToken}`);
  }

  const AccountData = await axios.get(`${process.env.LOCAL_BACKEND_URL}/user-account-manager/get-other-user-account-data/${context.query.AccToken}`);
  const AccountVideos = await axios.get(`${process.env.LOCAL_BACKEND_URL}/user-account-manager/get-other-user-account-videos/${context.query.AccToken}`);


  if (AccountData.data.AccountExist === false) {
    return {
      props: {
        AccountExist: AccountData.data.AccountExist,
        onwerAccount: false,
        AccountToken: context.query.AccToken,
        AccountVisibility: null,
        AccountName: "",
        AccountFolowers: 0,
        ChanelDescription: "",
        VideoList: null,
      }
    }
  }

  return {
    props: {
      AccountExist: AccountData.data.AccountExist,
      onwerAccount: false,
      AccountName: AccountData.data.AccountName,
      AccountToken: context.query.AccToken,
      AccountVisibility: AccountData.data.AccountVisibility,
      AccountFolowers: AccountData.data.AccountFolowers,
      ChanelDescription: AccountData.data.ChanelDescription,
      VideoList: AccountVideos.data.Videos,
      UserFolowStatus: IsUserFolowingChanel.data.itfolows
    },
  }
}