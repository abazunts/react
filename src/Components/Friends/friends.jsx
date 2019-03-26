import React from "react";
import s from './friends.module.css';
import FriendsItem from "./Friendsitem/friendsitem";


const Friends = (props) => {

    let friendsElement = props.friendPage.friends.map(d => <FriendsItem name={d.name} id={d.id} avatar={d.avatar} status={d.status}/>)

    return (
        <div className={s.friends}>
            <div className={s.status}> Friends online</div>
            <div className={s.friend}>{friendsElement}</div>
        </div>
    )
}

export default Friends;