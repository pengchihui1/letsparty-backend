import { useState } from 'react'
import axios from 'axios'
import router from 'next/router'

const New = () => {
    const [value, setValue] = useState('')
    const handleChange = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/api/create_party', {
            headers: { 'Content-Type': 'application/json', Authorization: 'JWT fefege...' },
            data: {
                name: value
            }
        })
            .then(function (response) {
                router.push(`http://localhost:4000/party/${response.data.id}`)
                // console.log('response: ', response.data)
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

export default New
