import React from "react"
import s from "./users.module.css"
import userPhoto from "../../assets/img/userphoto.png"


let Users = ({pageNumber, users, follow, unfollow, setUsers}) => {


    if (users.length === 0) {
        setUsers()
    }

    return (
        <>
            <div className={s.content}>
                <div className={s.title}>Find users</div>
                {

                    users.map(u => <div key={u.id} className={s.users}>

                        <img src={u.photos.small != null ? u.photos.small : userPhoto}></img>
                        <span className={s.status}>{"u.status"}</span>
                        {u.followed
                            ? <button className={s.button} onClick={() => {
                                unfollow(u.id)
                            }}>Unfollow</button>
                            : <button className={s.button} onClick={() => {
                                follow(u.id)
                            }}>Follow</button>}
                        <span className={s.fullName}> {u.name}</span>
                        <span className={s.location}>{"u.location.country"}, {"u.location.city"}</span>


                    </div>)
                }

            </div>
            <button className={s.readMore} onClick={() => setUsers(pageNumber)}>Read more</button>
        </>
    )
}

export default Users;