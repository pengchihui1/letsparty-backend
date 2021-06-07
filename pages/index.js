import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import router from 'next/router'

const Home = () => {
  const [data, setData] = useState()
  useEffect(() => {
    if (!data) {
      axios.get('http://localhost:4000/api/get_parties')
        .then((res) => {
          console.log(res.data)
          setData(res.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [data])

  return (
    <div>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th className='text-center'>id</th>
            <th className='text-center'>createdAt</th>
            <th className='text-center'>token</th>
            <th className='text-center'>name</th>
            <th className='text-center'>joy</th>
            <th className='text-center'>sad</th>
            <th className='text-center'>happy</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((party) => {
            return (
              <tr key={party.id}>
                <th className='text-center'>{party.id}</th>
                <th className='text-center'>{party.createdAt}</th>
                <th className='text-center'>{party.id}</th>
                <th className='text-center'>{party.name}</th>
                <th className='text-center'>{party.joy}</th>
                <th className='text-center'>{party.sad}</th>
                <th className='text-center'>{party.happy}</th>
              </tr>
            )
          })}
        </tbody>
      </table>
      <button onClick={()=>{
router.push('/new')
      }}>
      新增
      </button>
    </div>
  )
}

export default Home
