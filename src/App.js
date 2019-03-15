import React, {Component} from 'react';

import './App.css';
import Header from "./Components/Header/header";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import News from "./Components/News/news";
import Messages from "./Components/Messages/messages";
import Music from "./Components/Music/music";
import Settings from "./Components/Settings/settings";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./Components/Profile/profile";
import FriendsPage from "./Components/Friends/FriendsPage/friendspage";


const App = (props) => {

    let profilePage = props.state.profilePage;
    let friendPage = props.state.friendPage;
    let dialogsPage = props.state.dialogsPage;
    let newsPage = props.state.newsPage;
    let dispatch = props.dispatch;

    return (
        <BrowserRouter>
            <div className="App">
                <div className="header">
                    <Header/>
                </div>
                <div className="content">
                    <div className="contentBlock">
                        <Route path='/News'
                               render={() => <News dispatch={dispatch} profilePage={profilePage} friendPage={friendPage}
                                                   newsPage={newsPage}/>}/>
                        <Route path='/Profile' render={() => <Profile profilePage={profilePage}
                                                                      dispatch={dispatch}
                                                                      friendPage={friendPage}
                                                                      newsPage={newsPage}/>}/>
                        <Route path='/Messages' render={() => <Messages dialogsPage={dialogsPage}
                                                                        dispatch={dispatch}/>}/>
                        <Route path='/Music' render={() => <Music/>}/>
                        <Route path='/FriendsPage' render={() => <FriendsPage friendPage={friendPage}/>}/>
                        <Route path='/Settings' render={() => <Settings/>}/>
                    </div>
                    <div className="menu">
                        <Navbar/>
                    </div>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}


export default App;
