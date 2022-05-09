import request from './request.js'

export const getTags = () => {
    return request({
        url: 'api/tags',
    })
}
