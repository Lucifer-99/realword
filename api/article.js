import {
    request
} from "@/plugins/request"

// 获取公共的文章列表

export const getArticles = params => {
    return request({
        method: "GET",
        url: "/api/articles",
        params
    });
}

// /api/articles/feed
// 获取关注的的文章列表export const getArticles = params => {
export const getFeedArticles = params => {
    return request({
        method: "GET",
        url: "/api/articles/feed",
        params
    });
}

// 增加点赞
export const addArticles = slug => {
    return request({
        method: "POST",
        url: `/api/articles/${slug}/favorite`,
    });
}

// 删除点赞
export const deleteArticles = slug => {
    return request({
        method: "DELETE",
        url: `/api/articles/${slug}/favorite`,
    });
}
// 获取详情
export const getArticle = slug => {
    return request({
        method: "GET",
        url: `/api/articles/${slug}`,
    });
}
// 获取文章评论
export const getComments = slug => {
    return request({
        method: "GET",
        url: `/api/articles/${slug}/comments`,
    });
}