import React from "react";
import Profileinfo from "./Profileinfo/profileinfo"
import s from "./profile.module.css"
import Friends from "../Friends/friends";
import Profilesmall from "../Profilesmall/profilesmall";
import MyPostContainer from "./MyPost/MyPostContainer";
import PropTypes from 'prop-types'


const Profile = ({profilePage, friendPage}) => {
    return (

        <div className={s.containerContent}>
            <div className={s.gridLeft}>
                <Profilesmall profilePage={profilePage}/>
                <Friends friendPage={friendPage}/>
            </div>
            <Profileinfo profilePage={profilePage}/>
            <div className={s.mypost}>
                <MyPostContainer/>
            </div>
        </div>
    )
}

Profile.propTypes = {
        profilePage: PropTypes.object.isRequired,
        friendPage: PropTypes.object.isRequired,
}

export default Profile;