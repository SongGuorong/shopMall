import {defineStore} from 'pinia'

export const useUserInfoStore = defineStore('userInfo', {
    state: () => {
        return {
            // 用户信息
            user: {},
        }
    },
    actions: {
        setUserInfo(userInfo) {
            this.user = userInfo
        }
    }
})