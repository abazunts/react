import React from "react"
import s from "./users.module.css"
import userPhoto from "../../assets/img/userphoto.png"
import {statuses} from "../../DAL/statuses";


let Users = ({
                 pageNumber, users, follow, unfollow,
                 getUsers, status, pageSize, totalCount,
                 currentPage, setPageNumber, setPageSize
             }) => {

    let pageCount = Math.ceil(totalCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let onClickPageNumber = (p) => {
        setPageNumber(p);
        getUsers()
    };

    let onChangeSelect = (e) => {
        setPageSize(e.target.value)
        getUsers()
    }
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
            <div>
                <span>Select user count:</span>
                <select onChange={onChangeSelect}>
                    <option value='10'>10</option>
                    <option value='20'>20</option>
                    <option value='50'>50</option>
                    <option value='100'>100</option>
                </select>

            </div>
            <div className={s.navigationPage}>
                {pages.map((p) => <span onClick={() => onClickPageNumber(p)}
                                        className={currentPage === p ? s.paginationActive : s.pagination}>{p}</span>)}
            </div>


        </>
    )
}

export default Users;