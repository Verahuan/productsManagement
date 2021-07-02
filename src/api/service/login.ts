import { request } from 'umi'
/**
 * 用户登录
 * @param data
 */
export async function fetchLogin(data) {
  return request('/api/users/login', {
    method: 'POST',
    data
  })
}

/**
 * 退出登录
 * @param data
 */
export async function fetchLogout() {
  return request('/api/user/logout', {
    method: 'POST',
  })
}

/**
 * 用户注册
 * @param data
 */
export async function fakeRegister(data: any) {
  return request('/api/user/register', {
    method: 'POST',
    data
  })
}
