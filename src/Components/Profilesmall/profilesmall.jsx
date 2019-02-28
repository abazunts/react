import React from "react";
import s from './profilesmall.module.css'

const Profilesmall = () => {
    return (

        <div className={s.container__profile}>
            <div className={s.profilesmall}>
                <div className={s.edit__profile}>
                    <a href="#">Edit</a>
                </div>
                <div className={s.my__photo}>
                    <img className="ml-auto mr-auto"/>
                </div>
                <span className={s.profile__name}>Katherine Faber</span>
                <div className={s.titlephotos}>
                    <div className={s.titles}> Photos </div>
                    <div className={s.title}>68</div>
                </div>
                <div className={s.titlefollowers}>
                    <div className={s.titles}>Followers</div>
                    <div className={s.title}>93</div>
                </div>
                <div className={s.titlefollowing}>
                    <div className={s.titles}>Following</div>
                    <div className={s.title}>62</div>
                </div>
            </div>
        </div>

    )
}

export default Profilesmall;