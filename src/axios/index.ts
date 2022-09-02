import axios, { AxiosInstance } from "axios"

const instance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_AXIOS_BASE_URL,
})

export default instance
