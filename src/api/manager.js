import axios from '~/axios'

// 注意不要丢掉export，表示外部模块可以引入该方法
export function login(username, password) {
    return axios.post('/admin/login', {
        username,
        password
    })
}

export function getInfo() {
    return axios.post('/admin/getinfo')
}