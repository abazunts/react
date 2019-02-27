import React from "react";
import s from './profileinfo.module.css';


const Profileinfo = () => {
    return (
        <div className={s.container__content}>
            <div className={s.profile}>
                <div className="row">
                    <button className={s.settings__nav}>
                    </button>
                </div>
                <div className={s.profile__info}>
                    <div className="row d-flex">

                        <img className={s.your__photo}/>
                        <span className={s.your__name}>Katherine Faber</span>
                    </div>
                </div>
                <div className={s.button}>
                    <div className="row d-flex">

                        <button className={s.mail}>
                        </button>
                        <button className={s.follow}>
                            Follow
                        </button>
                    </div>
                </div>


            </div>


            <div className={s.status}>
                This I have produced as a scantling of Jack’s great eloquence and the force of his
                reasoning
                upon such abstruse matters.
            </div>
            <div className={s.about__count}>
                <div className="d-flex justify-content-between">
                    <div className={s.title}>
                        <div className={s.title__hed2}>
                            Followers
                        </div>
                        <p className={s.title__intro2}>
                            68
                        </p>
                    </div>

                    <div className={s.title}>
                        <div className={s.title__hed2}>
                            Following
                        </div>
                        <p className={s.title__intro2}>
                            93
                        </p>
                    </div>
                    <div className={s.title}>
                        <div className={s.title__hed2}>
                            Comments
                        </div>
                        <p className={s.title__intro2}>
                            62
                        </p>
                    </div>
                    <div className={s.title}>
                        <div className={s.title__hed2}>
                            Likes
                        </div>
                        <p className={s.title__intro2}>
                            2162
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profileinfo;