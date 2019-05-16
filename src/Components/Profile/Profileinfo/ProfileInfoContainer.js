import React from "react"
import Profileinfo from "./profileinfo";
import {connect} from "react-redux";
import {putProfile, setAboutMe, setProfileFullThunkCreator} from "../../../redux/profile-reducer";


class ProfileInfoContainer extends React.Component {
    componentDidMount() {
        setProfileFullThunkCreator(this.props.userInfo.userId)
    }

    render() {
        return <Profileinfo {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return ({
        profilePage: state.profilePage,
        userInfo: state.auth.userInfo,
        isAuth: state.auth.isAuth
    })

}

let mapDispatchToProps = (dispatch) => {
    return ({
        setAboutMe: (aboutMe) => {
            dispatch(setAboutMe(aboutMe))
        },

        putProfile: (profile) => {
            dispatch(putProfile(profile))
        }

    })
}



export default  connect(mapStateToProps, mapDispatchToProps)(ProfileInfoContainer)