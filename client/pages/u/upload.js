import style from "../../styles/Account/OwnerAccount.module.css"
import Cookies from 'js-cookie'
import { useEffect, useState } from "react";
import axios from "axios"
import * as cookie from 'cookie'
import Link from "next/Link"

export default function UploadPage(props) {

    const [videoFile, setvideoFile] = useState([]);
    const [Ready, setReady] = useState(false);


    const UploadFile = () => {
        let formData = new FormData();
        formData.append("file", videoFile[0]);
        formData.append("VideoTitle", "ZED");
        formData.append("UserPublicToken", Cookies.get("PublicUserToken"));

        const config = {
            header: {'content-type': 'multipart/formdata'}
        }
        axios.post(`http://localhost:7000/api/videos-manager/upload-video`, formData, config).then((res) =>{
            console.log(res);
        })
    }
  

    return (
        <>
            {props.AccountExist ? (
                <div className={style.PageContainer}>
                    <input type="file" name="myFile" onChange={(e) => { setvideoFile(e.target.files) }} />
                    <button onClick={() => { UploadFile() }}>Upload</button>
                </div>
            ) : (
                <div>
                    <h1>Account Not Found</h1>
                    <Link href="/u/signup" >
                        <a className={style.ToLoginLink}>Create an account</a>
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
                UserToken: null
            }
        }
    }

    return {
        props: {
            AccountExist: AccountData.data.AccountExist,
            UserToken: parsedCookies.UserToken
        },
    }
}