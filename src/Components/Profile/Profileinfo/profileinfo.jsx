import React from "react";
import s from './profileinfo.module.css';
import Myphoto from "./../../../img/Myphoto.png"


const Profileinfo = () => {
    return (
        <div className={s.containerContent}>
            <div className={s.profile}>
                    <button className={s.settingsNav}></button>
                        <img src={Myphoto} className={s.yourPhoto}/>
                        <span className={s.yourName}>Katherine Faber</span>
                        <button className={s.mail}></button>
                        <button className={s.follow}>Follow</button>
            </div>
            <div className={s.status}>
                <div className={s.stat}>
                This I have produced as a scantling of Jack’s great eloquence and the force of his
                reasoning
                upon such abstruse matters.
                </div>
                    <div className={s.titleFollowers}>
                        <div className={s.titleHed}>Followers</div>
                        <div className={s.titleIntro}>68</div>
                    </div>

                    <div className={s.titleFollowing}>
                        <div className={s.titleHed}>Following</div>
                        <div className={s.titleIntro}>93</div>
                    </div>
                    <div className={s.titleComments}>
                        <div className={s.titleHed}>Comments</div>
                        <div className={s.titleIntro}>62</div>
                    </div>
                    <div className={s.titleLikes}>
                        <div className={s.titleHed}>Likes</div>
                        <div className={s.titleIntro}>2162</div>
                    </div>

            </div>

        </div>
    )
}

export default Profileinfo;