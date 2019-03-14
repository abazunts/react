import React from 'react';

import s from "./myaddpost.module.css";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {addNewsActionCreator, updateNewNewsTextActionCreator} from "../../../redux/news-reducer";
import {Route} from "react-router-dom";


const AddPost = (props) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    let addNews = () => {
        props.dispatch(addNewsActionCreator());
    }

    let onNewsChange = (e) => {
        let text = e.target.value;
        let action = updateNewNewsTextActionCreator(text);
        props.dispatch(action);
    }


    return (
        <div>
            <Route path='/news' render={() => {
                return (
                    <div className={s.postNews}>
                    <textarea onChange={onNewsChange} value={props.newsPage.newNewsText}
                              className={s.textarea} placeholder="What's new?"/>
                        <button className={s.buttonAdd}></button>
                        <button onClick={addNews} className={s.button}>Send</button>
                    </div>
                )
            }}/>
            <Route path='/profile' render={() => {
                return (
                    <div className={s.post}>
                <textarea onChange={onPostChange} value={props.newPostText}
                          className={s.textarea} placeholder="What's new?"/>
                        <button className={s.buttonAdd}></button>
                        <button onClick={addPost} className={s.button}>Send</button>
                    </div>
                )
            }}/>
        </div>
    )
}

export default AddPost;