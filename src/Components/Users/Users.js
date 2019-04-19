import React from "react"
import s from "./users.module.css"


let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: "0",
                    fullname: "Richard Nyman",
                    avatar: "https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/11016_800x480.jpg",
                    status: "Online",
                    location: {country: "Kazahstan", city: "Atyrau"},
                    followed: false
                },
                {
                    id: "1",
                    fullname: "Isaiah Ayrton",
                    avatar: "https://static.wallpapers-anime.com/upload/20170603/684/M/d/H/p=160x200/MdHGEF.jpg",
                    status: "Online",
                    location: {country: "Kazahstan", city: "Astana"},
                    followed: true
                },
                {
                    id: "2",
                    fullname: "Destiny Higgins",
                    avatar: "http://static.hdw.eweb4.com/media/thumbs/1/68/679674.jpg",
                    status: "Offline",
                    location: {country: "Belarus", city: "Minsk"},
                    followed: true
                },
                {
                    id: "3",
                    fullname: "Abigail Simson",
                    avatar: "https://im0-tub-kz.yandex.net/i?id=7a8014ab033e9beef8d2d46cc1245203-l&n=13",
                    status: "Online",
                    location: {country: "USA", city: "Los Angeles"},
                    followed: false
                },
                {
                    id: "4",
                    fullname: "Anna Sven",
                    avatar: "https://im0-tub-kz.yandex.net/i?id=cd1cffb02de7a1fb75c8c631caf2283f&n=13&exp=1",
                    status: "Offline",
                    location: {country: "USA", city: "Los Angeles"},
                    followed: false
                },
                {
                    id: "5",
                    fullname: "Eleanor Harison",
                    avatar: "https://im0-tub-kz.yandex.net/i?id=bfa911ae87c9cac4077d71ecafc5ff3c&n=13",
                    status: "Offline",
                    location: {country: "Russia", city: "Moskow"},
                    followed: false
                },
            ]
        )
    }

    return (
        <>
        <div className={s.content}>
            <div className={s.title}>Find users</div>
            {
                props.users.map(u => <div key={u.id} className={s.users}>

                    <img src={u.avatar}></img>
                    <span className={s.status}>{u.status}</span>
                    {u.followed
                        ? <button className={s.button} onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button className={s.button} onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                    <span className={s.fullName}> {u.fullname}</span>
                    <span className={s.location}>{u.location.country}, {u.location.city}</span>


                </div>)
            }

        </div>
        <button className={s.readMore}>Read more</button>
        </>
    )
}

export default Users;