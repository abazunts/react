import React from "react";
import s from './profileinfo.module.css';
import PropTypes from 'prop-types'
import {Redirect} from "react-router-dom";



const Profileinfo = (props) => {

    let {editMode, profilePage, isOwner} = props;
    let {status, profile} = profilePage;
    let {putPhotos, isAuth, setEditMode, setEditContacts, putProfile, setChangeFullName, setChangeDescription, setChangeChecked, setChangeAboutMe} = props;

    let onChangeContacts = (e) => {
        setEditContacts(e.target.name, e.target.value)
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
        let formData = new FormData();
        let imagefile = document.querySelector('#photo');
        formData.append('image', imagefile.files[0]);
        putPhotos(formData)
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
    };



    return (

        <div className={s.containerContent}>
            {!isAuth && <Redirect to={'/login'}/>}
            <div className={s.profile}>
                {
                    isOwner && <button className={s.settingsNav} onClick={() => setEditMode(true)}/>
                }
                <img src={profile.photos.small} className={s.yourPhoto} alt={'Avatar'}/>
                <span className={s.yourName}>{profile.fullName}</span>
                <span className={s.statusUser}>{status}</span>
                <button className={s.mail}/>
                <button className={s.follow}>Follow</button>
            </div>
            {!editMode ?
                <div className={s.status}>
                    <div className={s.stat}>
                        <div>
                            <span>About me:</span>
                        </div>
                        <div className={s.statusNew}>
                            <textarea className={s.aboutMe} onFocus={onClickChange} onKeyUp={onKeyUpEnter} onChange={onChangeAboutMe}
                                      value={profile.aboutMe}/>
                        </div>
                    </div>
                    <div className={s.titleFollowers}>
                        <span className={s.titleHed}>facebook:</span>
                        <span className={s.titleIntro}><a target={'_blank'}
                            href={profile.contacts.facebook}>{profile.contacts.facebook}</a></span>

                        <div>
                            <span className={s.titleHed}>vk:</span>
                            <span className={s.titleIntro}><a  target={'_blank'}
                                href={profile.contacts.vk} >{profile.contacts.vk}</a></span>
                        </div>
                        <div>
                            <span className={s.titleHed}>instagram:</span>
                            <span className={s.titleIntro}><a  target={'_blank'}
                                href={profile.contacts.instagram}>{profile.contacts.instagram}</a></span>
                        </div>
                        <div>
                            <span className={s.titleHed}>looking for a Job:</span>
                            <span className={s.titleIntro}>{profile.lookingForAJob ? <span>Yes</span> :
                                <span>No</span>}</span>
                        </div>
                        <div>
                            <span className={s.titleHed}>looking for a job description:</span>
                            <span className={s.titleIntro}>{profile.lookingForAJobDescription}</span>
                        </div>
                    </div>

                </div>
                :
                <div className={s.status}>
                    <div className={s.stat}>
                        <div className={s.statusNew}>
                            <span>{profile.aboutMe}</span>
                        </div>
                    </div>
                    <div className={s.titleFollowers}>
                        <div>
                            <span className={s.titleHed}>fullname:</span>
                            <input name={'fullname'} onChange={onChangeFullName} value={profile.fullName}/>
                        </div>
                        <span className={s.titleHed}>facebook:</span>
                        <input name={'facebook'} onChange={onChangeContacts} value={profile.contacts.facebook}/>

                        <div>
                            <span className={s.titleHed}>vk:</span>
                            <input name={'vk'} onChange={onChangeContacts} value={profile.contacts.vk}/>
                        </div>
                        <div>
                            <span className={s.titleHed}>email:</span>
                            <input name={'mainLink'} onChange={onChangeContacts} value={profile.contacts.mainLink}/>
                        </div>
                        <div>
                            <span className={s.titleHed}>instagram:</span>
                            <input name={'instagram'} onChange={onChangeContacts} value={profile.contacts.instagram}/>
                        </div>
                        <div>
                            <span className={s.titleHed}>looking for a Job:</span>
                            <input name={'lookingForAJob'} type={'checkbox'} onChange={onChangeChecked}
                                   checked={profile.lookingForAJob}/>
                        </div>
                        <div>
                            <span className={s.titleHed}>looking for a job description:</span>
                            <input name={'lookingForAJobDescription'}
                                   value={profile.lookingForAJobDescription} onChange={onChangeDescription}/>
                        </div>
                        <div>
                            <div>
                                <span>Load your photos</span>
                            </div>
                            <input type={'file'} id={'photo'}/>
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