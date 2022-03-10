import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";

// 创建pinia实例
const pinia = createPinia()

const app = createApp(App)
app.use(pinia) // pinia挂载到 vue 根实例
.mount('#app')
