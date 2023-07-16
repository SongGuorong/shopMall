import { getToken } from '~/composables/auth'
import { toast } from '~/composables/toast'
import router from '~/router'
import { useUserInfoStore } from '~/store/index'

router.beforeEach(async (to, from, next) => {
    const token = getToken()

    // 未登录,强制回登录页
    if (!token && to.path != "/login") {
        toast("请先登录", "error")
        return next({ path: "/login" })
    }

    // 避免重复登录
    if (token && to.path == "/login") {
        toast("请勿重复登录", "error")
        return next({ path: from.path ? from.path : "/" })
    }

    // 如果用户登录了就保存登录信息
    if (token) {
        // 获取用户权限信息
        const userInfoStore = useUserInfoStore()
        userInfoStore.getUserInfo()
    }

    next()
})