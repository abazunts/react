import React from "react";
import Profileinfo from "./Profileinfo/profileinfo"
import MyPost from "./MyPost/MyPost";
import s from "./profile.module.css"
import Profilesmall from "../Profilesmall/profilesmall";
import Friends from "../Friends/friends";



const Profile = (props) => {
    return (

        <div className={s.container__content}>
            <div className={s.gridleft}>
                <Profilesmall/>
                <Friends friendPage={props.friendPage}/>
            </div>

            <div className={s.profilegrid}>

                <Profileinfo/>
            </div>
            <div className={s.mypost}>
                <MyPost profilePage={props.profilePage} dispatch={props.dispatch}/>
            </div>
        </div>
    )
}

export default Profile;