
import styles from "../../styles/Account/Signup.module.css"
import Link from "next/Link"
import { useEffect, useState } from "react"
import axios from "axios"
import Cookies from 'js-cookie'


export default function Login() {

    const [UserName, setUserName] = useState("");
    const [UserEmail, setUserEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [RepeatePassword, setRepeatePassword] = useState("");

    const RegisterSubmit = () => {

        if (Password !== RepeatePassword) {
            window.alert("passwords do not match");
            return;
        }
        
        axios.post(`${process.env.LOCAL_BACKEND_URL}/user-account-manager/register-user-account`, {UserName: UserName, UserEmail: UserEmail, Password:Password})
        .then((res) =>{
            console.log(res.data)

            if(res.data.error){
                return window.alert("an error has ocured");
            }

            if(res.data.UserNameExistsorEmailExists){
                return window.alert("account with this email or username already exists");
            }
            
            const inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
            
            Cookies.set("UserToken", res.data.UserToken,  {
                expires: inFifteenMinutes
            });

            Cookies.set("PublicUserToken", res.data.PublicUserToken,  {
                expires: inFifteenMinutes
            });
            
            return;
        })
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.LoginCard}>
                <h1 className={styles.SignUpText}>Create an account</h1>
                <hr color="#676767" className={styles.Bar} />
                <div className={styles.SignupContentBody}>

                    <div className={styles.UserNamePart}>
                        <h1 className={styles.UserNameText}>UserName:</h1>
                        <input className={styles.UserNameInput}
                            type="text"
                            placeholder="User Name..."
                            onChange={(e) => {
                                setUserName(e.target.value)
                            }}
                            value={UserName}
                            maxLength="10"
                            required
                        />
                    </div>

                    <div className={styles.EmailPart}>
                        <h1 className={styles.EmailText}>E-Mail:</h1>
                        <input className={styles.EmailInput}
                            type="email"
                            placeholder="exampl@example.com"
                            onChange={(e) => {
                                setUserEmail(e.target.value)
                            }}
                            value={UserEmail}
                            required
                        />
                    </div>

                    <div className={styles.PasswordPart}>
                        <h1 className={styles.PasswordText}>Password:</h1>
                        <input className={styles.PasswordTextInput}
                            type="password"
                            placeholder="User Name..."
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            value={Password}
                            maxLength="10"
                            required
                        />
                    </div>

                    <div className={styles.RepeatPasswordPart}>
                        <h1 className={styles.ReapeatPasswordText}>Repeat Password:</h1>
                        <input className={styles.PasswordTextInput}
                            type="password"
                            placeholder="Reapeat Password..."
                            onChange={(e) => {
                                setRepeatePassword(e.target.value)
                            }}
                            value={RepeatePassword}
                            maxLength="10"
                            required
                        />
                    </div>
                </div>
                <hr color="#676767" className={styles.BottomBar} />
                <div className={styles.FooterCardContainer}>
                    <button className={styles.SignUpButton} onClick={() =>{RegisterSubmit();}}>Sign Up</button>
                    <Link href="/u/login" >
                        <a className={styles.ToLoginLink}>Already Have an account</a>
                    </Link>

                </div>
            </div>
        </div>
    )
}