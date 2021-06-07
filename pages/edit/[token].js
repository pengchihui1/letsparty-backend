import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

const Token = () => {
    const router = useRouter()
    const { token = '' } = router.query
    // console.log(router.query)
    const [value, setValue] = useState("")
    useEffect(() => {
        if (!value) {
            axios.get(`http://localhost:4000/api/get_party?token=${token}`)
                .then((res) => {
                    setValue(res.data.name)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    })
    const handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:4000/api/edit_party?token=${token}`, {
            headers: { 'Content-Type': 'application/json', Authorization: 'JWT fefege...' },
            data: {
                name: value
            }
        })
            .then(function (response) {
                router.push(`http://localhost:4000/`)
                console.log('response: ', response)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>   名字:
              <input type='text' value={value} onChange={handleChange} />
                </label>
                <input type='submit' value='提交' />
            </form>
            <button onClick={() => {
                router.push('/')
            }}
            >返回
        </button>
        </div>
    )
}

export default Token