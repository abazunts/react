import React from 'react';
import s from "./comments.module.css"



const Comments = (props) => {

    let comments = () => {
        debugger
        if (props.profilePage[0].posts.id === props.idpost) {
           return (
               <div></div>
           )
        }
    }

    return (

        <div className={s.mainPost}>
            {comments}
        </div>


    )
}

export default Comments;