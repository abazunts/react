import React from "react"
import Profileinfo from "./profileinfo";
import {connect} from "react-redux";
import {
    putProfile,
    setAboutMe,
    getProfileFull,
    setEditContacts,
    setChangeFullName, setChangeDescription, setChangeChecked, setChangeAboutMe, putPhotos
} from "../../../redux/profile-reducer";
import {setEditMode} from "../../../redux/auth-reducer";


let mapStateToProps = (state) => {
    return ({
        profilePage: state.profilePage,
        userInfo: state.auth.userInfo,
        isAuth: state.auth.isAuth,
        editMode: state.auth.editMode,
        userId: state.auth.userInfo.userId,
        isOwner: state.profilePage.isOwner
    })

};


export default connect(mapStateToProps, {
    putPhotos, setChangeAboutMe, setChangeChecked,
    setAboutMe, putProfile, getProfileFull,
    setEditMode, setEditContacts, setChangeFullName,
    setChangeDescription
})(Profileinfo)