import React from "react";
import Profileinfo from "./Profileinfo/profileinfo"
import MyPost from "./MyPost/MyPost";
import s from "./profile.module.css"
import Friends from "../Friends/friends";
import Profilesmall from "../Profilesmall/profilesmall";



const Profile = (props) => {

    return (

        <div className={s.containerContent}>
            <div className={s.gridLeft}>
                <Profilesmall/>
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