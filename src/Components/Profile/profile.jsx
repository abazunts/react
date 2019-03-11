import React from "react";
import Profileinfo from "./Profileinfo/profileinfo"
import MyPost from "./MyPost/MyPost";
import s from "./profile.module.css"
import ProfileSmall from "../Profilesmall/profileSmall";
import Friends from "../Friends/friends";



const Profile = (props) => {

    return (

        <div className={s.containerContent}>
            <div className={s.gridLeft}>
                <ProfileSmall/>
                <Friends friendPage={props.friendPage}/>
            </div>
                <Profileinfo/>
            <div className={s.mypost}>
                <MyPost profilePage={props.profilePage} dispatch={props.dispatch}/>
            </div>
        </div>
    )
}

export default Profile;