import { useCookies } from "@vueuse/integrations/useCookies"
const tokenKey = 'admin-token'
const cookies = useCookies()

// 获取token
export function getToken() {
    return cookies.get(tokenKey)
}

// 设置token
export function setToken(token) {
    return cookies.set(tokenKey, token)
}

// 清除token
export function removeToken() {
    return cookies.remove(tokenKey)
}
