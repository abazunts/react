import React from "react";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_LIKE = 'ADD-LIKE';

let initialState = {
    posts: [
        {
            id: "0",
            message: "She gave my mother such a turn, that I have always been convinced I am indebted to Miss Betsey for having been born on a Friday.",
            likeCount: "11",
            commentsCount: "5",
            shareCount: "2",
            nowDate: "24.2.2019, 11:46"
        },
        {
            id: "1",
            message: "He was justified by the event; for the footpath soon after appeared a little wider and more worn, and the tinkle of a small bell gave the knight to understand that he was in the vicinity of some chapel or hermitage.",
            likeCount: "15",
            commentsCount: "9",
            shareCount: "3",
            nowDate: "26.2.2019, 9:15"
        }
    ],

    comments: [
        {
            id: "0",
            idpost: "1",
            message: "he gave my mother such a turn",
            likeCount: "15",
            commentsCount: "5",
            shareCount: "2",
            nowDate: "24.2.2019, 11:46"

        },

        {
            id: "1",
            idpost: "1",
            message: "he gave",
            likeCount: "15",
            commentsCount: "5",
            shareCount: "2",
            nowDate: "24.2.2019, 11:46"

        }
    ],
    newPostText: '',

    image: <img src="./../img/Myphoto.png"></img>,

    myName: "Katherine Faber"
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText != "") {
                let date = new Date();

                const nowDay = date.getDate();
                const nowMonth = date.getMonth() + 1;
                const nowYear = date.getFullYear();
                const nowHours = date.getHours();
                const nowMinutes = date.getMinutes();

                let newPost = {
                    id: state.posts.length,
                    message: state.newPostText,
                    likeCount: 0,
                    commentsCount: 0,
                    shareCount: 0,
                    nowDate: nowDay + "." + nowMonth + "." + nowYear + ", " + nowHours + ":" + nowMinutes
                }
                state.posts.push(newPost);
                state.newPostText = '';
                return state;
            } else alert("Необходимо добавить пост");


        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        case ADD_LIKE:
            state.posts[action.id].likeCount++;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () =>
    ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const addLikeActionCreator = (id) =>
    ({type: ADD_LIKE, id: id})

export default profileReducer;