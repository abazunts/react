import React from "react"
import Profileinfo from "./profileinfo";
import {connect} from "react-redux";
import {setProfileFullThunkCreator} from "../../../redux/profile-reducer";

let mapStateToProps = (state) => {
    return ({
        profilePage: state.profilePage
    })

}

let mapDispatchToProps = (dispatch) => {
    return ({
        setProfileFull: (userId) => {
            dispatch(setProfileFullThunkCreator(userId));
        }

    })

}

export default  connect(mapStateToProps, mapDispatchToProps)(Profileinfo)