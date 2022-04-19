import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import './assets/styles/index.css'

// 创建pinia实例
const pinia = createPinia()

const app = createApp(App)
app.use(pinia) // pinia挂载到 vue 根实例
    .use(router)
    .mount('#app')
