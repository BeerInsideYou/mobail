import { Api } from './Api'
import  AsyncStorage  from 'react-native';

const appkey = 'Pfobnybr2022>'

const base = 'http://integrics.ru:8944'

export function auth (login, password) {
  return Api.get(`${base}/auth?appkey=${appkey}&login=${login}&passwd=${password}`)
    .then(response => {
      if (response.data.sid)
        AsyncStorage.setItem('x1sso', response.data.sid)
        if (response.data.login) {
            let userdata = {
              username: response.data.login,
              role: []
            }
            if (response.data.membership) {
              response.data.membership.map(item => { userdata.role.push(item.groupfk) })
            }
            AsyncStorage.setItem('user', userdata.username)
            AsyncStorage.setItem('role', JSON.stringify(userdata.role))
            return Promise.resolve(userdata)
        }
        return Promise.reject(response)
    }).catch(error => {
      return Promise.reject(new Error(error.data))
    })
}

export function authBySso () {
  const sso = AsyncStorage.getItem('x1sso')
  return Api.post(`${base}/session/get?appkey=${appkey}`, {sid: sso, membership: 1}).then(response => {
    let userdata = {
      username: response.data.data.login,
      role: []
    }
    if (response.data.data.membership) {
      response.data.data.membership.map(item => { userdata.role.push(item.groupfk) })
    }
    return Promise.resolve(userdata)
  }).catch(error => {
    return Promise.reject(new Error(error.data))
  })
}

export function createUser (login, password, email = null, confirm = false) {
  let data = {
    login: login,
    x_passwd: password
  }
  if (email) {
    data['email'] = email
  }
  if (confirm) {
    data['confirm'] = true
  }
  return Api.post(`${base}/user/register?appkey=${appkey}`, data)
}
