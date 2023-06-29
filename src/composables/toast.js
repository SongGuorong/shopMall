import { ElNotification } from 'element-plus'

// 消息提示
export function toast(message, type='success', offset=20, dangerouslyUseHTMLString=false) {
    ElNotification({
        message,
        offset,
        duration: 3000,
        type,
        dangerouslyUseHTMLString
      })
}
