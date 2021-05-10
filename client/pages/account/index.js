import Head from 'next/head';
import { useRouter } from 'next/router'
import axios from "axios";
import { useEffect, useState } from "react"
import Cookies from 'cookies';
import Cookie from "js-cookie";

import EditProfilePopUp from "../../Components/ProfilePageOptions/EditProfilePopUp.js"
import styles from "../../styles/Account.module.css"

import { APIBACKEND } from "../../EnviormentalVariables.js"

const AccountPage = (props) => {
  const Router = useRouter();

  const [ToggledPopUp, setToggledPopUp] = useState(false);


  const Delete = () => {

    let ChanelCookeie = Cookie.get('ChanelToken');
    
    if(ChanelCookeie !==null){
      Cookie.remove('ChanelToken');
    }
    
    Cookie.remove('UserToken');
  };

  useEffect(() => {
    if (props.AccountExists === false) {
      Router.push("/account/login");
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
      <div>

        <button onClick={() => { setToggledPopUp(!ToggledPopUp) }}>Edit Profile</button>
      </div>


      {ToggledPopUp ? (
        <EditProfilePopUp closePopup={() => { setToggledPopUp(!ToggledPopUp) }}
          accountName={props.UserName}
        />
      ) : null}

    </div>
  )
}

AccountPage.getInitialProps = async ({ req, res }) => {
  if (req) {

    let AccountExists = true;

    //* Create a cookies instance
    const ServerSideCookies = new Cookies(req, res)
    if (ServerSideCookies.get("UserToken") === null || ServerSideCookies.get("UserToken") === undefined) {

      return {
        AccountExists: false
      }
    }

    const UserData = await axios.get(`${APIBACKEND}/user-account-manager/get-user-account-data/${ServerSideCookies.get("UserToken")}`);

    if (UserData.data.succeded === false) {
      return {
        AccountExists: false
      }
    }

    return {
      AccountExists: AccountExists,
      UserName: UserData.data.AcountName
    }
  } else {

    let AccountExists = true;
    if (Cookie.get("UserToken") === null || Cookie.get("UserToken") === undefined) {
      return {
        AccountExists: false
      }
    }

    const UserData = await axios.get(`${APIBACKEND}/user-account-manager/get-user-account-data/${Cookie.get("UserToken")}`);
    if (UserData.data.succeded === false) {
      return {
        AccountExists: false
      }
    }
    return {
      AccountExists: AccountExists,
      UserName: UserData.data.AcountName
    }
  }
}

export default AccountPage;