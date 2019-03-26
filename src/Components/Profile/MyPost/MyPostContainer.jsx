import React from 'react';
import MyPost from "./MyPost";
import {
    addLikeActionCreator,
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import {
    addLikeNewsActionCreator,
    addNewsActionCreator,
    updateNewNewsTextActionCreator
} from "../../../redux/news-reducer";
import store from "../../../redux/redux-store";


const MyPostContainer = (props) => {

    let state = props.store.getState();
    let dispatch = store.dispatch.bind(store);

    let addLikePost = (id) => {
        dispatch(addLikeActionCreator(id))
    }
    let addLikeNews = (id) => {
        dispatch(addLikeNewsActionCreator(id))
    }

    let addPost = () => {
        dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        dispatch(action);
    }

    let addNews = () => {
        dispatch(addNewsActionCreator());
    }

    let onNewsChange = (text) => {
        let action = updateNewNewsTextActionCreator(text);
        dispatch(action);
    }

    return (
        <MyPost addLikePost={addLikePost}
                addLikeNews={addLikeNews}
                addPost={addPost}
                onPostChange={onPostChange}
                addNews={addNews}
                onNewsChange={onNewsChange}
                newsPage={state.newsPage}
                profilePage={state.profilePage}/>
    )
}

export default MyPostContainer;