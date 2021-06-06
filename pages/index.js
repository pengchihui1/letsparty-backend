import { useState } from 'react'
import useSWR from 'swr'
import Link from 'next/link'
import router from 'next/router'
const Home = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())

  const { data, error } = useSWR('http://localhost:4000/api/get_parties', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  // 渲染数据
  return (
    <div>
      <ul>
        {data?.map(item => {
          return (
            <li key={item.id}><Link href=''>{item.name}</Link></li>
          )
        })}
      </ul>
      <button onClick={() => { router.push('/new') }}>新增</button>

    </div>
  )
}

export default Home
