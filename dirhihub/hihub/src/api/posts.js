import request from './request'

export const getPosts = (params) => {
    return request({
        url: 'posts/list',
        params,
    })
}

export const getPics = (params) => {
    return request({
        url: 'posts/pic',
        params,
    })
}

export const addWebsite = (data) => {
    return request({
        url: 'websites',
        method: 'post',
        data,
    })
}

export const editWebsite = (data) => {
    return request({
        url: `websites/${data.id}`,
        method: 'put',
        data,
    })
}

export const deleteWebsite = (id) => {
    return request({
        url: `websites/${id}`,
        method: 'delete',
    })
}
