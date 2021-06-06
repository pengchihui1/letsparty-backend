import { useState } from 'react'
import router from 'next/router'

const New = () => {
  const [value, setValue] = useState('')

  function parseJSON(response) {
    return response.json()
  }

  function checkStatus(response) {
    if (response.status >= 200 && response.status < 500) {
      return response
    }
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
  const handleChange = (e) => {
    e.preventDefault()
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:4000/api/create_party', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: value
      }),
      made: 'cors',
      cache: 'default'
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(data => {
        router.push(`/party/${data.id}`)
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>请输入你的派对</label>
        <input type='text' value={value} onChange={handleChange} />
        <input type='submit' value='提交' />
      </form>
      <button onClick={() => { router.push('/') }}>返回</button>
    </div>
  )
}

export default New
