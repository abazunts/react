import React from "react";
import s from './profileinfo.module.css';
import Myphoto from "./../../../img/Myphoto.png"


const Profileinfo = () => {
    return (
        <div className={s.container__content}>
            <div className={s.profile}>
                    <button className={s.settings__nav}></button>

                        <img src={Myphoto} className={s.your__photo}/>
                        <span className={s.your__name}>Katherine Faber</span>
                        <button className={s.mail}></button>
                        <button className={s.follow}>Follow</button>



            </div>


            <div className={s.status}>
                <div className={s.stat}>
                This I have produced as a scantling of Jack’s great eloquence and the force of his
                reasoning
                upon such abstruse matters.
                </div>




                    <div className={s.titlefollowers}>
                        <div className={s.title__hed2}>Followers</div>
                        <div className={s.title__intro2}>68</div>
                    </div>

                    <div className={s.titlefollowing}>
                        <div className={s.title__hed2}>Following</div>
                        <div className={s.title__intro2}>93</div>
                    </div>
                    <div className={s.titlecomments}>
                        <div className={s.title__hed2}>Comments</div>
                        <div className={s.title__intro2}>62</div>
                    </div>
                    <div className={s.titlelikes}>
                        <div className={s.title__hed2}>Likes</div>
                        <div className={s.title__intro2}>2162</div>
                    </div>

            </div>

        </div>
    )
}

export default Profileinfo;