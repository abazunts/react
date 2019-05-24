import {combineReducers, createStore, applyMiddleware} from "redux";
import profileReducer from "./profile-reducer";
import friendReducer from "./friend-reducer";
import dialogsReducer from "./dialogs-reducer";
import newsReducer from "./news-reducer";
import usersReducer from "./users-reducer";
import thunk from "redux-thunk";
import loginReducer from "./login-reducer";
import AuthReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendPage: friendReducer,
    newsPage: newsReducer,
    usersPage: usersReducer,
    loginPage: loginReducer,
    auth: AuthReducer
});

let store = createStore(reducers,applyMiddleware(thunk));


window.store = store;

export default store;