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

            await axios.post(`${APIBACKEND}/video-player-manager/post-comment-to-video/`, data).then((res) => {


                console.log(res.data);

                setVideoCommentsList([...VideoCommentsList, res.data])
            })

        } catch (error) {
            throw new Error(`there was a problem with fetchin: ${error}`)
        }
    }

    useEffect(() => {
        try {
            //* fetch Comments data from Api
            axios.post(`${APIBACKEND}/video-player-manager/get-video-comments/`, { VideoToken }).then((res) => {
                console.log(res.data)
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
            <div className={styles.CommentsField}>
                {VideoCommentsList.map((Comment, index) => (
                    <div key={index}>
                        <CommentModel
                            UserName={Comment.UserName}
                            CommentContent={Comment.CommentContent}
                        />
                    </div>
                ))}
            </div>

            <div className={styles.PostCommentsSection}>
                <input className={styles.CommentInputField} placeholder="Comment..." onChange={HandleCommentChange} value={CommentText} type="text" />
                <button className={styles.PostCommentButton} onClick={PostComment}>Post</button>
            </div>
        </div>
    )
}
export default CommentSection