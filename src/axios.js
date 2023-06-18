import axios from 'axios'
import { ElNotification } from 'element-plus'
import { useCookies } from "@vueuse/integrations/useCookies";

const service = axios.create({
    baseURL: "/api",
    timeout: 1000,
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    const cookies = useCookies()
    const token = cookies.get('admin-token')
    // 往header里面自动添加token
    if (token) {
        config.headers['token'] = token
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
})

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    return response.data.data;
}, function (error) {
    // 对响应错误做点什么
    ElNotification({
        message: error.response.data.msg || '请求失败',
        offset: 100,
        duration: 3000,
        type: 'error',
    })
    return Promise.reject(error);
})

export default service