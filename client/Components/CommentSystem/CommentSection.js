import React, { useState, useEffect } from 'react'
import axios from "axios"
import Cookie from "js-cookie";

import CommentModel from "./CommentModel"

import {APIBACKEND} from "../../EnviormentalVariables"
import styles from "./style/CommentSection.module.css"

const CommentSection = ({ VideoPublicToken }) => {

    const [VideoToken, setVideoToken] = useState("")
    const [CommentText, setCommentText] = useState("")

    const HandleCommentChange = (event) => {
        setCommentText(event.target.value)
    }

    const PostComment = async (event) => {
        event.preventDefault()

        try {
            const data = {
                VideoToken: VideoToken,
                CommentText: CommentText,
                UserToken: Cookie.get("UserToken")
            }
            await axios.post(`${APIBACKEND}/postacomment/`, data).then((res) => { console.log(res) })
            
        } catch (error) {
            console.log("there was a problem")
            
        }
    }

    useEffect(() =>{

        try {

            const data = {
                VideoToken: VideoToken
            }
            axios.post(`${APIBACKEND}/getvideocomment/`, data).then((res) => {console.log(res.data)})
            
        } catch (error) {
            console.log("there was a problem")
        }
        
    },[VideoToken])
    
    useEffect(() => {
        setVideoToken(VideoPublicToken)
    }, [VideoPublicToken])

    return (
        <div className={styles.CommentSectionBorder}>
            <CommentModel 
                UserName="alex"
                CommentContent="alex e cel mai tare"
            />
            
            <div className={styles.PostCommentsSection}>
                <input className={styles.CommentInputField} placeholder="Comment..." onChange={HandleCommentChange} value={CommentText} type="text" />
                <button className={styles.PostCommentButton }onClick={PostComment}>Post</button>
            </div>
        </div>
    )
}
export default CommentSection