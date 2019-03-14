import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import friendReducer from "./friend-reducer";
import dialogsReducer from "./dialogs-reducer";
import newsReducer from "./news-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendPage: friendReducer,
    newsPage: newsReducer
});

let store = createStore(reducers);

export default store;