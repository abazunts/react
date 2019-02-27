import React from "react";
import Profileinfo from "./Profileinfo/profileinfo"
import MyPost from "./MyPost/MyPost";
import s from "./profile.module.css"



const Profile = (props) => {
    return (

        <div className={s.container__content}>
            <div className={s.profilegrid}>
            <Profileinfo/>
            </div>
            <MyPost profilePage={props.profilePage} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;