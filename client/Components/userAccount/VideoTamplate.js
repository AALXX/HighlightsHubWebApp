import React from 'react'
import styles from "./styles/Videotamplate.module.css"
import useHover from "../../hooks/OnHoverHook"

import abbreviateNumber from "../NumberAbbreviator/NumberAbbreviator"

export default function VideoTamplate(props) {

    const [hoverRef, isHovered] = useHover();//*Custom On hoverEvent hook

    return (
        <div ref={hoverRef} className={styles.VideoTamplateContainer}>
            {isHovered ? (
                <div className={styles.Infobar}>
                    <h1 className={styles.VideoTitle}>{props.VideoTitle}</h1>
                    <img src="/assets/Chanelicons/ActiveFireIcon.svg" alt="FireIcon" className={styles.Fireicon} />
                    <h1 className={styles.FiresNumber}>{abbreviateNumber(props.VideoFires)}</h1>
                </div>
            ) : (null)}

        </div>
    )
}
