import { useRouter } from 'next/router'
import { useState } from "react"
import axios from 'axios';
import Cookie from "js-cookie";


import { APIBACKEND } from "../../EnviormentalVariables"

const ChanelLogin = () => {

    const router = useRouter();
    const [ChanelMail, setChanelMail] = useState("")
    const [ChanelPassword, setChanelPassword] = useState("")

    const LoginIntoChanel = () => {
        const data = {
            ChanelMail: ChanelMail,
            ChanelPassword: ChanelPassword,
            UserToken: Cookie.get("UserToken")
        };

        axios.post(`${APIBACKEND}/login-chanel`, data).then((res) => {

            if (res.data[0].WrongCredentials === true) {
                return window.alert("Wrong credentials")
            }
            
            Cookie.set("ChanelToken", res.data[0].ChanelToken, {
                expires: 360 * 86400,
                sameSite: "strict",
                path: "/"
            })
            router.push('/user-chanel')
        })
    }

    return (
        <div>
            <input type="text" placeholder="E-mail..." onChange={(e) => { setChanelMail(e.target.value) }} required />
            <input type="password" name="Pwd" placeholder="Password..." onChange={(e) => { setChanelPassword(e.target.value) }} required />
            <button type="submit" name="login-submit" onClick={LoginIntoChanel} >Login</button>
        </div>
    )
}

export default ChanelLogin;