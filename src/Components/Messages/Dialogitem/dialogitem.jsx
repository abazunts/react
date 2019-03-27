import React from "react";
import {NavLink, Route} from "react-router-dom";
import s from './dialogitem.module.css'
import PropTypes from 'prop-types'


const Messages = (props) => {

    let path = "/messages/" + props.id;

    return (
        <div className={s.friends}>
            <img src={props.avatar}></img>
            <span className={s.name}><NavLink to={path}>{props.name}</NavLink></span>
            <span  className={s.status}>{props.status}</span>
        </div>
    )
}

Messages.propTypes = {
    id: PropTypes.string.isRequired,
    avatar: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
}

export default Messages;