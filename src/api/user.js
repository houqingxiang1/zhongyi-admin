import request from '../utils/request'

export function register(data) {
  return request({
    url: '/admin/register',
    method: 'post',
    data
  })
}
export function login(data) {
    return request({
      url: '/admin/login',
      method: 'post',
      data
    })
  }

