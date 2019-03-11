import React from 'react';
import s from './FriendsPageItem.module.css';
import {NavLink} from 'react-router-dom';


const FriendsPageItem = (props) => {

    let path = "/" + props.id;

        return (
            <div className={s.friends}>
                <img src={props.avatar}></img>
                <span className={s.name}> <NavLink to={path}> {props.name} </NavLink></span>
                <span className={s.status}>{props.status}</span>
            </div>
        )

}


export default FriendsPageItem;