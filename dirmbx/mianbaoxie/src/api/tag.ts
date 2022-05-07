import request from './request'

export const getTag = (params) => {
    return request({
        url: 'tag',
        params,
    })
}
