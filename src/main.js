import { createApp } from 'vue'
// 引入Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入windi css框架
import 'virtual:windi.css'
// 引入router
import router from './router'
// App.vue
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)

app.use(router)

app.mount('#app')
