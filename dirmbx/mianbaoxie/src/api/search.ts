import request from './request.js'

export const addSearchLog = (data) => {
    return request({
        url: 'search',
        method: 'post',
        data,
    })
}
