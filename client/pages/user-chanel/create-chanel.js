import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from "axios";

import { APIBACKEND } from "../../EnviormentalVariables";


const CreateChanel = () => {
    const router = useRouter();
    const [ChanelName, setChanelName] = useState("");
    const [ChanelMail, setChanelMail] = useState("");
    const [ChanelPassword, setChanelPassword] = useState("");
    const [ReapeatedChanelPassword, setRepeatedChanelPassword] = useState("");

    const CreateAccount  = (e) =>{
        e.preventDefault();

        const ChanelData = {
            ChanelName: ChanelName,
            ChanelEmail: ChanelMail,
            ChanelPassword: ChanelPassword,
        };

        if (ChanelData.ChanelPassword !== ReapeatedChanelPassword){
            return window.alert("Password Don't Match")
        }

        axios.post(
            `${APIBACKEND}/chanel-manager/chanel-create/`,
            ChanelData
        ).then((res) => {
            // Cookie.set('UserToken', res.data.UserToken)
        }).catch((err) => console.log(err));
    }

    return (
        <div>
            <input type="password" name="Pwd" placeholder="Chanel Name..." onChange={(e) => { setChanelName(e.target.value) }} required />
            <input type="text" placeholder="E-mail..."  onChange={(e) => { setChanelMail(e.target.value) }} required />
            <input type="password" name="Pwd" placeholder="Password..." onChange={(e) => { setChanelPassword(e.target.value) }} required />
            <input type="password" name="Pwd" placeholder="Reapeate Password..." onChange={(e) => { setRepeatedChanelPassword(e.target.value) }} required />
            <button type="submit" name="login-submit" onClick={CreateAccount}> Login</button>
            <br />
            <button onClick={()=>router.push("/user-chanel/chanel-login")}>AleadyHave a chanel</button>
        </div>
    )
}

export default CreateChanel;