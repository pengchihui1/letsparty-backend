/**
 * axios 根据官网api默认配置一个axios
 */

import axios from 'axios'

// 创建实例
const instance = axios.create()

// 添加一个请求拦截器
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 添加一个响应拦截器
instance.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default instance
