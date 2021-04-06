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
            mailuid: mailuid,
            Password: Password
        };

        if (data.mailuid != null && data.Password != null) {

            axios.post(`${APIBACKEND}/login-user`, data)
                .then((res) => {

                    if (res.data[0].WrongCredentials === true) {
                        return window.alert("Wrong credentials")
                    }
                    Cookie.set("UserToken", res.data[0].UserToken,{
                        expires: 360*86400,
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
            axios.post(
                `${APIBACKEND}/register`,
                data
            )
                .then((res) => (cookieCutter.set('UserToken', res.data)))
                .catch((err) => console.log(err));
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