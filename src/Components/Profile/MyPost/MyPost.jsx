import React from 'react';
import Post from "./Post/Post";
import s from "./mypost.module.css";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";



const MyPost = (props) => {

    let postsElement = props.profilePage.posts.map(p => <Post message={p.message} id={p.id} nowDate={p.nowDate} like={p.likeCount} comments={p.commentsCount} share={p.shareCount} myName={props.profilePage.myName} dispatch={props.dispatch}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }
    return (
        <div className={s.test}>
            <div className={s.post}>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText}
                          className={s.textarea}/>
                <button onClick={addPost} className={s.button}>Send</button>
            </div>
            <div className={s.mypost}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPost;