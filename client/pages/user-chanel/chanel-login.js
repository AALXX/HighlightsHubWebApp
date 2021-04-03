import { useRouter } from 'next/router'
import { useEffect, useState } from "react"
import axios from 'axios';

import { APIBACKEND } from "../../EnviormentalVariables"

const ChanelLogin = () => {

    const router = useRouter();
    const [ChanelMail, setChanelMail] = useState("")
    const [ChanelPassword, setChanelPassword] = useState("")

    const LoginIntoChanel = () => {
        const data = {
            ChanelMail: ChanelMail,
            ChanelPassword: ChanelPassword
        };

        axios.post(`${APIBACKEND}/login-chanel`, data).then((res) => {
            if (res.data.ChanelToken !== null && res.data.ChanelToken !== "") {
                localStorage.setItem("ChanelToken", res.data.ChanelToken)
                router.push('/user-chanel')
            }
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