import { useState, useEffect } from "react";
import style from './style/NavBarChanelLinksTamplate.module.css';
import Link from 'next/Link';

export default function ChanelLinkTamplate(props) {


    return (
        <>
            <Link href={`/c/${props.ChanelId}`}>
                <a>
                    <div className={style.container}>
                        <h1 className={style.ChnelNameText}>{props.ChanelName}</h1>
                    </div>
                </a>
            </Link>
        </>
    )
}
