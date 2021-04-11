import Head from 'next/head';
import { useRouter } from 'next/router'
import axios from "axios";
import {useEffect} from "react"
import Cookies from 'cookies';
import Cookie from "js-cookie";


import styles from "../../styles/Account.module.css"

import { APIBACKEND } from "../../EnviormentalVariables"

const AccountPage = (props) => {
  const Router = useRouter();

  const Delete = () => {
    Cookie.remove('UserToken')
  };

  useEffect(() => {
    if (props.HasTokenCookie === false) {
      Router.push("/account/login")
  }

  }, [])

  return (
    <div>
      <Head>
        <title>GameHighlights</title>
      </Head>

      <form>
        <button onClick={Delete}>Log out</button>
      </form>
      <div className={styles.UserAcountLogo}>
        <div className={styles.UserAcountLogoDot}></div>
        <h4 className={styles.WlcomeText}>Hello, {props.UserName} </h4>
      </div>

    </div>
  )
}

AccountPage.getInitialProps = async ({ req, res }) => {
  if (req) {

    let HasTokenCookie = true;

    //* Create a cookies instance
    const ServerSideCookies = new Cookies(req, res)
    if (ServerSideCookies.get("UserToken") === null || ServerSideCookies.get("UserToken") === undefined) {
      //TODO ADD REDIRECT TO LOGIn
      
      return{
        HasTokenCookie: false
      }
    }

    const UserData = await axios.get(`${APIBACKEND}/user-account-manager/get-user-account-data/${ServerSideCookies.get("UserToken")}`);

    return {
      HasTokenCookie: HasTokenCookie,
      UserName: UserData.data.AcountName
    }
  } else {

    let HasTokenCookie = true;
    if (Cookie.get("UserToken") === null || Cookie.get("UserToken") === undefined) {
      return{
        HasTokenCookie: false
      }
    }

    const UserData = await axios.get(`${APIBACKEND}/user-account-manager/get-user-account-data/${Cookie.get("UserToken")}`);

    return {
      HasTokenCookie: HasTokenCookie,
      UserName: UserData.data.AcountName
    }
  }
}

export default AccountPage;