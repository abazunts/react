import React, {Component} from 'react';

import './App.css';
import Header from "./Components/Header/header";
import Friends from "./Components/Friends/friends";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import News from "./Components/News/news";
import Messages from "./Components/Messages/messages";
import Music from "./Components/Music/music";
import Settings from "./Components/Settings/settings";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./Components/Profile/profile";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="header">
                    <Header/>
                </div>
                    <div className="content">

                        <div className="contentBlock">
                            <Route path='/News' render={() => <News/>}/>
                            <Route path='/Profile' render={() => <Profile profilePage={props.state.profilePage}
                                                                          dispatch={props.dispatch}
                                                                          friendPage={props.state.friendPage}/>}/>
                            <Route path='/Messages' render={() => <Messages dialogsPage={props.state.dialogsPage}
                                                                            dispatch={props.dispatch}/>}/>
                            <Route path='/Music' render={() => <Music/>}/>
                            {/*<Route path='/Friends' render={ () => <Friends/> }/>*/}
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
