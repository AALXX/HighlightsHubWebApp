import React from 'react';
import styles from "./style/CommentModel.module.css"


const CommentModel = ({CommentContent, UserName, UserAvatar}) => {
    return (
        <div className={styles.CommentModelBorder}>
            <div className={styles.AccountDetails}>
                <img className={styles.ChanelAvatarImageComment} alt="" width="150" height="150" />
                
                <h2 className={styles.UserNameText}>{UserName}</h2>

            </div>
            <div className={styles.CommentContentDiv}>
                <h5 className={styles.CommentContent}>{CommentContent}</h5>
            </div>
        </div>
    );
}

export default CommentModel;