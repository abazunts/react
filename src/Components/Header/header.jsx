import React from "react";
import s from './header.module.css';
import logo from "./../../img/UI8Logo.png"

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.imgLogo}>
                <img className={s.logo} src={logo}/>
            </div>
            <div className={s.search}>
                <input className={s.searchText} wrap="off" placeholder="Find"></input>
            </div>
        </header>

    )
}

export default Header;



