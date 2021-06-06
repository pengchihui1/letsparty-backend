import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'

const New = () => {
    const router = useRouter()
    const { token = '' } = router.query
    const [value, setValue] = useState('')

    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data, error } = useSWR(`http://localhost:4000/api/get_party?token=${token}`, fetcher)

    useEffect(() => {
        if (data && data.name) {
            setValue(data.name)
        }
    }, [data])

    const handleChange = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:4000/api/edit_party?token=${token}`, {
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
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>编辑你的派对</label>
                <input type='text' value={value} onChange={handleChange} />
                <input type='submit' value='提交' />
            </form>
            <button onClick={() => { router.push('/') }}>返回</button>
        </div>
    )
}

export default New
