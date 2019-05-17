import React from "react"
import Profileinfo from "./profileinfo";
import {connect} from "react-redux";
import {
    putProfile,
    setAboutMe,
    getProfileFull,
    setEditMode,
    setEditContacts,
    setChangeFullName, setChangeDescription, setChangeChecked, setChangeAboutMe
} from "../../../redux/profile-reducer";


class ProfileInfoContainer extends React.Component {
    componentDidMount() {
        this.props.getProfileFull(this.props.userId)
    }

    render() {
        return <Profileinfo {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return ({
        profilePage: state.profilePage,
        userInfo: state.auth.userInfo,
        editMode: state.profilePage.editMode,
        isAuth: state.auth.isAuth,
        userId: state.auth.userInfo.userId,
    })

}

let mapDispatchToProps = (dispatch) => {
    return ({
        setAboutMe: (aboutMe) => {
            dispatch(setAboutMe(aboutMe))
        },

        putProfile: (profile) => {
            dispatch(putProfile(profile))
        },
        getProfileFull: () => {
            dispatch(getProfileFull())
        },

        setEditMode: (editMode) => {
            dispatch(setEditMode(editMode))
        },

        setChangeContacts: (fieldName, fieldValue) => {
            dispatch(setEditContacts(fieldName, fieldValue))

        },

        setChangeFullName: (fullName) => {
            dispatch(setChangeFullName(fullName))
        },
        setChangeDescription: (desc) => {
            dispatch(setChangeDescription(desc))
        },

        setChangeChecked: (checked) => {
            dispatch(setChangeChecked(checked))
        },
        setChangeAboutMe: (aboutMe) => {
            dispatch(setChangeAboutMe(aboutMe))
        },



    })
}



export default  connect(mapStateToProps, mapDispatchToProps)(ProfileInfoContainer)