import React from "react";
import s from "./profile.module.css"
import Friends from "../Friends/friends";
import Profilesmall from "../Profilesmall/profilesmall";
import MyPostContainer from "./MyPost/MyPostContainer";
import PropTypes from 'prop-types'
import ProfileInfoContainer from "./Profileinfo/ProfileInfoContainer";


const Profile = ({profilePage, friendPage}) => {

    return (

        <div className={s.containerContent}>
            <div className={s.gridLeft}>
                {/*<Profilesmall profilePage={profilePage}/>*/}
                {/*<Friends friendPage={friendPage}/>*/}
            </div>
            <ProfileInfoContainer/>
            <div className={s.mypost}>
                {/*<MyPostContainer/>*/}
            </div>
        </div>
    )
}

Profile.propTypes = {
        profilePage: PropTypes.object.isRequired,
        friendPage: PropTypes.object.isRequired,
}

export default Profile;