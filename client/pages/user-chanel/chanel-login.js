import { useRouter } from 'next/router'
import { useState } from "react"
import axios from 'axios';
import Cookie from "js-cookie";


import { APIBACKEND } from "../../EnviormentalVariables"

const ChanelLogin = () => {

    const router = useRouter();
    const [ChanelMail, setChanelMail] = useState("")
    const [ChanelPassword, setChanelPassword] = useState("")
    const [ReapeatedChanelPassword, setRepeatedChanelPassword] = useState("")

    const LoginIntoChanel = () => {
        
        if (ChanelPassword !== ReapeatedChanelPassword){
            return window.alert("ChanelPassword and reapeated aren't the same")
            
        }
        
        const data = {
            ChanelMail: ChanelMail,
            ChanelPassword: ChanelPassword,
            UserToken: Cookie.get("UserToken")
        };
        
        axios.post(`${APIBACKEND}/chanel-manager/chanel-login/`, data).then((res) => {
            
            if (res.data.succeded === false){
                return window.alert(res.data.message)
                
            }
            Cookie.set("ChanelToken", res.data.ChanelToken, {
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
            <input type="password" name="Pwd" placeholder="Reapeate Password..." onChange={(e) => { setRepeatedChanelPassword(e.target.value) }} required />
            <button type="submit" name="login-submit" onClick={LoginIntoChanel} >Login</button>
        </div>
    )
}

export default ChanelLogin;