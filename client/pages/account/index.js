import Head from 'next/head'
import axios from "axios";
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'

import styles from "../../styles/Account.module.css"

import { APIBACKEND } from "../../EnviormentalVariables"

const AccountPage = () => {

  const [userName, setuserName] = useState("");
  const router = useRouter();

  useEffect(() => {

    if (localStorage.getItem("UserToken") === null) {
      router.push('/account/login')
    }

    const url = `${APIBACKEND}/get-user/${localStorage.getItem("UserToken")}`;

    axios.get(url).then((res) => {
      if (res.data[0] != null) {
        if (!res.data[0].IsLoggedIn) {
          router.push('/account/login')
        }
        setuserName(res.data[0].AcountName)
      }
    });

  }, []);

  const Delete = () => {
    localStorage.clear();
  };

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
        <h4 className={styles.WlcomeText}>Hello, {userName} </h4>
      </div>

    </div>
  )
}

export default AccountPage;