import { useState } from "react";
import { useRouter } from 'next/router'
import styles from "./style/NavBar.module.css";

const NavBar = () => {
    const [sidebar, setsidebar] = useState(false)
    const router = useRouter()
    return (
        <div className={styles.navBar}>
            <nav className={styles.HeaderBar}>
                <button className={styles.HomeButton} onClick={() => { setsidebar(true) }}>
                    G H
                </button>
                <div>
                    <button className={styles.uploadText} onClick={() => router.push('/upload')} >
                        Upload
                    </button>

                    <button className={styles.userText} onClick={() => router.push("/account")}>
                        User
                    </button>

                </div>
            </nav>
            <div>
                <nav className={sidebar ? styles.NavMenuActive : styles.NavMenu}>
                    <button className={styles.XButton} onClick={() => { setsidebar(false) }}>
                        X
                    </button>

                    <button className={styles.ToHomeButton} onClick={() => router.push('/')}>
                        HOME
                    </button>

                    <button className={styles.ToMyChanel} onClick={() => router.push("/chanel")}>
                        MY CHANEL
                    </button>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;