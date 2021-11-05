import style from "../../styles/Account/OwnerAccount.module.css"
import Cookies from 'js-cookie'
import { useEffect, useState } from "react";
import axios from "axios"
import * as cookie from 'cookie'
import Link from "next/Link"

import VideoTamplate from "../../Components/userAccount/VideoTamplate"



export default function ExternAccountPage(props) {

  const [AccountPublicToken, setAccountPublicToken] = useState("");

  const [ToggledsettingsPopUp, setToggledsettingsPopUp] = useState(false);

  useEffect(() => {
    setAccountPublicToken(Cookies.get("PublicUserToken"));
  }, [])

  return (
    <>
      {props.AccountExist ? (
        <div className={style.PageContainer}>
          <div className={style.ChanelUpperBar}>
            <img src={`${process.env.LOCAL_BACKEND_URL}/user-account-manager/get-user-account-image/${AccountPublicToken}`} className={style.AccountProfileImage} />
            <div className={style.ChanelStats}>
              <h2 className={style.AccountNameText}>{props.AccountName}</h2>
              <hr color="#676767" className={style.ChanelStatsBar} />
              <h2 className={style.AccountFolowersText}>Folowers: {props.AccountFolowers}</h2>
            </div>
            <button className={style.AccountSettingsButton} onClick={() => { setToggledsettingsPopUp(!ToggledsettingsPopUp) }}>
              <img className={style.AccountSettingsIcon} src="assets/ChanelIcons/settings.svg" alt="settingsIcon" />
            </button>
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
                <h4 className={style.AboutChanelPargraphText}>{props.ChanelDescription}</h4>
              </div>

              <div className={style.ChanelWallPart}>
                <h2 className={style.AboutChanelText}>Chanel Wall</h2>
                <hr color="#676767" className={style.AboutChanelLine} />
                <br />
                <div className={style.EmptySign}><h1 className={style.EmptyText}>EMPTY</h1></div>
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
          <Link href="/u/auth/login" >
            <a className={style.ToLoginLink}>Already Have an account</a>
          </Link>
        </div>
      )}

    </>
  )
}