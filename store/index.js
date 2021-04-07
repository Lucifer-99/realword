const  cookieparser  = process.server ? require('cookieparser') : undefined

// 在服务器渲染器件运行的都是同一个实例


export const state = () => {
    return {
        user: null
    }
}


export const mutations = {
    setUser(state, data) {
        state.user = data
    }
}


export const actions = {

    // 特殊的actions 方法 会在服务端期间自动调用 初始化容器数据传递给客户端调用
    nuxtServerInit({
        commit
    }, {
        req
    }) {
        let user = null
        if (req.headers.cookie) {

            // 用cookieparer 把 cookie 字符串转为JavaScript 对象

            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                user = JSON.parse(parsed.user)
            } catch (err) {
                // No valid cookie found
            }
        }
        commit('setUser', user)
    }
}