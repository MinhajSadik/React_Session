import axios from 'axios'

const api = axios.create({
    baseURL: "https://blogs-webiste-api.onrender.com",
})

export const getPosts = () => api.get('/post')

export default api