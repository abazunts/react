import React from "react";
import Myphoto from '../img/myphoto.png';

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
            myName: "Katherine Faber",
            avatar: Myphoto,
            shareCount: "2",
            nowDate: "24.02.2019, 11:46"
        },
        {
            id: "1",
            message: "He was justified by the event; for the footpath soon after appeared a little wider and more worn, and the tinkle of a small bell gave the knight to understand that he was in the vicinity of some chapel or hermitage.",
            likeCount: "15",
            commentsCount: "9",
            myName: "Katherine Faber",
            avatar: Myphoto,
            shareCount: "3",
            nowDate: "26.02.2019, 9:15"
        }
    ],

    comments: [
        {
            id: "0",
            idpost: "0",
            name: "Grace Hilton",
            avatar: "https://im0-tub-kz.yandex.net/i?id=e7f19129ffee0a57e6f121db68d01476&n=13&exp=1",
            message: "he gave my mother such a turn",
            likeCount: "15",
            nowDate: "28.02.2019, 11:46"

        },

        {
            id: "1",
            idpost: "0",
            name: "Richard Nyman",
            avatar: "https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/11016_800x480.jpg",
            message: "he gave",
            likeCount: "15",
            nowDate: "01.03.2019, 11:46"

        },

        {
            id: "2",
            idpost: "1",
            name: "Anna Sven",
            avatar: "https://im0-tub-kz.yandex.net/i?id=cd1cffb02de7a1fb75c8c631caf2283f&n=13&exp=1",
            message: "Then she usually reads a book or just watches TV. My father is a doctor. He is tall and handsome. He has short dark hair and gray eyes.",
            likeCount: "15",
            nowDate: "05.03.2019, 11:46"

        }
    ],
    newPostText: '',

    avatar: Myphoto,

    myName: "Katherine Faber",

    myProfileData: {
            photos: 56,
            followers: 32,
            following: 67,
            comments: 78,
            likes: 2467,
            videos: 34,
            reposts: 15,
            status: 'This I have produced as a scantling of Jack’s great eloquence and the force of his\n' +
                '                reasoning\n' +
                '                upon such abstruse matters.'
        }

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText !== "") {
                let date = new Date();

                let nowDay = date.getDate();
                let nowMonth = date.getMonth() + 1;
                const nowYear = date.getFullYear();
                const nowHours = date.getHours();
                let nowMinutes = date.getMinutes();

                if (nowMonth < 10) {
                    nowMonth = '0' + nowMonth
                }
                ;

                if (nowDay < 10) {
                    nowDay = '0' + nowDay;
                }

                if (nowMinutes < 10) {
                    nowMinutes = '0' + nowMinutes;
                }

                let newPost = {
                    id: state.posts.length,
                    message: state.newPostText,
                    likeCount: 0,
                    avatar: Myphoto,
                    commentsCount: 0,
                    shareCount: 0,
                    nowDate: nowDay + "." + nowMonth + "." + nowYear + ", " + nowHours + ":" + nowMinutes
                }
                return {...state, posts: [...state.posts,  newPost], newPostText: ""}
            } else alert("Необходимо добавить пост");


        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}
        case ADD_LIKE:

            return {...state,
                likeCount: {...state.posts[action.id].likeCount++}}
        default:
            return state

    }
}

export const addPostActionCreator = () =>
    ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const addLikeActionCreator = (id) =>
    ({type: ADD_LIKE, id: id})

export default profileReducer;