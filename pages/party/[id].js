import useSWR from 'swr'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Id = () => {
    const router = useRouter()
    const { id = '' } = router.query
    const fetcher = (...args) => fetch(...args).then((res) => res.json())
    const { data, error } = useSWR(`/api/get_party?id=${id}`, fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

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

    const handleChangeA = (e) => {
        e.preventDefault()
        console.log(data.token)
        fetch(`/api/edit_party?token=${data.token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                joy: data.joy + 1
            })
        })
    }

    const handleChangeB = (e) => {
        e.preventDefault()
        fetch(`/api/edit_party?token=${data.token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                angry: data.angry + 1
            })

        })
            .then(checkStatus)
            .then(parseJSON)
            .then(data => {
                console.log("怒")
            })
    }

    const handleChangeC = (e) => {
        e.preventDefault()
        fetch(`/api/edit_party?token=${data.token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sad: data.sad + 1
            })

        })
            .then(checkStatus)
            .then(parseJSON)
            .then(data => {
                console.log("哀")
            })
    }

    const handleChangeD = (e) => {
        e.preventDefault()
        fetch(`/api/edit_party?token=${data.token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                happy: data.happy + 1
            })

        })
            .then(checkStatus)
            .then(parseJSON)
            .then(data => {
                console.log("乐")
            })
    }
    return (
        <div>
            <p>派对名称：{data.name}</p>
            <p>观看连接：{`/api/get_party?id=${router.query.id}`} </p>
            <p>编辑派对{data.name}</p>
            <p>连接：
                <Link href={`/edit/${data.token}`}>
                    {`http://localhost:4000/edit?token=${router.query.token}`}
                </Link>
            </p>
            <p>喜怒哀乐 </p>
            <button onClick={handleChangeA}>喜<span>{data.joy}</span></button>
            <button onClick={handleChangeB}>怒<span>{data.angry}</span></button>
            <button onClick={handleChangeC}>哀<span>{data.sad}</span></button>
            <button onClick={handleChangeD}>乐<span>{data.happy}</span></button>
        </div>
    )
}

export default Id