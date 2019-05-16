import React from "react";
import s from './profileinfo.module.css';
import Myphoto from "../../../img/myphoto.png"
import PropTypes from 'prop-types'
import {Redirect} from "react-router-dom";



const Profileinfo = ({profilePage: { userId, profile, contacts, myProfileData, status}, userInfo, isAuth, putProfile, setAboutMe}) => {

    let onKeyUpEnter = (e) => {
        if (e.keyCode === 13) {
            putProfile(profile)
        }
    }

    let onChangeAboutMe = (e) => {
        setAboutMe(e.target.value)
    }

    return (
        <div className={s.containerContent}>
            {!isAuth && <Redirect to={'/login'}/>}
            <div className={s.profile}>
                    <button className={s.settingsNav}></button>
                        <img src={Myphoto} className={s.yourPhoto}/>
                        <span className={s.yourName}>{profile.fullName}</span>
                        <span className={s.statusUser}>{status}</span>
                        <button className={s.mail}></button>
                        <button className={s.follow}>Follow</button>
            </div>
            <div className={s.status}>
                <div className={s.stat}>
                    <div className={s.statusNew}>
                        <input onChange={onChangeAboutMe} onKeyUp={onKeyUpEnter} className={s.inputStatus} type='text' value={profile.aboutMe}/>
                    </div>

                </div>
                    <div   className={s.titleFollowers}>

                        <div className={s.titleHed}><a href='#' className={s.links}>Videos</a></div>

                        <div className={s.titleIntro}>{profile.contacts.facebook}</div>
                    </div>
                    <div className={s.titleFollowing}>

                        <div className={s.titleHed}><a href='#' className={s.links} >Reposts</a></div>

                        <div className={s.titleIntro}>{profile.contacts.website}</div>
                    </div>
                    <div className={s.titleComments}>

                            <div className={s.titleHed}><a href='#' className={s.links} >Comments</a></div>

                        <div className={s.titleIntro}>{profile.contacts.vk}</div>
                    </div>
                    <div className={s.titleLikes}>

                        <div className={s.titleHed}><a href='#' className={s.links} >Likes</a></div>

                        <div className={s.titleIntro}>{profile.contacts.instagram}</div>
                    </div>

            </div>

        </div>
    )
}

Profileinfo.propTypes = {
    profilePage: PropTypes.shape({
        myName: PropTypes.object.isRequired,
        myProfileData: PropTypes.shape({
            status: PropTypes.string.isRequired,
            videos: PropTypes.string.isRequired,
            reposts: PropTypes.string.isRequired,
            comments: PropTypes.string.isRequired,
            likes: PropTypes.string.isRequired,
        })
    }),
}

export default Profileinfo;