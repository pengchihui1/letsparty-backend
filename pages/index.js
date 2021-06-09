import { useEffect } from 'react'
import Md5 from './md5.min'
const Home = () => {
  const appid = '20210601000849775'
  const key = 'uBb7ZcKZjtJ1aFQsWARw'
  const from = 'auto'
  const to = 'auto'
  const query = 'word'// 取输入框的val
  const q = encodeURIComponent(query)// 编码UTF-8
  const salt = (new Date()).getTime()
  const str1 = appid + query + salt + key// 秘钥
  const sign = Md5(str1)// md5加密
  useEffect(() => {

  }, [])
  return (
    123456
  )
}
export default Home
