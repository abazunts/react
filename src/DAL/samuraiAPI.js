import * as axios from "axios";


const samuraiAPI = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true
})

const apiService = {
    setUsers(pageNumber) {
        return samuraiAPI.get('/users?page='+pageNumber).then(response => {
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

    setProfileFull(userId) {
        return samuraiAPI.get('/profile/' + userId).then(response => {
            return response.data;
        })
    }

}

export default apiService;



