import apiService from "../DAL/samuraiAPI";
import {statuses} from "../DAL/statuses";

const FOLLOW = 'SN/USERS/FOLLOW'
const UNFOLLOW = 'SN/USERS/UNFOLLOW'
const SET_USERS = 'SN/USERS/SET_USERS'
const SET_PAGE = 'SN/USERS/SET_PAGE'
const SET_STATUS = 'SN/USERS/SET_STATUS'


let initialState = {
    users: [],
    pageNumber: 1,
    status: statuses.NOT_INITIALIZED

}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_STATUS:
            return {...state, status: action.status}
        case SET_PAGE:
            return {
                ...state,
                users: [...state.users, ...action.users],
                ...state.pageNumber++
            }
        default:
            return state;
    }

}


export const setFollow = (userId) => ({type: FOLLOW, userId})
export const setUnfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setPageUsers = (users) => ({type: SET_PAGE, users})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const getUsers = (pageNumber) => (dispatch) => {
    dispatch(setStatus(statuses.IN_PROGRESS))
    apiService.getUsers(pageNumber).then((users) => {
        pageNumber === 1 ? dispatch(setUsers(users)) : dispatch(setPageUsers(users))
        dispatch(setStatus(statuses.SUCCESS))
    })
}

export const follow = (userId) => (dispatch) => {
    apiService.follow(userId).then(data => {
        data.resultCode === 0 ? dispatch(setFollow(userId)) : alert(data.messages)
    })
}

export const unfollow = (userId) => (dispatch) => {
    apiService.unfollow(userId).then(() => {
        dispatch(setUnfollow(userId))
    })
}

export default usersReducer;