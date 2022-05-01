import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1 请求拦截
  instance.interceptors.request.use( config => {
    return config
  }), err => {
    console.log(err)
  }
  // 2.2 响应拦截
  instance.interceptors.response.use( res => {
    return res.data
  }), err => {
    console.log(err)
  }

  // 3. 发生真正的网络请求
  // 注：返回的数据是一个promise，其他地方可以直接 .then 的形式接收数据
  return instance(config)
}