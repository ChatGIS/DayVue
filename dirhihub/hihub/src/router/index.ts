import { createRouter, createWebHashHistory } from 'vue-router'
import Resource from '../views/posts/index.vue'
import My from '../views/my/index.vue'

const routes = [
    { path: '/', component: Resource, meta:{keepAlive:true} },
    { path: '/resource', component: Resource , meta:{keepAlive:true}},
    { path: '/my', component: My },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
