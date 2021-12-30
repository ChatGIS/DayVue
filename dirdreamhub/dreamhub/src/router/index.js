import {createRouter, createWebHistory} from "vue-router"
import User from "../views/User"
import Web from "../views/Web";

const routes = [
    {
        path: '/user',
        name: "user",
        component: User
    }, {
        path: '/web',
        name: "web",
        component: Web
    },

]
export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router