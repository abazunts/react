import React from 'react'
import apiService from "../DAL/samuraiAPI";
import {statuses} from "../DAL/statuses";
import {getAuthMe, setAuth} from "./auth-reducer";
import {putStatus} from "./profile-reducer";

const SET_LOGIN = 'SN/LOGIN/SET_LOGIN';
const SET_STATUS = 'SN/LOGIN/SET_STATUS';
const SET_EMAIL = 'SN/LOGIN/SET_EMAIL';
const SET_PASSWORD = 'SN/LOGIN/SET_PASSWORD';
const SET_CAPTCHA_URL = 'SN/LOGIN/SET_CAPTCHA_URL';
const SET_RESULT_CODE = 'SN/LOGIN/SET_RESULT_CODE';
const SET_CAPTCHA_TEXT = 'SN/LOGIN/SET_CAPTCHA_TEXT';
const SET_REMEMBER_ME = 'SN/LOGIN/SET_REMEMBER_ME';
const SET_MESSAGE = 'SN/LOGIN/SET_MESSAGE';


const initialState = {
    email: '',
    password: '',
    rememberMe: false,
    captchaUrl: '',
    captchaText: '',
    userId: '',
    status: '',
    resultCode: '',
    message: '',
}

let loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS:
            return {...state, status: action.status}
        case SET_LOGIN:
            return {...state, userId: action.userId}
        case SET_EMAIL:
            return {...state, email: action.email}
        case SET_PASSWORD:
            return {...state, password: action.password}
        case SET_CAPTCHA_URL:
            return {...state, captchaUrl: action.captchaUrl}
        case SET_RESULT_CODE:
            return {...state, resultCode: action.resultCode}
        case SET_CAPTCHA_TEXT:
            return {...state, captchaText: action.captchaText}
        case SET_REMEMBER_ME:
            return {...state, rememberMe: action.rememberMe}
        case SET_MESSAGE:
            return {...state, message: action.message,}
        default:
            return state
    }
}

export const setLogin = (userId) => ({type: SET_LOGIN, userId});
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setChangeEmail = (email) => ({type: SET_EMAIL, email})
export const setChangePassword = (password) => ({type: SET_PASSWORD, password})
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, captchaUrl})
export const setResultCode = (resultCode) => ({type: SET_RESULT_CODE, resultCode})
export const setCaptchaText = (captchaText) => ({type: SET_CAPTCHA_TEXT, captchaText})
export const setRememberMe = (rememberMe) => ({type: SET_REMEMBER_ME, rememberMe})
export const setMessage = (message) => ({type: SET_MESSAGE, message})


export const login = (email, password, rememberMe, captchaText) => (dispatch) => {
    dispatch(setStatus(statuses.IN_PROGRESS))
    apiService.login(email, password, rememberMe, captchaText).then(response => {
        switch (response.resultCode) {
            case 0: {
                dispatch(setResultCode(response.resultCode))
                dispatch(setLogin(response.data.userId))
                dispatch(setCaptchaText(''))
                dispatch(setStatus(statuses.SUCCESS))
                dispatch(setAuth(true))
                dispatch(getAuthMe())
                dispatch(putStatus('Online'))
            }
            case 1: {
                dispatch(setResultCode(response.resultCode))
                dispatch(setMessage(response.messages))
                dispatch(setStatus(statuses.ERROR))
            }
            case 10: {
                dispatch(setResultCode(response.resultCode))
                dispatch(getCaptcha())
                dispatch(setMessage(response.messages))
                dispatch(setStatus(statuses.ERROR))
            }
        }
    })

}

export const getCaptcha = () => (dispatch) => {
    apiService.getCaptcha().then(response => {
        dispatch(setCaptchaUrl(response.url))
    })
}



export default loginReducer;