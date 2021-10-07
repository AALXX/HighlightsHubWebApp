import style from "../../styles/Account/OwnerAccount.module.css"
import Cookies from 'js-cookie'
import { useEffect, useState } from "react";
import axios from "axios"
import * as cookie from 'cookie'
import Link from "next/Link"

import CustomizeAccountPopUp from "../../Components/userAccount/CustomizeUserAccountPopup"

export default function OwnerAccountPage(props) {

  const [AccountPublicToken, setAccountPublicToken] = useState("");
  const [AccountEMail, setAccountEMail] = useState("");
  const [ToggledCustomizePopUp, setToggledCustomizePopUp] = useState(false);


  useEffect(() => {
    setAccountPublicToken(Cookies.get("PublicUserToken"))
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

            </div>
            <div className={style.ChanelInfos}>
              <div className={style.AboutChanelPart}>
                <h2 className={style.AboutChanelText}>About Chanel</h2>
                <hr color="#676767" className={style.AboutChanelLine} />
                <br />
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

        <div>
          <h1>Account Not Found</h1>
          <Link href="/u/signup" >
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
        AccountEmail: null,
        AccountFolowers: 0,
        ChanelDescription: "",
        UserToken: null
      }
    }
  }

  const parsedCookies = cookie.parse(context.req.headers.cookie);


  const AccountData = await axios.get(`${process.env.LOCAL_BACKEND_URL}/user-account-manager/get-owner-user-account-data/${parsedCookies.UserToken}`);


  if (AccountData.data.AccountExist === false) {
    return {
      props: {
        AccountExist: AccountData.data.AccountExist,
        AccountName: "",
        AccountEmail: null,
        AccountFolowers: 0,
        ChanelDescription: "",
        UserToken: null
      }
    }
  }

  return {
    props: {
      AccountExist: AccountData.data.AccountExist,
      AccountName: AccountData.data.AccountName,
      AccountEmail: AccountData.data.AccountEmail,
      AccountFolowers: AccountData.data.AccountFolowers,
      ChanelDescription: AccountData.data.ChanelDescription,
      UserToken: parsedCookies.UserToken
    },
  }
}