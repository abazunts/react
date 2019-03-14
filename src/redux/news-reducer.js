import React from "react";
import Myphoto from '../img/myphoto.png';
import pPhoto from '../img/photo.png';

const ADD_NEWS = 'ADD-NEWS';
const UPDATE_NEW_NEWS_TEXT = 'UPDATE-NEW-NEWS-TEXT';
const ADD_LIKE_NEWS = 'ADD-LIKE-NEWS';

let initialState = {
    news: [
        {
            id: "0",
            message: "She gave my mother such a turn, that I have always been convinced I am indebted to Miss Betsey for having been born on a Friday.",
            likeCount: "17",
            commentsCount: "15",
            shareCount: "2",
            nowDate: "24.02.2019, 11:46",
            avatar: Myphoto,
            name: "Katherine Faber",
            attachmentVideo: "",
            attachmentPhoto: "",
            rePostTo: ""
        },
        {
            id: "1",
            message: "Thus much I thought proper to tell you in relation to yourself, and to the trust I reposed in you.",
            likeCount: "15",
            commentsCount: "9",
            shareCount: "3",
            nowDate: "26.02.2019, 9:15",
            avatar: "https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/11016_800x480.jpg",
            name: "Richard Nyman",
            attachmentVideo: "",
            attachmentPhoto: pPhoto,
            rePostTo: "Katherine Faber"
        },
        {
            id: "2",
            message: "He was justified by the event; for the footpath soon after appeared a little wider and more worn, and the tinkle of a small bell gave the knight to understand that he was in the vicinity of some chapel or hermitage.",
            likeCount: "23",
            commentsCount: "4",
            shareCount: "3",
            nowDate: "26.02.2019, 9:15",
            avatar: "https://im0-tub-kz.yandex.net/i?id=cd1cffb02de7a1fb75c8c631caf2283f&n=13&exp=1",
            name: "Anna Sven",
            attachmentVideo: "",
            attachmentPhoto: "",
            rePostTo: ""
        },
        {
            id: "3",
            message: "",
            likeCount: "45",
            commentsCount: "10",
            shareCount: "11",
            nowDate: "27.02.2019, 15:17",
            avatar: "https://im0-tub-kz.yandex.net/i?id=e7f19129ffee0a57e6f121db68d01476&n=13&exp=1",
            name: "Grace Hilton",
            attachmentVideo: "https://www.youtube.com/embed/lFTSiVEQctI",
            attachmentPhoto: "",
            rePostTo: ""
        }
    ],

    newNewsText: '',


}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEWS:
            if (state.newNewsText != "") {
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
                    id: state.news.length,
                    message: state.newNewsText,
                    likeCount: 0,
                    commentsCount: 0,
                    shareCount: 0,
                    nowDate: nowDay + "." + nowMonth + "." + nowYear + ", " + nowHours + ":" + nowMinutes,
                    avatar: "",
                    name: "",
                    attachmentVideo: "",
                    attachmentPhoto: "",
                    rePostTo: ""
                }
                state.news.push(newPost);
                state.newNewsText = '';
                return state;
            } else alert("Необходимо добавить пост");


        case UPDATE_NEW_NEWS_TEXT:
            state.newNewsText = action.newText;
            return state;
        case ADD_LIKE_NEWS:
            state.news[action.id].likeCount++;
            return state;
        default:
            return state;
    }
}

export const addNewsActionCreator = () =>
    ({type: ADD_NEWS})
export const updateNewNewsTextActionCreator = (text) =>
    ({type: UPDATE_NEW_NEWS_TEXT, newText: text})
export const addLikeNewsActionCreator = (id) =>
    ({type: ADD_LIKE_NEWS, id: id})


export default newsReducer;