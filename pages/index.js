import { useEffect, useState } from 'react'
import http from './http'
const Home = () => {
  // const query = 'word'// 取输入框的val
  // const q = encodeURIComponent(query)// 编码UTF-8
  const [data, setData] = useState('')
  useEffect(() => {
    // let timeoutURL = ''
    // if (data) {
    //   clearTimeout(timeoutURL)
    //   timeoutURL = setTimeout(() => {
    //     http.get('/api/get_word', { params: { q: data } })
    //       .then((res) => {
    //         console.log(res)
    //       })
    //       .catch((error) => {
    //         console.log(error)
    //       })
    //   }, 500)
    // }
    // if (!data) {
    http.get('/api/get_word', { params: { q: data } })
      .then((res) => {
        console.log(res.data.trans_result)
      })
      .catch((error) => {
        console.log(error)
      })
    // }
  }, [data])
  return (
    <textarea onChange={(e) => { setData(e.target.value) }} />
  )
}
export default Home
