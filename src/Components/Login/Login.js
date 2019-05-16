import React from "react"
import s from './login.module.css'
import {statuses} from "../../DAL/statuses";
import {Redirect} from "react-router-dom";

let Login = (props) => {
    let {email, password, captchaUrl, captchaText, resultCode, rememberMe, message, status} = props.loginPage;
    let {login, changeEmail, changePassword, changeCaptcha, getCaptcha, changeRememberMe} = props;

    if (props.isAuth) {
        return <Redirect to='/profile'/>
    }
    let onChangeEmail = (e) => {
        changeEmail(e.target.value)
    }
    let onChangePassword = (e) => {
        changePassword(e.target.value)
    }

    let onChangeCaptcha = (e) => {
        changeCaptcha(e.target.value)
    }

    let onChangeRememberMe = (e) => {
        changeRememberMe(e.target.checked)
    }


    return (
        <div className={s.login}>
            Please become authorized
            <div className={s.input}>
                <div className={s.inputName}>
                    <input placeholder={'Enter you login'} onChange={onChangeEmail} value={email}/>
                </div>
                <div className={s.inputPassword}>
                    <input placeholder={'Enter you password'} onChange={onChangePassword} type={'password'}
                           value={password}/>
                </div>
                <div>
                    <input type='checkbox' onChange={onChangeRememberMe}/>rememberMe
                </div>
                {resultCode === 10 &&
                <div>
                    <div>
                        <img className={s.captcha} src={captchaUrl}/>
                    </div>
                    <div>
                        <button onClick={() => getCaptcha()}>Update</button>
                    </div>
                    <div>
                        <input type='text' onChange={onChangeCaptcha} value={captchaText}/>
                    </div>
                </div>
                }
            </div>
            <div>
                <button onClick={() => login(email, password, rememberMe, captchaText)}
                        disabled={status === statuses.IN_PROGRESS} className={s.buttonLogin}>Login
                </button>
            </div>
            <div className={s.errorMessage}>
                {message}
            </div>
        </div>
    )
}

export default Login;