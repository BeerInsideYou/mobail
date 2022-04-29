import axios from 'axios';

export const base = 'http://szpskov.edu-soft.ru'

export const Api = axios.create({
    validateStatus: function (status) {
        return status === 200 || status === 204;
    },
    defaults: {
        headers: {
            post: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'X1-API-KEY' : 123456789
            }
        }
    }
});

export function x1rpc(service, method, params) {
    return Api.post(`${base}/extjs/direct`, {
        action: 'X1API',
        method: 'direct',
        type: 'rpc',
        data: [{
            method: method,
            params: params,
            service: service
        }]
    }).then(response => response.data.hasOwnProperty('data') ? Promise.resolve(response.data.data) : Promise.reject(response.data.message))
}