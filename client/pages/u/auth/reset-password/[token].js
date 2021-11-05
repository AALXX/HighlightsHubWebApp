import styles from "../../../../styles/Account/ResetPassword.module.css"
import jwt from 'jsonwebtoken';
import { useEffect, useState } from 'react';
import * as cookie from 'cookie'
import Cookies from 'js-cookie'
import axios from "axios"

export default function token(props) {

    const [Linkvalid, setLinkValid] = useState(false);

    useEffect(() => {

        if (!props.error) {
            return setLinkValid(true);
        }
    }, [])

    const SubmitResetPwd = e => {
        e.preventDefault();

        if (e.target.password.value !== e.target.RepeatPassword.value) {
            return window.alert("passwords don't match");
        }

        axios.post(`${process.env.LOCAL_BACKEND_URL}/user-account-manager/change-user-account-password/`, { NewPassword: e.target.password.value, AccountEmail: props.payload.AccountEmail })
            .then((res) => {
                if (res.data.error) {
                    return window.alert(`an error has ocured: ${res.data.msg}`);
                }

                Cookies.remove("UserToken");

                Cookies.remove("PublicUserToken");

                return window.alert("passwordsuccesfully changed");
            })
    }


    return (
        <div className={styles.container}>
            {Linkvalid ? (
                <form onSubmit={SubmitResetPwd}>
                    <div className={styles.ChangePwdCard}>
                        <h1 className={styles.ChangePwdText}>Change account password</h1>
                        <hr color="#676767" className={styles.Bar} />
                        <div className={styles.PasswordPart}>
                            <h1 className={styles.PasswordText}>Password</h1>
                            <input className={styles.PasswordTextInput}
                                type="password"
                                placeholder="Password"
                                name="password"
                            />
                        </div>

                        <div className={styles.PasswordPart}>
                            <h1 className={styles.PasswordText}>Reapeat Password:</h1>
                            <input className={styles.PasswordTextInput}
                                type="password"
                                placeholder="User Name..."
                                name="RepeatPassword"
                                minLength="5"
                            />
                        </div>
                        <hr color="#676767" className={styles.BottomBar} />
                        <div className={styles.FooterCardContainer}>
                            <input className={styles.LogInButton} type="submit" value="Change Password" />
                        </div>
                    </div>
                </form>

            ) : (
                <div><h1 className={styles.InvalidLink}>Invalid Link</h1></div>
            )}

        </div>
    )
}


export async function getServerSideProps(context) {
    try {
        const secret = process.env.SECRET_TOKEN + context.query.email
        
        const payload = jwt.verify(context.query.token, secret)
        console.log(payload)
        return {
            props: {
                error: false,
                payload: payload,
            },
        }
    } catch (error) {

        return {
            props: {
                error: true,
                payload: null,
            },
        }
    }
}