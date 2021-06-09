import axios from 'axios'
import Cors from 'cors'
import initMiddleware from '../lib/init-middleware'

// axios.defaults.baseURL = 'http://api.fanyi.baidu.com/api/trans/vip/translate'
axios.defaults.withCredentials = true
axios.defaults.timeout = 100000
// axios.defaults.headers = { 'Content-Type': 'application/json;charset=UTF-8' }
// axios.defaults.responseType = 'jsonp'

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS']
  })
)

const http = {
  post: '',
  get: '',
  put: '',
  del: ''
}

http.post = function (api, data) {
  // const params = JSON.stringify(data)
  const params = data
  return new Promise((resolve, reject) => {
    axios.post(api, params).then(res => {
      resolve(res)
    })
  })
}

http.get = async function (api, data) {
  // const params = JSON.stringify(data)
  const params = data
  return await new Promise((resolve, reject) => {
    axios.get(api, params).then(res => {
      resolve(res)
    })
  })
}
http.delete = function (api, data) {
  return new Promise((resolve, reject) => {
    axios.delete(api, data).then(response => {
      resolve(response)
    })
  })
}

http.put = function (api, data) {
  return new Promise((resolve, reject) => {
    axios.put(api, data).then(response => {
      resolve(response)
    })
  })
}
export default http
