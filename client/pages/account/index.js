import Head from 'next/head';
import { useRouter } from 'next/router'
import axios from "axios";
import {useEffect} from "react"
import Cookies from 'cookies';
const cookieCutter = require('cookie-cutter');

import styles from "../../styles/Account.module.css"

import { APIBACKEND } from "../../EnviormentalVariables"

const AccountPage = (props) => {
  const Router = useRouter();

  const Delete = () => {
    cookieCutter.set('UserToken', '', { expires: new Date(0) })
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
      HasTokenCookie = false
      //TODO ADD REDIRECT TO LOGIn
    }

    const UserData = await axios.get(`${APIBACKEND}/get-user/${ServerSideCookies.get("UserToken")}`);

    return {
      HasTokenCookie: HasTokenCookie,
      UserName: UserData.data[0].AcountName
    }
  } else {

    let HasTokenCookie = true;
    if (cookieCutter.get("UserToken") === null || cookieCutter.get("UserToken") === undefined) {
      Router.push("/account/login")
    }

    const UserData = await axios.get(`${APIBACKEND}/get-user/${cookieCutter.get("UserToken")}`);

    return {
      HasTokenCookie: HasTokenCookie,
      UserName: UserData.data[0].AcountName
    }
  }
}

export default AccountPage;