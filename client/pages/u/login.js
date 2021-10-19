
import styles from "../../styles/Account/Login.module.css"
import Link from "next/Link"
import {useEffect, useState} from "react"
import axios from "axios";
import Cookies from 'js-cookie'

export default function Login(props) {
    
    const [UserEmail, setUserEmail] = useState("");
    const [UserPwd, setUserPwd] = useState("");



    const SubmitLogin = () => {

        
        axios.post(`${process.env.LOCAL_BACKEND_URL}/user-account-manager/login-user-account`, {UserEmail: UserEmail, Password:UserPwd})
        .then((res) =>{
            console.log(res.data)

            if(res.data.error){
                return window.alert("an error has ocured");
            }

            if(!res.data.UserFound){
                return window.alert("User not found");
            }
            
            
            if(!res.data.pwdmathch){
                return window.alert("Incrorrect password");
                
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
                <h1 className={styles.SignUpText}>Log into account</h1>
                <hr color="#676767" className={styles.Bar} />
                <div className={styles.SignupContentBody}>
                    <div className={styles.EmailPart}>
                        <h1 className={styles.EmailText}>E-Mail:</h1>
                        <input className={styles.EmailInput}
                            type="email"
                            placeholder="E-Mail..."
                            onChange={(e) => {
                                setUserEmail(e.target.value)
                            }}
                            value={UserEmail}
                        />
                    </div>

                    <div className={styles.PasswordPart}>
                        <h1 className={styles.PasswordText}>Password:</h1>
                        <input className={styles.PasswordTextInput}
                            type="password"
                            placeholder="User Name..."
                            onChange={(e) => {
                                setUserPwd(e.target.value)
                            }}
                            value={UserPwd}
                            maxLength="10"
                        />
                    </div>
                </div>
                <hr color="#676767" className={styles.BottomBar} />
                <div className={styles.FooterCardContainer}>
                    <button className={styles.LogInButton} onClick={()=>{SubmitLogin()}}>Log In</button>
                    <Link href="/u/signup" >
                        <a className={styles.ToLoginLink}>Don't Have an account</a>
                    </Link>

                </div>
            
            </div>
        </div>
    )
}