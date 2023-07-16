import { createApp } from 'vue'
// 引入Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入windi css框架
import 'virtual:windi.css'
// 引入router
import router from './router'
// 引入store
import { createPinia } from 'pinia'
// 全局注册所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// App.vue
import App from './App.vue'
import './permission'

const app = createApp(App)
const pinia = createPinia()
app.use(ElementPlus)
app.use(router)
app.use(pinia)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
