import style from "../../styles/Account/OwnerAccount.module.css"
import Cookies from 'js-cookie'
import { useEffect, useState } from "react";
import axios from "axios"
import * as cookie from 'cookie'

import VideoTamplate from "../../Components/userAccount/VideoTamplate"

export default function ExternAccountPage(props) {

  const [AccountPublicToken, setAccountPublicToken] = useState("");

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
        </div>
      )}

    </>
  )
}


export async function getServerSideProps(context) {


  const AccountData = await axios.get(`${process.env.LOCAL_BACKEND_URL}/user-account-manager/get-other-user-account-data/${context.query.AccToken}`);
  const AccountVideos = await axios.get(`${process.env.LOCAL_BACKEND_URL}/user-account-manager/get-other-user-account-videos/${context.query.AccToken}`);
  console.log(AccountVideos.data)

  if (AccountData.data.AccountExist === false) {
    return {
      props: {
        AccountExist: AccountData.data.AccountExist,
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
      AccountName: AccountData.data.AccountName,
      AccountVisibility: AccountData.data.AccountVisibility,
      AccountFolowers: AccountData.data.AccountFolowers,
      ChanelDescription: AccountData.data.ChanelDescription,
      VideoList: AccountVideos.data.Videos,
    },
  }
}