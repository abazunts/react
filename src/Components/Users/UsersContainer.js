import React from "react"
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    getUsers,
    unfollow
} from "../../redux/users-reducer";
import {getPageNumberSelector, getStatusSelector, getUserSelector} from "../../redux/userSelector";

 class UsersContainer extends React.Component {
     componentDidMount() {
         debugger
         this.props.getUsers(this.props.pageNumber)
     }

     render() {
         return <Users { ...this.props}/>
     }
 }

let mapStateToProps = (state) => {
    return ({
        users: getUserSelector(state),
        pageNumber: getPageNumberSelector(state),
        status: getStatusSelector(state)
    })
}

let mapDispatchToProps = (dispatch) => {
    return ({
        follow: (userId) => {
            dispatch(follow(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollow(userId))
        },
        getUsers: (pageNumber) => {
            dispatch(getUsers(pageNumber));
        }
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);