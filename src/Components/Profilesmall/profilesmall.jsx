import React from "react";
import s from './profilesmall.module.css'

const Profilesmall = (props) => {
    return (

        <div className={s.containerProfile}>
            <div className={s.profileSmall}>
                <div className={s.editProfile}>
                    <a href="#">Edit</a>
                </div>
                <div className={s.myPhoto}>
                </div>
                <span className={s.profileName}>{props.profilePage.myName}</span>
                <div className={s.titlePhotos}>
                    <div className={s.titles}> Photos </div>
                    <div className={s.title}>{props.profilePage.myProfileData.photos}</div>
                </div>
                <div className={s.titleFollowers}>
                    <div className={s.titles}>Followers</div>
                    <div className={s.title}>{props.profilePage.myProfileData.followers}</div>
                </div>
                <div className={s.titleFollowing}>
                    <div className={s.titles}>Following</div>
                    <div className={s.title}>{props.profilePage.myProfileData.following}</div>
                </div>
            </div>
        </div>

    )
}

export default Profilesmall;