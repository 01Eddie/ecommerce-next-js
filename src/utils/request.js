import { APIURL } from '@/global'
import axios from 'axios'


export const http = function () {
    // _source = axios.CancelToken.source()

    const instance = axios.create({
        baseURL: 'http://localhost:3000'
    })
    const jwt = Cookies.get('token')

    if (jwt) instance.defaults.headers.common['Authorization'] = `Bearer ${jwt}`

    return instance
}

export function Get(route) {
    return new Promise((resolve, reject) => {
        http()
            .get(route)
            .then((res) => {
                resolve(res.data)
            })
            .catch((e) => {
                reject(e)
            })
    })
}

export function Post(route, json = {}) {
    return new Promise((resolve, reject) => {
        verifyRequestCancel(route)
        http()
            .post(route, json)
            .then((res) => {
                _source = undefined
                beforeRoute = undefined
                resolve(res.data)
            })
            .catch((e) => {
                reject(e)
            })
    })
}

export function Put(route, json = {}) {
    return new Promise((resolve, reject) => {
        http()
            .put(route, json)
            .then(res => {
                resolve(res.data)
            })
            .catch(e => {
                reject(e)
            })
    })
}

export function Delete(route, json = {}) {
    return new Promise((resolve, reject) => {
        http()
            .delete(route, { data: json })
            .then(res => {
                resolve(res.data)
            })
            .catch(e => {
                reject(e)
            })
    })
}