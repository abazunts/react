import React, {Component} from 'react';

import './App.css';
import Header from "./Components/Header/header";
import Friends from "./Components/Friends/friend";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import News from "./Components/News/news";
import Messages from "./Components/Messages/messages";
import Music from "./Components/Music/music";
import Settings from "./Components/Settings/settings";
import {BrowserRouter, Route} from "react-router-dom";
import Profilesmall from "./Components/Profilesmall/profilesmall";
import Profile from "./Components/Profile/profile";

// class App extends Component {
//     render() {
const App = (props) => {
        return (
            <BrowserRouter>
            <div className="App">

                <Header/>
                <section>
                    <div className="content">
                        <Route path='/News' render={ () => <News/> }/>
                        <Route path='/Profile' render={ () => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>  }/>
                        <Route path='/Messages' render={ () => <Messages dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/> }/>
                        <Route path='/Music' render={ () => <Music/> }/>
                        <Route path='/Friends' render={ () => <Friends/> }/>
                        <Route path='/Settings' render={ () => <Settings/> }/>


                        <Profilesmall/>

                        <Navbar/>

                    </div>
                </section>

                <Footer/>
            </div>
            </BrowserRouter>
        )
    }



export default App;
