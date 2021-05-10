import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import Cookie from "js-cookie";

import styles  from "./style/EditProfile.module.css"

import { APIBACKEND } from "../../EnviormentalVariables"

const EditProfilePopUp = (props) => {

    const [AccountName, setAccountName] = useState(""); 
    const [UserInputPassword, setUserInputPassword] = useState(""); 

    useEffect(() =>{
        setAccountName(props.accountName)
    },[]);
    
    const SendChanges = () =>{

        const data = {
            AccountToken: Cookie.get("UserToken"),
            NewAccountName: AccountName,
            UserInputedPassword: UserInputPassword
        };
        
        axios.post(`${APIBACKEND}/user-account-manager/change-user-account/`, data).then((res)=>{
            //*ReloadWindow

            if(res.data.error){
                window.alert("Error");
            }

            if(!res.data.succeded){
                window.alert("Wrong Credentials");
            }
            
        });
    }

    return (
        <div className={styles.popup}>
            <div className={styles.popup_inner}>
                <h1>Change Account</h1>
                <button onClick={props.closePopup}>X</button>
                <br />
                <input
                    type="text"
                    name="VideoTitle"
                    placeholder="Enter Account Name..."
                    onChange={(e) => {
                        setAccountName(e.target.value)
                    }}
                    value={AccountName}
                    maxlength="20"
                />
                <br />
                <input 
                    type="password"
                    placeholder="Enter Account Password..."
                    onChange={(e) => {
                        setUserInputPassword(e.target.value)
                    }}
                    required
                    
                />
                <button onClick={SendChanges}>Save!</button>
            </div>
        </div>
    );
}

export default EditProfilePopUp;
