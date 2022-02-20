import {login as loginApi} from "@/api/login"
import router from '@/router'

export default {
    namespaced: true,
    state: () => ({
        token: localStorage.getItem('token') || '',
        siderType: true
    }),
    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.setItem('token', token)
        },
        changeSiderType(state) {
            state.siderType = !state.siderType
        }
    },
    actions: {
        login({commit}, userInfo) {
            return new Promise((resolve, reject) => {
                loginApi(userInfo).then(res => {
                    commit('setToken', res.token)
                    router.replace('/')
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        // 退出
        logout({ commit }) {
            commit('setToken', '')
            localStorage.clear()
            router.replace('/login')
        }
    }
}