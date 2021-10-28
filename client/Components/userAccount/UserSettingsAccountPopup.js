import axios from "axios";
import { useState, useEffect } from "react";
import Router from "next/router";
import styles from "./styles/AccoutSettingsStyle.module.css";


export default function AccoutSettingsStyle(props) {

    const [UserName, setUserName] = useState("");
    const [Email, setEmail] = useState("");
    const [AccountVisibility, setAccountVisibility] = useState("public");

    useEffect(() => {
        setUserName(props.UserName);
        setEmail(props.AccountEmail);
    }, []);

    const ChangeUserName = () => {
        axios.post(`${process.env.LOCAL_BACKEND_URL}/user-account-manager/change-user-account-name/`, { AccountToken: props.AccountToken, newAccountName: UserName }).then((res) => {
            if (res.data.error) {
                window.alert("error");
            }
            Router.reload(window.location.pathname);
        })
    }

    return (
        <div className={styles.popup}>
            <div className={styles.popup_inner}>
                <button className={styles.XButton} onClick={props.closePopup}>&#9587;</button>
                <h1 className={styles.SettingsText}>SETTINGS</h1>
                <hr color="#656565" className={styles.Line} />
                <div className={styles.CredentialContent}>
                    <h1 className={styles.UsernameText}>Username</h1>
                    <div className={styles.CredentialInputContent}>
                        <input className={styles.UsernameInput}
                            type="text"
                            placeholder="User Name..."
                            onChange={(e) => {
                                setUserName(e.target.value)
                            }}
                            value={UserName}
                            maxLength="10"
                        />
                        <button className={styles.ChangeUsernameButton}>Change!</button>
                    </div>

                    <h1 className={styles.EmailText}>Username</h1>
                    <div className={styles.CredentialInputContent}>
                        <input className={styles.EmailInput}
                            type="text"
                            placeholder="User Name..."
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            value={Email}
                            maxLength="10"
                        />
                        <button className={styles.ChangeUsernameButton}>Change!</button>
                    </div>
                    <button className={styles.ChangePasswordButton}>Change Password</button>
                </div>
                <hr color="#656565" className={styles.SecondLine} />
                <div className={styles.VisibilityContainer}>
                    <h1 className={styles.VisibilityText}>Profile:</h1>
                    <select name="videoVisibility" className={styles.AccountVisibilitySelect} onChange={(e) => setAccountVisibility(e.target.value)}>
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                </div>
                <button className={styles.LogOutText}>Log Out</button>
                <button className={styles.DeleteAccText}>Delete Account</button>
            </div>
        </div>
    )

}