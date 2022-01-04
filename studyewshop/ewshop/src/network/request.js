import axios from "axios";

export function request(config){
    const instance = axios.create({
        baseURL: 'https://api.shop.eduwork.cn',
        timeout: 5000
    })

    // 请求拦截
    instance.interceptors.request.use(config => {
        // 如果有一个接口需要认证才可以访问，就在这里统一配置

        // 直接放行
        return config;
    }, error => {

    })
    // 响应拦截
    instance.interceptors.response.use(res=>{
        return res;
    }, error => {
        // 如果需要授权才可以访问的接口，统一去login授权

        // 如果有错误，就在这里面处理，显示错误信息

    })

    return instance(config);
}