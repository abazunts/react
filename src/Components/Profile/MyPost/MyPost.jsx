import React from 'react';
import Post from "./Post/Post";
import s from "./mypost.module.css";
import AddPost from "./AddPost";


const MyPost = (props) => {
    let newPostText=props.profilePage.newPostText;
    let dispatch = props.dispatch;
    let postsElement = props.profilePage.posts.map(p => <Post message={p.message} id={p.id} nowDate={p.nowDate}
                                                              like={p.likeCount} comments={p.commentsCount}
                                                              share={p.shareCount} myName={props.profilePage.myName}
                                                              avatar={props.profilePage.avatar}
                                                              dispatch={props.dispatch}
                                                              profilePage={props.profilePage}
                                                              commentsMessage={props.profilePage.comments}
    />)


    return (
        <div className={s.test}>
            <AddPost newNewsText={props.newsPage.newNewsText} newPostText={newPostText} dispatch={dispatch}/>
            <div>
                {postsElement.reverse()}
            </div>
        </div>
    )
}

export default MyPost;