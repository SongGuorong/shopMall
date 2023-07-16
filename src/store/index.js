import { defineStore } from 'pinia'
import { getInfo, login } from '~/api/manager'
import { setToken } from '~/composables/auth'

export const useUserInfoStore = defineStore('userInfo', {
    state: () => {
        return {
            // 用户信息
            user: {},
        }
    },
    getters: {
    },
    actions: {
        setUserInfo(userInfo) {
            this.user = userInfo
        },
        // 获取当前用户登录信息
        getUserInfo() {
            return new Promise((resolve, reject) => {
                getInfo().then(res => {
                    this.setUserInfo(res)
                    resolve(res)
                }).catch(err => reject(err))
            })
        },
        login({ username, password }) {
            return new Promise((resolve, reject) => {
                login(username, password).then(res => {
                    setToken(res.token)
                    resolve(res)
                }).catch(err => reject(err))
            })
        }
    }
})