import Head from 'next/head'
import { useState } from "react"
import axios from 'axios';
import Router from 'next/router'
import Cookie from "js-cookie";


import { APIBACKEND } from "../../EnviormentalVariables"


const LoginForm = () => {
    const [mailuid, setmailuid] = useState("");
    const [Password, setPassword] = useState("");
    const [UserName, setUserName] = useState("");
    const [Mailuid, setMailuid] = useState("");
    const [PassWord, setPassWord] = useState("");
    const [RepeatePassWord, setRepeatePassWord] = useState("");

    const LogInAcount = (e) => {

        e.preventDefault();

        const data = {
            UserMail: mailuid,
            Password: Password
        };

        if (data.UserMail != null && data.Password != null) {

            axios.post(`${APIBACKEND}/user-account-manager/login-user-account`, data)
                .then((res) => {
                    if (res.data.UserFound === false) {
                        window.alert(res.data.message)
                    }

                    if(res.data.pwdmathch === false){
                        window.alert("Wrong Password");
                    }

                    if(res.data.error === true){
                        window.alert("there was a error");
                    }
                    
                    
                    
                    Cookie.set("UserToken", res.data.UserToken, {
                        expires: 360 * 86400,
                        sameSite: "strict",
                        path: "/"
                    })
                    Router.push('/account')

                })
                .catch(err => console.log(err));
        } else {
            console.log("Must complete all form")
        }
    }

    const SignUpAcount = (e) => {
        e.preventDefault();

        const data = {
            Username: UserName,
            Mailuid: Mailuid,
            PassWord: PassWord,
            RepeatePassWord: RepeatePassWord,
        };

        if (data.PassWord != null && data.Mailuid != null && data.PassWord != null && data.RepeatePassWord != null) {

            if (data.PassWord !== data.RepeatePassWord){
                window.alert("Password Don't Match")
            }
            
            axios.post(
                `${APIBACKEND}/user-account-manager/register-user-account`,
                data
            ).then((res) => {
                Cookie.set('UserToken', res.data.UserToken)
                //TODO push url to accoun page
            }).catch((err) => console.log(err));
        } else (
            console.log("U didn't filled all forms")
        )
    };


    return (
        <div>

            <Head>
                <title>GameHighlights</title>
            </Head>

            <div>
                <form onSubmit={LogInAcount}>
                    <input type="text" placeholder="E-mail..." onChange={(e) => { setmailuid(e.target.value) }} required />
                    <input type="password" name="Pwd" placeholder="Password..." onChange={(e) => { setPassword(e.target.value) }} required />
                    <button type="submit" name="login-submit" >Login</button>
                </form>
            </div>
            <form onSubmit={SignUpAcount}>
                <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => {
                        setUserName(e.target.value)
                    }}
                    required
                />
                <input
                    type="text"
                    name="mail"
                    placeholder="E-mail"
                    onChange={(e) => {
                        setMailuid(e.target.value)
                    }}
                    required
                />
                <input
                    type="password"
                    name="pwd"
                    placeholder="Password"
                    onChange={(e) => {
                        setPassWord(e.target.value)
                    }}
                    required
                />
                <input
                    type="password"
                    name="reapeat-pwd"
                    placeholder="Reapeat-Password"
                    onChange={(e) => {
                        setRepeatePassWord(e.target.value)
                    }}
                    required
                />
                <button type="submit" name="signup-submit">
                    SignUp
                </button>
            </form>
        </div>
    );
}

export default LoginForm;