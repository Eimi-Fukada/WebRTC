import makeRequest from '../httpsRequest'

const method = 'get'

export default {
  '/userInfo': makeRequest<null, { username: string; password: string }>({
    url: '/userInfo',
    method,
  }),
}
