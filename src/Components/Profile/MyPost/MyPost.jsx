import React from 'react';
import Post from "./Post/Post";
import s from "./mypost.module.css";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const MyPost = (props) => {
    let postsElement = props.profilePage.posts.map(p => <Post message={p.message} id={p.id} nowDate={p.nowDate}
                                                              like={p.likeCount} comments={p.commentsCount}
                                                              share={p.shareCount} myName={props.profilePage.myName}
                                                              dispatch={props.dispatch}
                                                              profilePage={props.profilePage}
    />)


    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }
    return (
        <div className={s.test}>
            <div className={s.post}>
                <textarea onChange={onPostChange} value={props.profilePage.newPostText}
                          className={s.textarea} placeholder='Enter you post'/>
                <button onClick={addPost} className={s.button}>Send</button>
            </div>
            <div>
                {postsElement.reverse()}
            </div>
        </div>
    )
}

export default MyPost;