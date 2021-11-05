import style from "../../styles/Account/OwnerAccount.module.css"
import Cookies from 'js-cookie'
import { useEffect, useState } from "react";
import axios from "axios"
import * as cookie from 'cookie'
import Link from "next/Link"

import AccountSettingsPopUp from "../../Components/userAccount/UserSettingsAccountPopup"
import VideoTamplate from "../../Components/userAccount/VideoTamplate"

export default function OwnerAccountPage(props) {

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

          {ToggledsettingsPopUp ? (
            <AccountSettingsPopUp closePopup={() => { setToggledsettingsPopUp(!ToggledsettingsPopUp) }}
              UserName={props.AccountName}
              AccountEmail={props.AccountEmail}
              AccountToken={Cookies.get("UserToken")}
              AccountVisibility={props.AccountVisibility}
              PublicAccountToken={AccountPublicToken}
            />
          ) : null}

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

export async function getServerSideProps(context) {

  if (context.req.headers.cookie === undefined) {
    return {
      props: {
        AccountExist: false,
        AccountName: "",
        AccountVisibility: null,
        AccountEmail: null,
        AccountFolowers: 0,
        ChanelDescription: "",
        UserToken: null
      }
    }
  }

  const parsedCookies = cookie.parse(context.req.headers.cookie);


  const AccountData = await axios.get(`${process.env.LOCAL_BACKEND_URL}/user-account-manager/get-owner-user-account-data/${parsedCookies.UserToken}`);
  const AccountVideos = await axios.get(`${process.env.LOCAL_BACKEND_URL}/user-account-manager/get-owner-user-account-videos/${parsedCookies.PublicUserToken}`);

  if (AccountData.data.AccountExist === false) {
    return {
      props: {
        AccountExist: AccountData.data.AccountExist,
        AccountVisibility: null,
        AccountName: "",
        AccountEmail: null,
        AccountFolowers: 0,
        ChanelDescription: "",
        UserToken: null,
        VideoList: null,
      }
    }
  }

  return {
    props: {
      AccountExist: AccountData.data.AccountExist,
      AccountName: AccountData.data.AccountName,
      AccountEmail: AccountData.data.AccountEmail,
      AccountVisibility: AccountData.data.AccountVisibility,
      AccountFolowers: AccountData.data.AccountFolowers,
      ChanelDescription: AccountData.data.ChanelDescription,
      UserToken: parsedCookies.UserToken,
      VideoList: AccountVideos.data.Videos,
    },
  }
}