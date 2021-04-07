/**
 * 
 * 基于 axios 封装的请求模块
 *
 */

import axios from 'axios'

export const request = axios.create({
    baseURL: 'https://conduit.productionready.io'
})

// 通过插件机制 获取到上下文对象{query，params，req，res，app，store}  插件导出成员必须default
export default ({
    store
}) => {
    // Add a request interceptor
    request.interceptors.request.use(function (config) {
        // Do something before request is sent
        // 正确
        const {
            user
        } = store.state
        if (user && user.token) {
            config.headers.Authorization = `Token ${user.token}`
        }
        return config;
    }, function (error) {
        // Do something with request error
        // 如果请求没发出去就失败
        return Promise.reject(error);
    });
    // 响应拦截器

}
// 请求拦截器