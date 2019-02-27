import React from 'react';
import s from "./post.module.css"
import Myphoto from './../../../../img/Myphoto.png'
import {addLikeActionCreator} from "../../../../redux/state";


const Post = (props) => {




    let addLike = () => {
        let id = props.id;
        props.dispatch(addLikeActionCreator(id))
    }
    return (

        <div className={s.mainpost}>

            <img src={Myphoto} className={s.myphoto}/>
            <div className={s.myname}>
                {props.myName}

            </div>
            <div className={s.date}>{props.nowDate}</div>



            <div className={s.message}>
            {props.message}
            </div>
            <div className={s.buttons}>
                {props.like}<button onClick={addLike} className={s.like}>Like</button>
                {props.comments}<button className={s.comments}>Comments</button>
                {props.share}<button className={s.share}>Share</button>
                {/*<span>Like</span> {props.like}*/}
            </div>
        </div>


    )
}

export default Post;