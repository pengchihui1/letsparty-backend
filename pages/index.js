import { useEffect, useState } from 'react'
import http from './http'
const Home = () => {
  const query = 'word'// 取输入框的val
  const q = encodeURIComponent(query)// 编码UTF-8
  const [data, setData] = useState('')
  useEffect(() => {
    if (!data) {
      http.get('/api/get_word', { params: { q } })
        .then((res) => {
          console.log(res)
          setData(res.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [data])
  return (
    <div>123456</div>
  )
}
export default Home
