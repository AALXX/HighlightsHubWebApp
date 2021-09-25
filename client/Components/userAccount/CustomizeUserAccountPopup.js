import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import Router from "next/router";
import styles from "./styles/CustomizeAccoutStyle.module.css"

export default function CustomizeAccountPopUp(props) {

    const [AccountName, setAccountName] = useState("");

    useEffect(() => {
        setAccountName(props.AccountName);

    }, []);

    const ChangeUserName = () => {
        axios.post(`${process.env.LOCAL_BACKEND_URL}/user-account-manager/change-user-account-name/`, { AccountToken: props.AccountToken, newAccountName: AccountName }).then((res)=>{
            if(res.data.error){
                window.alert("error");
            }
            Router.reload(window.location.pathname);
        })
    }

    return (
        <div className={styles.popup}>
            <div className={styles.popup_inner}>
                <button className={styles.XButton} onClick={props.closePopup}>&#9587;</button>
                <div className={styles.AccountNameDiv}>
                    <h2 className={styles.AccountnaNameText}>UserName:</h2>
                    <input
                        type="text"
                        name="AccountName"
                        placeholder="Name..."
                        onChange={(e) => {
                            setAccountName(e.target.value)
                        }}
                        value={AccountName}
                        maxLength="10"
                        className={styles.AccountnaNameInput}
                    />

                </div>
                <button className={styles.ChangeNameButton} onClick={() => { ChangeUserName(); }}>Change!</button>

                <hr color="#676767" className={styles.BasicPanelHorizontalLine} />

                <div className={styles.MakeProfilePublicChecked}>
                    <h2 className={styles.ShowProfileText}>Make Profile Public: </h2>
                    <input className={styles.ShowProfileCheckBox} type="checkbox" name="ShowProfileCheckBox" />
                </div>
                <hr color="#676767" className={styles.BasicPanelHorizontalLine} />
                <div>
                    <h2>Change Account Picture:</h2>
                    <input type="file" />

                </div>
            </div>
        </div>
    )

}