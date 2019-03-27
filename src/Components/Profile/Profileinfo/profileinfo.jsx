import React from "react";
import s from './profileinfo.module.css';
import Myphoto from "../../../img/myphoto.png"
import PropTypes from 'prop-types'


const Profileinfo = ({profilePage: {myName, myProfileData:{status, videos, reposts, comments,likes}}}) => {
    return (
        <div className={s.containerContent}>
            <div className={s.profile}>
                    <button className={s.settingsNav}></button>
                        <img src={Myphoto} className={s.yourPhoto}/>
                        <span className={s.yourName}>{myName}</span>
                        <button className={s.mail}></button>
                        <button className={s.follow}>Follow</button>
            </div>
            <div className={s.status}>
                <div className={s.stat}>
                    {status}
                </div>
                    <div   className={s.titleFollowers}>

                        <div className={s.titleHed}><a href='#' className={s.links}>Videos</a></div>

                        <div className={s.titleIntro}>{videos}</div>
                    </div>
                    <div className={s.titleFollowing}>

                        <div className={s.titleHed}><a href='#' className={s.links} >Reposts</a></div>

                        <div className={s.titleIntro}>{reposts}</div>
                    </div>
                    <div className={s.titleComments}>

                            <div className={s.titleHed}><a href='#' className={s.links} >Comments</a></div>

                        <div className={s.titleIntro}>{comments}</div>
                    </div>
                    <div className={s.titleLikes}>

                        <div className={s.titleHed}><a href='#' className={s.links} >Likes</a></div>

                        <div className={s.titleIntro}>{likes}</div>
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