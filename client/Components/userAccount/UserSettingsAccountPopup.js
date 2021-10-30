import axios from "axios";
import { useState, useEffect } from "react";
import Router from "next/router";
import styles from "./styles/AccoutSettingsStyle.module.css";
import Cookies from 'js-cookie'


export default function AccoutSettingsStyle(props) {

    const [UserName, setUserName] = useState("");
    const [Email, setEmail] = useState("");
    const [AccountVisibility, setAccountVisibility] = useState("public");

    const [Sure, setSure] = useState(false);


    useEffect(() => {
        setUserName(props.UserName);
        setEmail(props.AccountEmail);
        setAccountVisibility(props.AccountVisibility);
    }, []);

    const ChangeUserName = () => {

        if (props.UserName === UserName) {
            return window.alert("no change made")
        }

        axios.post(`${process.env.LOCAL_BACKEND_URL}/user-account-manager/change-user-account-name/`, { AccountToken: props.AccountToken, newAccountName: UserName }).then((res) => {
            if (res.data.error) {
                window.alert("error");
            }
            Router.reload(window.location.pathname);
        })
    }

    const ChangeUserEmail = () => {

        if (props.AccountEmail === Email) {
            return window.alert("no change made")
        }

        axios.post(`${process.env.LOCAL_BACKEND_URL}/user-account-manager/change-user-account-email/`, { AccountToken: props.AccountToken, newEmail: Email }).then((res) => {
            if (res.data.error) {
                window.alert("error");
            }
            Router.reload(window.location.pathname);
        })
    }

    const ChangeVisibility = () => {
        axios.post(`${process.env.LOCAL_BACKEND_URL}/user-account-manager/change-user-account-visibility/`, { AccountToken: props.AccountToken, newVisibility: AccountVisibility }).then((res) => {
            if (res.data.error) {
                window.alert("error");
            }
            Router.reload(window.location.pathname);
        })
    }

    const LogOut = () => {
        Cookies.remove("UserToken");
        Cookies.remove("PublicUserToken");
        Router.reload(window.location.pathname);
    }

    const DeleteAccount = () => {
        if(!Sure){
            return window.alert("CheckBox Not Checked");
        }

        axios.post(`${process.env.LOCAL_BACKEND_URL}/user-account-manager/delete-user-account/`, { AccountToken: props.AccountToken, PublicAccountToken: props.PublicAccountToken}).then((res) => {
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
                        <button className={styles.ChangeUsernameButton} onClick={() => { ChangeUserName(); }}>Change!</button>
                    </div>

                    <h1 className={styles.EmailText}>Email</h1>
                    <div className={styles.CredentialInputContent}>
                        <input className={styles.EmailInput}
                            type="email"
                            placeholder="User Name..."
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            value={Email}
                        />
                        <button className={styles.ChangeUsernameButton} onClick={() => { ChangeUserEmail(); }}>Change!</button>
                    </div>
                    <button className={styles.ChangePasswordButton}>Change Password</button>
                </div>
                <hr color="#656565" className={styles.SecondLine} />
                <div className={styles.VisibilityContainer}>
                    <div className={styles.TopContainer}>
                        <h1 className={styles.VisibilityText}>Profile:</h1>
                        <select name="videoVisibility" className={styles.AccountVisibilitySelect} onChange={(e) => setAccountVisibility(e.target.value)} value={AccountVisibility}>
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                        </select>
                    </div>
                    <button className={styles.ChangeVisibilityButton} onClick={() => { ChangeVisibility(); }}>Change!</button>
                </div>
                <button className={styles.LogOutText} onClick={() => { LogOut(); }}>Log Out</button>
                <div className={styles.DeleteAccContainer}>
                    <button className={styles.DeleteAccText} onClick={() => { DeleteAccount(); }}>Delete Account</button>
                    <h1 className={styles.DeletedeleteAccSureText}>Sure</h1>
                    <input className={styles.DeletedeleteAccSure} type="checkbox" name="Sure" defaultChecked={false}  onChange={(e) => { setSure(e.target.checked); }} />
                </div>
            </div>
        </div>
    )

}