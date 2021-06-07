import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

const Id = () => {
    const router = useRouter()
    const { id = '' } = router.query
    const [data, setData] = useState("")
    useEffect(() => {
        if (!data) {
            axios.get(`http://localhost:4000/api/get_party?id=${id}`)
                .then((res) => {
                    // console.log(res.data)
                    setData(res.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    })
    const handleSubmitA = (e) => {
        console.log(data?.token)
        e.preventDefault()
        axios.post(`http://localhost:4000/api/edit_party?token=${data?.token}`, {
            headers: { 'Content-Type': 'application/json', Authorization: 'JWT fefege...' },
            data: {
                joy: data.joy + 5
            }
        })
            .then(function (response) {
                setData(response.data)
                console.log('response: ', response.data)
            })
            .catch(err => console.log(err))
    }
    const handleSubmitB = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:4000/api/edit_party?token=${data?.token}`, {
            headers: { 'Content-Type': 'application/json', Authorization: 'JWT fefege...' },
            data: {
                angry: data.angry + 5
            }
        })
            .then(function (response) {
                setData(response.data)
                console.log('response: ', response.data)
            })
            .catch(err => console.log(err))
    }
    const handleSubmitC = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:4000/api/edit_party?token=${data?.token}`, {
            headers: { 'Content-Type': 'application/json', Authorization: 'JWT fefege...' },
            data: {
                sad: data.sad + 5
            }
        })
            .then(function (response) {
                setData(response.data)
                console.log('response: ', response.data)
            })
            .catch(err => console.log(err))
    }
    const handleSubmitD = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:4000/api/edit_party?token=${data?.token}`, {
            headers: { 'Content-Type': 'application/json', Authorization: 'JWT fefege...' },
            data: {
                happy: data.happy + 5
            }
        })
            .then(function (response) {
                setData(response.data)
                console.log('response: ', response.data)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <p>派对名字：{data?.name}</p>
            <p>观看连接：{`http://localhost:4000/party/${data?.id}`}</p>
            <p>编辑连接：
                <Link href={`http://localhost:4000/edit/${data?.token}`}>
                    {`http://localhost:4000/party/${data?.token}`}
                </Link>
            </p>
            <p>四个小不点</p>
            <button onClick={handleSubmitA}>喜{data.joy}</button>
            <button onClick={handleSubmitB}>怒{data.angry}</button>
            <button onClick={handleSubmitC}>哀{data.sad}</button>
            <button onClick={handleSubmitD}>乐{data.happy}</button>
        </div>
    )
}

export default Id