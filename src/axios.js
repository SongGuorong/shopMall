import axios from 'axios'

const service = axios.create({
    baseURL: "/api",
    timeout: 1000,
})

export default service