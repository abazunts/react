import React from "react"
import Login from "./Login";
import {connect} from "react-redux";
import {
    getCaptcha,
    login,
    setCaptchaText,
    setChangeEmail,
    setChangePassword, setRememberMe
} from "../../redux/login-reducer";
import {loginSelector} from "../../redux/loginSelector";


class LoginContainer extends React.Component {
    componentDidMount() {

    }

    render() {
        return <Login {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return ({
        loginPage: loginSelector(state),
        isAuth: state.auth.isAuth
    })
}
let mapDispatchToProps = (dispatch) => {
    return ({
        login: (email, password, rememberMe, captchaText) => {
            dispatch(login(email, password, rememberMe, captchaText))
        },

        changeEmail: (email) => {
            dispatch(setChangeEmail(email))
        },

        changePassword: (password) => {
            dispatch(setChangePassword(password))
        },
        changeCaptcha: (captcha) => {
            dispatch(setCaptchaText(captcha))
        },

        changeRememberMe: (remember) => {
            dispatch(setRememberMe(remember))
        },
        getCaptcha: () => {
            dispatch(getCaptcha())
        },
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);