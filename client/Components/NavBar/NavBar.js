import { useState, useEffect } from "react";
import style from "./style/NavBar.module.css";
import Link from "next/Link"
import axios from "axios"
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'


import ChanelLinkTamplate from "./NavBarChanelLinksModel"

export default function NavBar() {
    const router = useRouter()
    const [sidebar, setsidebar] = useState(false)
    const [Input, setInput] = useState([]);

    const [FolowedChanelsList, setFolowedChanelsList] = useState([{ ChanelsId: "", ChanelName: "" }]);

    useEffect(() => {
        if (Cookies.get("PublicUserToken") === undefined) {

            return setFolowedChanelsList([]);
        }

        axios.get(`${process.env.LOCAL_BACKEND_URL}/user-account-manager/get-user-folowed-chanels/${Cookies.get("PublicUserToken")}`).then((res) => {
            let FolowedChanelsListArr = [];

            for (let i = 0; i < res.data.length; i++) {
                FolowedChanelsListArr.push(res.data[i])
            }

            setFolowedChanelsList(FolowedChanelsListArr);
        });

    }, [])

    return (
        <div>
            <nav className={style.UpNavBarBackground}>
                <button className={style.LogoButton} onClick={() => { setsidebar(true) }}>
                    <h1 className={style.logo}>Logo</h1>
                </button>

                <div className={style.SearchBarContainer}>
                    <form className={style.SearchForm}>
                        <div className={style.SearchBarBorder}>
                            <div className={style.SearchBar}>
                                <input type="test" className={style.SearchBarInput}
                                    placeholder="Search"
                                    onChange={event => setInput(event.currentTarget.value)}
                                />
                            </div>

                            <button className={style.SearchButton} >
                                <img src='/assets/NavBarIcons/SearchBarIcon.svg' alt='next' className={style.SearchIcon} />
                            </button>
                        </div>
                    </form>
                </div>
                <button className={style.AccountImageButton} onClick={() => router.push('/u')} >
                    <img src='/assets/NavBarIcons/RedAccountDefaultImage.svg' alt='AccountImageButton' className={style.AccountImage} />
                </button>
            </nav>
            <div className={sidebar ? style.SideBarActive : null}>
                <nav className={sidebar ? style.NavMenuActive : style.NavMenu}>
                    <button className={style.XButton} onClick={() => setsidebar(false)}>
                        &#9587;
                    </button>
                    <hr color="#4D4D4D" className={style.HorizontalLine} />
                    <Link href="/" >
                        <button className={style.SideBarButton}>HOME</button>
                    </Link>

                    <Link href="/u" >
                        <button className={style.SideBarButton}>MY CHANEL</button>
                    </Link>

                    <Link href="/" >
                        <button className={style.SideBarButton}>SAVED HIGHLIGHTS</button>
                    </Link>

                    <Link href="/u/upload" >
                        <button className={style.SideBarButton}>UPLOAD HIGHLIGHT</button>
                    </Link>
                    <hr color="#4D4D4D" className={style.HorizontalLine} />
                    <div className={style.FolowedChanelsContainer}>
                        {FolowedChanelsList.map((Chanel, index) => (
                            <div key={index}>
                                <ChanelLinkTamplate
                                    ChanelName={Chanel.ChanelName}
                                    ChanelId={Chanel.ChanelsId}
                                />
                            </div>
                        ))}
                    </div>

                </nav>
            </div>
        </div>
    )
}