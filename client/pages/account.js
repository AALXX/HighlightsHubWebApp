import Head from 'next/head'
import axios from "axios";
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'

import { APIBACKEND } from "../EnviormentalVariables"

const AccountPage = () => {

  const router = useRouter();

  useEffect(() => {

    if (localStorage.getItem("UserToken") === null) {
      router.push('/login')
    }

    const url = `${APIBACKEND}/login/${localStorage.getItem("UserToken")}`;

    axios.get(url).then((res) => {
      if (res.data[0] != null) {
        if(!res.data[0].IsLoggedIn){
          router.push('/login')
        }
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
    <button onClick={Delete}>Clear</button>
  </div>
)
}

export default AccountPage;