import React from "react";
import s from './profilesmall.module.css'

const Profilesmall = () => {
    return (

            <div className={s.container__profile}>
                <div className={s.edit__profile}>
                    <a href="#">Edit</a>
                </div>
                <div className={s.my__photo}>
                <img className="ml-auto mr-auto"/>
                </div>
                <span className={s.profile__name}>Katherine Faber</span>
                <div className={s.about}>
                <div className={s.gridtitle}>
                    <div className={s.title}>
                        <div className={s.title__hed}>
                            Photos
                        </div>
                        <p className={s.title__intro}>
                            68
                        </p>
                    </div>
                    <div className={s.title}>
                        <div className={s.title__hed}>
                            Followers
                        </div>
                        <p className={s.title__intro}>
                            93
                        </p>
                    </div>
                    <div className={s.title}>
                        <div className={s.title__hed}>
                            Following
                        </div>
                        <p className={s.title__intro}>
                            62
                        </p>
                    </div>
                </div>
                </div>
            </div>

    )
}

export default Profilesmall;