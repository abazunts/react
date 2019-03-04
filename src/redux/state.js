import React from 'react';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_LIKE = 'ADD-LIKE';


let store = {
    _state: {

        dialogsPage: {
            dialogs: [
                {
                    id: "0",
                    name: "Richard Nyman",
                    avatar: "https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/11016_800x480.jpg",
                    status: "Online"
                },
                {
                    id: "1",
                    name: "Isaiah Ayrton",
                    avatar: "https://static.wallpapers-anime.com/upload/20170603/684/M/d/H/p=160x200/MdHGEF.jpg",
                    status: "Offline"
                },
                {
                    id: "2",
                    name: "Destiny Higgins",
                    avatar: "http://static.hdw.eweb4.com/media/thumbs/1/68/679674.jpg",
                    status: "Online"
                },

            ],
            messages: [
                {id: "0", check: "0", message: "Hey dude! Wazzap!?"},
                {id: "1", check: "1", message: "This sounded a very good reason, and Alice was quite pleased to know..."},
                {id: "2", check: "1", message: "Ok man"},
            ],

            newMessage: '',
        },

        profilePage: {
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
        },

        friendPage: {
            friends: [
                {
                    id: "0",
                    name: "Richard Nyman",
                    avatar: "https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/11016_800x480.jpg",
                    status: "Online"
                },
                {
                    id: "1",
                    name: "Isaiah Ayrton",
                    avatar: "https://static.wallpapers-anime.com/upload/20170603/684/M/d/H/p=160x200/MdHGEF.jpg",
                    status: "Online"
                },
                {
                    id: "2",
                    name: "Destiny Higgins",
                    avatar: "http://static.hdw.eweb4.com/media/thumbs/1/68/679674.jpg",
                    status: "Online"
                }
            ]
        }


    },
    _reRender() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subsribe(observer) {
        this._reRender = observer;
    },


    dispatch(action) {
        if (action.type === ADD_POST) {
            if (this._state.profilePage.newPostText != "") {
                let date = new Date()

                const nowDay = date.getDate()
                const nowMonth = date.getMonth() + 1
                const nowYear = date.getFullYear()
                const nowHours = date.getHours()
                const nowMinutes = date.getMinutes()

                let newPost = {
                    id: this._state.profilePage.posts.length,
                    message: this._state.profilePage.newPostText,
                    likeCount: 0,
                    commentsCount: 0,
                    shareCount: 0,
                    nowDate: nowDay + "." + nowMonth + "." + nowYear + ", " + nowHours + ":" + nowMinutes
                }
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._reRender(this._state);
            } else alert("Необходимо добавить пост")

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._reRender(this._state);

        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessage = action.newText;
            this._reRender(this._state);

        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: this._state.dialogsPage.messages.length,
                message: this._state.dialogsPage.newMessage
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessage = '';
            this._reRender(this._state);
        } else if (action.type === ADD_LIKE) {
            this._state.profilePage.posts[action.id].likeCount++
            this._reRender(this._state);
        }
    }


}

export const addPostActionCreator = () =>
    ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const addMessageActionCreator = () =>
    ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})
export const addLikeActionCreator = (id) =>
    ({type: ADD_LIKE, id: id})


export default store;
window.store = store;


