import { useState } from "react";
import { useRouter } from 'next/router'
import style from "./style/NavBar.module.css";

const NavBar = () => {
    const [sidebar, setsidebar] = useState(false)
    const router = useRouter()
    const [Input, setInput] = useState([]);
    
    return (
        <div className={style.UpNavBarBackground}>

        </div>
    )
}

export default NavBar;