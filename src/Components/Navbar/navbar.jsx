import React from "react";
import s from './navbar.module.css'
import {NavLink} from "react-router-dom";
import MusicIcon from './../../img/MusicIcon.png'
import MessageIcon from './../../img/MessageIcon.png'
import WorldIcon from './../../img/WorldIcon.png'
import SettingsIcon from './../../img/SettingsIcon.png'


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.items}>

                <div className={s.item}>

                    <NavLink to='/news' activeClassName={s.active}>News</NavLink>
                </div>

                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </div>

                <div className={s.item}>
                    <NavLink to="/messages" activeClassName={s.active}>Messages</NavLink>
                </div>

                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                </div>

                <div className={s.item}>
                    <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>
                </div>

                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;