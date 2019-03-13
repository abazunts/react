import React from "react";
import s from './profilesmall.module.css'

const Profilesmall = () => {
    return (

        <div className={s.containerProfile}>
            <div className={s.profileSmall}>
                <div className={s.editProfile}>
                    <a href="#">Edit</a>
                </div>
                <div className={s.myPhoto}>
                    <img className="ml-auto mr-auto"/>
                </div>
                <span className={s.profileName}>Katherine Faber</span>
                <div className={s.titlePhotos}>
                    <div className={s.titles}> Photos </div>
                    <div className={s.title}>68</div>
                </div>
                <div className={s.titleFollowers}>
                    <div className={s.titles}>Followers</div>
                    <div className={s.title}>93</div>
                </div>
                <div className={s.titleFollowing}>
                    <div className={s.titles}>Following</div>
                    <div className={s.title}>62</div>
                </div>
            </div>
        </div>

    )
}

export default Profilesmall;