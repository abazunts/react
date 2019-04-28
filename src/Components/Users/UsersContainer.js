import React from "react"
import {connect} from "react-redux";
import Users from "./Users";
import {
    followThunkCreator,
    setUsersThunkCreator,
    unfollowThunkCreator
} from "../../redux/users-reducer";

let mapStateToProps = (state) => {

    return ({
        users: state.usersPage.users,
        pageNumber: state.usersPage.pageNumber
    })
}

let mapDispatchToProps = (dispatch) => {
    return ({
        follow: (userId) => {
            dispatch(followThunkCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowThunkCreator(userId))
        },
        setUsers: (pageNumber) => {
            dispatch(setUsersThunkCreator(pageNumber));
        }
    })
}



export default connect(mapStateToProps, mapDispatchToProps)(Users);