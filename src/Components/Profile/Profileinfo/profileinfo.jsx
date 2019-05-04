import React, {useEffect} from "react";
import s from './profileinfo.module.css';
import Myphoto from "../../../img/myphoto.png"
import PropTypes from 'prop-types'


const Profileinfo = ({profilePage: {fullName, userId,aboutMe, contacts},setProfileFull}) => {

    useEffect(() => {
        setProfileFull(userId)
    }, [])
    return (
        <div className={s.containerContent}>
            <div className={s.profile}>
                    <button className={s.settingsNav}></button>
                        <img src={Myphoto} className={s.yourPhoto}/>
                        <span className={s.yourName}>{fullName}</span>
                        <button className={s.mail}></button>
                        <button className={s.follow}>Follow</button>
            </div>
            <div className={s.status}>
                <div className={s.stat}>
                    {aboutMe}
                </div>
                    <div   className={s.titleFollowers}>

                        <div className={s.titleHed}><a href='#' className={s.links}>Videos</a></div>

                        <div className={s.titleIntro}>{contacts.facebook}</div>
                    </div>
                    <div className={s.titleFollowing}>

                        <div className={s.titleHed}><a href='#' className={s.links} >Reposts</a></div>

                        <div className={s.titleIntro}>{contacts.website}</div>
                    </div>
                    <div className={s.titleComments}>

                            <div className={s.titleHed}><a href='#' className={s.links} >Comments</a></div>

                        <div className={s.titleIntro}>{contacts.vk}</div>
                    </div>
                    <div className={s.titleLikes}>

                        <div className={s.titleHed}><a href='#' className={s.links} >Likes</a></div>

                        <div className={s.titleIntro}>{contacts.instagram}</div>
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