const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
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
        {
            id: "0",
            check: "0",
            message: "Hey dude! Wazzap!?"
        },
        {
            id: "1",
            check: "1",
            message: "This sounded a very good reason, and Alice was quite pleased to know..."
        },
        {
            id: "2",
            check: "1",
            message: "Ok man"
        },
    ],

    newMessage: '',

}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessage: action.newText}
        case ADD_MESSAGE:
            return {
                ...state,
                newMessage: "",
                messages: [...state.messages, {id: state.messages.length, check: '0', message: state.newMessage}]
            }


        default:
            return state
    }
}

export const addMessageActionCreator = () =>
    ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;