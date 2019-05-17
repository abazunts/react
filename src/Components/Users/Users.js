import React from "react"
import s from "./users.module.css"
import userPhoto from "../../assets/img/userphoto.png"
import {statuses} from "../../DAL/statuses";


let Users = ({pageNumber, users, follow, unfollow, getUsers, status}) => {
    return (
        <>
            <div className={s.content}>
                <div className={s.title}>Find users</div>
                {

                    users.map(u => <div key={u.id} className={s.users}>

                        <img src={u.photos.small != null ? u.photos.small : userPhoto}></img>
                        <span className={s.status}>{u.status}</span>
                        {u.followed
                            ? <button className={s.button} onClick={() => {
                                unfollow(u.id)
                            }}>Unfollow</button>
                            : <button className={s.button} onClick={() => {
                                follow(u.id)
                            }}>Follow</button>}
                        <span className={s.fullName}>{u.name}</span>
                        <span className={s.location}></span>


                    </div>)
                }


            </div>
            <div>
                {status === statuses.IN_PROGRESS &&
                <img className={s.loadGif} src="http://www.os-one.ru/img/load/ajax-loader.gif"/>}

            </div>

            <button className={s.readMore} disabled={status === statuses.IN_PROGRESS} onClick={() => getUsers(pageNumber)}>Read more
            </button>
        </>
    )
}

export default Users;