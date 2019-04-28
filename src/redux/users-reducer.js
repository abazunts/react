import apiService from "../DAL/samuraiAPI";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'


let initialState = {
    users: [],
    pageNumber: 1
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
            return {...state, users: [...state.users, ...action.users], ...state.pageNumber++}
        default:
            return state;
    }

}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export const setUsersThunkCreator = (pageNumber) => (dispatch) => {
    apiService.setUsers(pageNumber).then((users) => {
        dispatch(setUsersAC(users))
    })
}

export const followThunkCreator = (userId) => (dispatch) => {
    apiService.follow(userId).then(data => {
        data.resultCode === 0 ? dispatch(followAC(userId)) : alert(data.messages)
    })
}

export const unfollowThunkCreator = (userId) => (dispatch) => {
    apiService.unfollow(userId).then(() => {
        dispatch(unfollowAC(userId))
    })
}

export default usersReducer;