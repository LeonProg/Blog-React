import axios from "axios";
export const API_URL = 'http://blog/api'

const $api = axios.create({
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`

    return config
})

$api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    if (error.response.status === 401) {
        console.log("Не авторизирован")
        localStorage.removeItem('token')
    }
})

export default $api