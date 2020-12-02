import axios from 'axios'
// 创建axios实例
const service = axios.create({
  baseURL: 'http://127.0.0.1:8080', // api的base_url
  timeout: 130000 // 请求超时时间
})

service.interceptors.request.use(config => {
  config.headers['Access-Control-Allow-Origin'] = '*'
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
  /**
  * code为非20000是抛错 可结合自己业务进行修改
  */
    const res = response.data
    if (res.code !== 20000) {
      // // 44100:登录失败; 44101:未登录
      // if (res.code === 44100 || res.code === 44101 || res.code === 44103) {
      //   MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
      //     confirmButtonText: '重新登录',
      //     cancelButtonText: '取消',
      //     type: 'warning'
      //   }).then(() => {
      //     const storageKey = 'permissions'
      //     const TokenKey = 'Access-Token'
      //     removeToken(TokenKey)
      //     removeSessionStorage(storageKey)
      //     router.push('/login')
      //     // store.dispatch('FedLogOut').then(() => {
      //     //   location.reload()// 为了重新实例化vue-router对象 避免bug
      //     // })
      //   })
      // }
      return Promise.reject(response.data)
    } else {
      return response.data
    }
  }
)

export default service
