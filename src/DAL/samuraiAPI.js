import * as axios from "axios";


const samuraiAPI = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        'API-KEY': '0e5c6193-92d9-43fa-8815-9bba27fab0ab'
    }
})

const apiService = {
    getUsers(pageNumber) {
        return samuraiAPI.get('/users?page=' + pageNumber).then(response => {
            return response.data.items
        })
    },

    follow(userId) {
        return samuraiAPI.post('/follow/' + userId).then(response => {
            return response.data;
        })
    },

    unfollow(userId) {
        return samuraiAPI.delete('/follow/' + userId)
    },

    getProfileFull(userId) {
        return samuraiAPI.get('/profile/' + userId).then(response => {
            return response.data;
        })
    },

    login(email, password, rememberMe, captcha) {
        return samuraiAPI.post('auth/login', {email, password, rememberMe, captcha}).then(response => {
            return response.data;
        })
    },
    logOut() {
        return samuraiAPI.post('auth/logout').then(response => {
            return response.data;
        })
    },
    getCaptcha() {
        return samuraiAPI.get('security/get-captcha-url').then(response => {
            return response.data;
        })
    },
    getAuthMe() {
        return samuraiAPI.get('auth/me').then(response => {
            return response.data;
        })
    },

    putStatus(status) {
        return samuraiAPI.put('profile/status', {status}).then(response => {
            return response.data;
        })
    },
    // putProfile(profile) {
    //     return samuraiAPI.put('profile/', {
    //
    //         "aboutMe": profile.aboutMe,
    //         "contacts": {
    //             facebook: profile.contacts.facebook,
    //             vk: profile.contacts.vk,
    //             instagram: profile.contacts.instagram,
    //             mainLink: profile.contacts.mainLink
    //         },
    //         "lookingForAJob": profile.lookingForAJob,
    //         "lookingForAJobDescription": profile.lookingForAJobDescription,
    //         "fullName": profile.fullName,
    //         "userId": profile.userId,
    //
    //
    //     }).then(response => {
    //         return response.data;
    //     })
    // },

    putProfile(profile) {
        return samuraiAPI.put('profile/', profile ).then(response => {
            return response.data;
        })
    },

    getStatus(userId) {
        return samuraiAPI.get('profile/status/' + userId).then(response => {
            return response.data;
        })
    }

}

export default apiService;



