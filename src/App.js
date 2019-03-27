import React from 'react';

import './App.css';
import Header from "./Components/Header/header";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import Music from "./Components/Music/music";
import Settings from "./Components/Settings/settings";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./Components/Profile/profile";
import FriendsPage from "./Components/Friends/FriendsPage/friendspage";
import NewsContainer from "./Components/News/newsContainer";
import MessagesContainer from "./Components/Messages/messagesContainer";


const App = ({state:{profilePage, friendPage}}) => {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="header">
                    <Header/>
                </div>
                <div className="content">
                    <div className="contentBlock">
                        <Route exact path='/'
                               render={() => <NewsContainer/>}/>
                        <Route path='/Profile' render={() => <Profile profilePage={profilePage}
                                                                      friendPage={friendPage}/>}/>
                        <Route path='/Messages' render={() => <MessagesContainer/>}/>
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
