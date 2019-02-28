import React from 'react';
import s from "./comments.module.css"



const Comments = (props) => {

    let comments = () => {
        debugger
        if (props.profilePage[0].posts.id === props.idpost) {
           return (
               <div>sdcsdc</div>

           )
        }

    }

    return (

        <div className={s.mainpost}>

            {comments}
        </div>


    )
}

export default Comments;