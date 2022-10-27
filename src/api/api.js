import axios from 'axios'
import { setUserProfile } from '../redux/profile-reducer'


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: { "API-KEY": "301e44a7-3100-4c0f-816c-6594d9068b27" }


})

export const getUsers = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
        .then(response => { return response.data })

}

export const getDelete = (id) => {
    return instance.delete(`follow/${id}`,)
}
export const getPost = (id) => {
    return instance.post(`follow/${id}`, {},)
}



export const getProfileUsers = (id) => {
    return instance.get(`profile/${id}`)


}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}