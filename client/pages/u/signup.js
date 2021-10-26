
import styles from "../../styles/Account/Signup.module.css"
import Link from "next/Link"
import { useEffect, useState } from "react"
import axios from "axios"
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'


export default function Login() {
    const router = useRouter()


    const RegisterSubmit = e => {
        e.preventDefault();

        if (e.target.Password.value !== e.target.RepeatePassword.value) {
            window.alert("passwords do not match");
            return;
        }

        axios.post(`${process.env.LOCAL_BACKEND_URL}/user-account-manager/register-user-account`,
            {
                UserName: e.target.UserName.value,
                UserEmail: e.target.Email.value,
                Password: e.target.Password.value
            }).then((res) => {
                if (res.data.error) {
                    return window.alert(`an error has ocured: ${res.data.errors[0].errorMsg}`);
                }

                if (res.data.UserNameExistsorEmailExists) {
                    return window.alert("account with this email or username already exists");
                }

                const inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);

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
            <form onSubmit={RegisterSubmit}>
                <div className={styles.SignupCard}>
                    <h1 className={styles.SignUpText}>Create an account</h1>
                    <hr color="#676767" className={styles.Bar} />
                    <div className={styles.SignupContentBody}>

                        <div className={styles.UserNamePart}>
                            <h1 className={styles.UserNameText}>UserName:</h1>
                            <input className={styles.UserNameInput}
                                type="text"
                                placeholder="User Name..."
                                maxLength="10"
                                name="UserName"
                                required
                            />
                        </div>

                        <div className={styles.EmailPart}>
                            <h1 className={styles.EmailText}>E-Mail:</h1>
                            <input className={styles.EmailInput}
                                type="email"
                                placeholder="exampl@example.com"
                                name="Email"
                                required
                            />
                        </div>

                        <div className={styles.PasswordPart}>
                            <h1 className={styles.PasswordText}>Password:</h1>
                            <input className={styles.PasswordTextInput}
                                type="password"
                                placeholder="User Name..."
                                name="Password"
                                minLength="5"
                                required
                            />
                        </div>

                        <div className={styles.RepeatPasswordPart}>
                            <h1 className={styles.ReapeatPasswordText}>RepeatPassword:</h1>
                            <input className={styles.PasswordTextInput}
                                type="password"
                                placeholder="Reapeat Password..."
                                name="RepeatePassword"
                                minLength="5"
                                required
                            />
                        </div>
                    </div>
                    <hr color="#676767" className={styles.BottomBar} />
                    <div className={styles.FooterCardContainer}>
                        <input className={styles.SignUpButton} type="submit" value="Sign Up" />

                        <Link href="/u/login" >
                            <a className={styles.ToLoginLink}>Already Have an account</a>
                        </Link>

                    </div>
                </div>
            </form>
        </div>
    )
}