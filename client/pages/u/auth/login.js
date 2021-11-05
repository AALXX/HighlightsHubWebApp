
import styles from "../../../styles/Account/Login.module.css"
import Link from "next/Link"
import { useEffect, useState } from "react"
import axios from "axios";
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

export default function Login(props) {

    const router = useRouter()

    const SubmitLogin = e => {
        e.preventDefault();

        axios.post(`${process.env.LOCAL_BACKEND_URL}/user-account-manager/login-user-account`, { UserEmail: e.target.Email.value, Password: e.target.Password.value })
            .then((res) => {
                if (res.data.error) {
                    return window.alert("an error has ocured");
                }

                if (!res.data.UserFound) {
                    return window.alert("User not found");
                }


                if (!res.data.pwdmathch) {
                    return window.alert("Incrorrect password");
                }

                const inFifteenMinutes = new Date(new Date().getTime() + 99999 * 60 * 999999);

                Cookies.set("UserToken", res.data.UserToken, {
                    expires: inFifteenMinutes
                });

                Cookies.set("PublicUserToken", res.data.PublicUserToken, {
                    expires: inFifteenMinutes
                });

                router.push('/u')

                return;
            })
    }

    return (
        <div className={styles.container}>
            <form onSubmit={SubmitLogin}>
                <div className={styles.LoginCard}>
                    <h1 className={styles.SignUpText}>Log into account</h1>
                    <hr color="#676767" className={styles.Bar} />
                    <div className={styles.EmailPart}>
                        <h1 className={styles.EmailText}>E-Mail:</h1>
                        <input className={styles.EmailInput}
                            type="email"
                            placeholder="E-Mail..."
                            name="Email"
                        />
                    </div>

                    <div className={styles.PasswordPart}>
                        <h1 className={styles.PasswordText}>Password:</h1>
                        <input className={styles.PasswordTextInput}
                            type="password"
                            placeholder="Password"
                            name="Password"
                            minLength="5"
                        />
                    </div>


                    <Link href="/u/auth/forgotpwd" >
                        <a className={styles.ForgotPassword}>Forgot Password</a>
                    </Link>

                    <hr color="#676767" className={styles.BottomBar} />
                    <div className={styles.FooterCardContainer}>
                        <input className={styles.LogInButton} type="submit" value="Log In" />

                        <Link href="/u/auth/signup" >
                            <a className={styles.ToLoginLink}>Don't Have an account</a>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}