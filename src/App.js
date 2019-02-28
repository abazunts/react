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
import Profilesmall from "./Components/Profilesmall/profilesmall";
import Profile from "./Components/Profile/profile";
import s from "./Components/Header/header.module.css";
import logo from "./img/UI8Logo.png";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">


                <section className="section">
                    <div className="content">
                        <div className="header">
                            <Header/>
                        </div>
                        <div className="search">
                            <input className={"search__text"} wrap="off" placeholder="Find"></input>
                        </div>

                        <div className="contentblock">
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
                </section>

                <Footer/>
            </div>
        </BrowserRouter>
    )
}


export default App;
