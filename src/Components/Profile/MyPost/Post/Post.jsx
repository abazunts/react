import React from 'react';
import s from "./post.module.css"
import rePostIcon from "../../../../img/RepostIcon.png"

import {addLikeActionCreator} from "../../../../redux/profile-reducer";


const Post = (props) => {

    let attachmentVideo = props.attachmentVideo;
    let attachmentPhoto = props.attachmentPhoto;

    let addLike = () => {
        let id = props.id;
        props.dispatch(addLikeActionCreator(id))
    }
    return (

        <div className={s.mainPost}>

            <img src={props.avatar} className={s.myPhoto}/>
            <div className={s.myName}>
                {props.myName}
                {props.rePostTo !== "" && props.rePostTo !== undefined &&
                <span className={s.rePostTo}>
                    <img src={rePostIcon} className={s.rePostIcon}/>
                    {props.rePostTo}
                </span>
                }
            </div>
            <div className={s.date}>
                {props.nowDate}
            </div>

            <div className={s.message}>
                {props.message}
            </div>
            <div className={s.attachment}>
                {attachmentVideo !== "" && attachmentVideo !== undefined &&
                <div className={s.attachmentContent}>
                    <iframe className={s.frame} src={attachmentVideo}
                            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                </div>
                }

                {attachmentPhoto !== "" && attachmentPhoto !== undefined &&
                <div className={s.attachmentContent}>
                    <img src={attachmentPhoto}/>
                </div>
                }
            </div>

            <div className={s.buttons}>
                {props.like}
                <button onClick={addLike} className={s.like}>Like</button>
                {props.comments}
                <button className={s.comments}>Comments</button>
                {props.share}
                <button className={s.share}>Share</button>
            </div>
        </div>


    )
}

export default Post;