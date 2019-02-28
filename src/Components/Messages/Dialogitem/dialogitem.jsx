import React from "react";
import {NavLink} from "react-router-dom";
import s from './dialogitem.module.css'


const Messages = (props) => {

    let path = "/messages/" + props.id;

    return (
        <div className={s.friends}>

            <img src={props.avatar}></img>
            <span className={s.name}><NavLink to={path}>{props.name}</NavLink></span>
            <span className={s.status}>{props.status}</span>


        </div>
    )
}

export default Messages;