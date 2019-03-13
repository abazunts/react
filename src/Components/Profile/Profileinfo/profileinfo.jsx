import React from "react";
import s from './profileinfo.module.css';
import Myphoto from "./../../../img/Myphoto.png"


const Profileinfo = (props) => {
    return (
        <div className={s.containerContent}>
            <div className={s.profile}>
                    <button className={s.settingsNav}></button>
                        <img src={Myphoto} className={s.yourPhoto}/>
                        <span className={s.yourName}>{props.profilePage.myName}</span>
                        <button className={s.mail}></button>
                        <button className={s.follow}>Follow</button>
            </div>
            <div className={s.status}>
                <div className={s.stat}>
                    {props.profilePage.myProfileData.status}
                </div>
                    <div className={s.titleFollowers}>
                        <div className={s.titleHed}>Videos</div>
                        <div className={s.titleIntro}>{props.profilePage.myProfileData.videos}</div>
                    </div>

                    <div className={s.titleFollowing}>
                        <div className={s.titleHed}>Reposts</div>
                        <div className={s.titleIntro}>{props.profilePage.myProfileData.reposts}</div>
                    </div>
                    <div className={s.titleComments}>
                        <div className={s.titleHed}>Comments</div>
                        <div className={s.titleIntro}>{props.profilePage.myProfileData.comments}</div>
                    </div>
                    <div className={s.titleLikes}>
                        <div className={s.titleHed}>Likes</div>
                        <div className={s.titleIntro}>{props.profilePage.myProfileData.likes}</div>
                    </div>

            </div>

        </div>
    )
}

export default Profileinfo;