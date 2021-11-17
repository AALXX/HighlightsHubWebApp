import axios from "axios";
import { useState, useEffect } from "react";
import Router from "next/router";
import styles from "./styles/AccoutSettingsStyle.module.css";
import Cookies from 'js-cookie'
import emailjs from 'emailjs-com';
import jwt from 'jsonwebtoken';


export default function AccoutSettingsStyle(props) {

    const [UserName, setUserName] = useState("");
    const [Email, setEmail] = useState("");
    const [AccountVisibility, setAccountVisibility] = useState("public");
    const [AccountDescription, setAccountDescription] = useState("public");

    const [Sure, setSure] = useState(false);


    useEffect(() => {
        setUserName(props.UserName);
        setEmail(props.AccountEmail);
        setAccountVisibility(props.AccountVisibility);
        setAccountDescription(props.ChanelDescription);
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
        if (!Sure) {
            return window.alert("CheckBox Not Checked");
        }

        axios.post(`${process.env.LOCAL_BACKEND_URL}/user-account-manager/delete-user-account/`, { AccountToken: props.AccountToken, PublicAccountToken: props.PublicAccountToken }).then((res) => {
            if (res.data.error) {
                window.alert("error");
            }
            Router.reload(window.location.pathname);
        })
    }

    const UpdateChanelDescription = () =>{
        axios.post(`${process.env.LOCAL_BACKEND_URL}/user-account-manager/change-user-account-description/`, { AccountToken: props.AccountToken, ChanelDescription: AccountDescription }).then((res) => {
            if (res.data.error) {
                window.alert("error");
            }
            Router.reload(window.location.pathname);
        })
    }

    const ChangePassword = () => {
        const Secret = process.env.SECRET_TOKEN + Email

        const payload = { AccountEmail: Email };
        const token = jwt.sign(payload, Secret, { expiresIn: '15min' });
        const link = `http://localhost:3000/u/auth/reset-password/${token}/?email=${Email}`;

        emailjs.send(`${process.env.service_id}`, `${process.env.tamplate_id}`, { UserEmail: Email, Link: link }, `${process.env.user_id}`)
            .then(function (response) {
                window.alert("link send");
            }, function (error) {
                window.alert('FAILED...', error);
            });
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
                    <button className={styles.ChangePasswordButton} onClick={() => { ChangePassword(); }}>Change Password</button>
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
                <div className={styles.ChanelDescription}>
                    <h1 className={styles.VisibilityText}>About Chanel:</h1>
                    <textarea className={styles.AboutChanelTextInput} cols="10" rows="7" placeholder="your message" name="message" minLength="10" maxLength="100"
                        onChange={(e) => {
                            setAccountDescription(e.target.value)
                        }}
                        value={AccountDescription}
                    />
                    <button className={styles.AboutChanelButton} onClick={() => {UpdateChanelDescription()}}>Update</button>
                </div>

                <button className={styles.LogOutButton} onClick={() => { LogOut(); }}>Log Out</button>
                <div className={styles.DeleteAccContainer}>
                    <button className={styles.DeleteAccButton} onClick={() => { DeleteAccount(); }}>Delete Account</button>
                    <h1 className={styles.DeletedeleteAccSureText}>Sure</h1>
                    <input className={styles.DeletedeleteAccSure} type="checkbox" name="Sure" defaultChecked={false} onChange={(e) => { setSure(e.target.checked); }} />
                </div>
            </div>
        </div>
    )

}