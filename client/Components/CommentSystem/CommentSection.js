import React, { useState, useEffect } from 'react'
import axios from "axios"
import Cookie from "js-cookie";

import CommentModel from "./CommentModel"

import { APIBACKEND } from "../../EnviormentalVariables"
import styles from "./style/CommentSection.module.css"

const CommentSection = ({ VideoPublicToken }) => {

    const [VideoToken, setVideoToken] = useState("");
    const [CommentText, setCommentText] = useState("");
    const [VideoCommentsList, setVideoCommentsList] = useState([]);

    //*Handle comment content change
    const HandleCommentChange = (event) => {
        setCommentText(event.target.value);
    }

    //* post comment to Api
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

    useEffect(() => {
        try {

            const data = {
                VideoToken: VideoToken
            }

            //* fetch Comments data from Api
            axios.post(`${APIBACKEND}/getvideocomment/`, data).then((res) => {
                let tmpVideoList = [];
                for (let index = 0; index < res.data.length; index++) {
                    tmpVideoList.push(res.data[index])
                }
                setVideoCommentsList(tmpVideoList)
            })

        } catch (error) {
            console.log("there was a problem")
        }

    }, [VideoToken])

    useEffect(() => {
        setVideoToken(VideoPublicToken)
    }, [VideoPublicToken])

    return (
        <div className={styles.CommentSectionBorder}>
            {VideoCommentsList.map((Comment, index) => (
                <div key={index}>
                    <CommentModel
                        UserName={Comment.UserName}
                        CommentContent={Comment.CommentContent}
                    />
                </div>
            ))}

            <div className={styles.PostCommentsSection}>
                <input className={styles.CommentInputField} placeholder="Comment..." onChange={HandleCommentChange} value={CommentText} type="text" />
                <button className={styles.PostCommentButton} onClick={PostComment}>Post</button>
            </div>
        </div>
    )
}
export default CommentSection