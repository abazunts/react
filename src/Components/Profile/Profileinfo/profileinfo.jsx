import React from "react";
import s from './profileinfo.module.css';
import PropTypes from 'prop-types'
import {Redirect} from "react-router-dom";


const Profileinfo = (props) => {

    let {profilePage, editMode} = props;
    let {isAuth, setEditMode, setChangeContacts, putProfile, setChangeFullName, setChangeDescription, setChangeChecked, setChangeAboutMe} = props;


    let onChangeContacts = (e) => {
        setChangeContacts(e.target.name, e.target.value)
    };
    let onChangeChecked = (e) => {
        setChangeChecked(e.target.checked)
    };
    let onChangeFullName = (e) => {
        setChangeFullName(e.target.value)
    };
    let onChangeDescription = (e) => {
        setChangeDescription(e.target.value)
    };

    let onPutProfile = () => {
        setEditMode(false)
        putProfile()
    }

    let onClickChange = (e) => {
        e.target.style.border = '1px solid'
    }

    let onChangeAboutMe = (e) => {
        setChangeAboutMe(e.target.value)
    }

    let onKeyUpEnter = (e) => {
        if (e.keyCode === 13) {
            e.target.style.border = 'none'
            putProfile()
        }
    }

    return (

        <div className={s.containerContent}>
            {!isAuth && <Redirect to={'/login'}/>}
            <div className={s.profile}>
                <button className={s.settingsNav} onClick={() => setEditMode('true')}/>
                <img src={profilePage.photos.small} className={s.yourPhoto} alt={'Avatar'}/>
                <span className={s.yourName}>{profilePage.fullName}</span>
                <span className={s.statusUser}>{profilePage.status}</span>
                <button className={s.mail}/>
                <button className={s.follow}>Follow</button>
            </div>
            {!editMode ?
                <div className={s.status}>
                    <div className={s.stat}>
                        <div className={s.statusNew}>
                            <textarea className={s.aboutMe} onFocus={onClickChange} onKeyUp={onKeyUpEnter} onChange={onChangeAboutMe}
                                      value={profilePage.aboutMe}/>
                        </div>
                    </div>
                    <div className={s.titleFollowers}>
                        <span className={s.titleHed}>facebook:</span>
                        <span className={s.titleIntro}><a
                            href={profilePage.contacts.facebook}>{profilePage.contacts.facebook}</a></span>

                        <div>
                            <span className={s.titleHed}>vk:</span>
                            <span className={s.titleIntro}><a
                                href={profilePage.contacts.vk} >{profilePage.contacts.vk}</a></span>
                        </div>
                        <div>
                            <span className={s.titleHed}>email:</span>
                            <span className={s.titleIntro}><a
                                href={profilePage.contacts.mainLink}>{profilePage.contacts.mainLink}</a></span>
                        </div>
                        <div>
                            <span className={s.titleHed}>instagram:</span>
                            <span className={s.titleIntro}><a
                                href={profilePage.contacts.instagram}>{profilePage.contacts.instagram}</a></span>
                        </div>
                        <div>
                            <span className={s.titleHed}>looking for a Job:</span>
                            <span className={s.titleIntro}>{profilePage.lookingForAJob ? <span>Yes</span> :
                                <span>No</span>}</span>
                        </div>
                        <div>
                            <span className={s.titleHed}>looking for a job description:</span>
                            <span className={s.titleIntro}>{profilePage.lookingForAJobDescription}</span>
                        </div>
                    </div>

                </div>
                :
                <div className={s.status}>
                    <div className={s.stat}>
                        <div className={s.statusNew}>
                            <span>{profilePage.aboutMe}</span>
                        </div>
                    </div>
                    <div className={s.titleFollowers}>
                        <div>
                            <span className={s.titleHed}>fullname:</span>
                            <input name={'fullname'} onChange={onChangeFullName} value={profilePage.fullName}/>
                        </div>
                        <span className={s.titleHed}>facebook:</span>
                        <input name={'facebook'} onChange={onChangeContacts} value={profilePage.contacts.facebook}/>

                        <div>
                            <span className={s.titleHed}>vk:</span>
                            <input name={'vk'} onChange={onChangeContacts} value={profilePage.contacts.vk}/>
                        </div>
                        <div>
                            <span className={s.titleHed}>email:</span>
                            <input name={'mainLink'} onChange={onChangeContacts} value={profilePage.contacts.mainLink}/>
                        </div>
                        <div>
                            <span className={s.titleHed}>instagram:</span>
                            <input name={'instagram'} onChange={onChangeContacts} value={profilePage.contacts.instagram}/>
                        </div>
                        <div>
                            <span className={s.titleHed}>looking for a Job:</span>
                            <input name={'lookingForAJob'} type={'checkbox'} onChange={onChangeChecked}
                                   checked={profilePage.lookingForAJob}/>
                        </div>
                        <div>
                            <span className={s.titleHed}>looking for a job description:</span>
                            <input name={'lookingForAJobDescription'}
                                   value={profilePage.lookingForAJobDescription} onChange={onChangeDescription}/>
                        </div>
                        <button onClick={onPutProfile}>Save</button>
                    </div>

                </div>

            }

        </div>
    )
}

Profileinfo.propTypes = {
    profilePage: PropTypes.shape({
        myName: PropTypes.object.isRequired,
        myProfileData: PropTypes.shape({
            status: PropTypes.string.isRequired,
            videos: PropTypes.string.isRequired,
            reposts: PropTypes.string.isRequired,
            comments: PropTypes.string.isRequired,
            likes: PropTypes.string.isRequired,
        })
    }),
}

export default Profileinfo;