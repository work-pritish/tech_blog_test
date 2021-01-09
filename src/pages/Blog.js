import Axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Blog from '../components/Blog/Blog'

export default function BlogPage() {
    const { id } = useParams();
    const [data, setData] = useState(null)

    useEffect(() => {

        Axios.get(`/blog/${id}`)
            .then(res => {
                console.log(res);
                setData(res.data)
            })
            .catch(err => {
                console.log(err);
            })

    }, [])

    return (
        <div>
            {
                data
                    ? <Blog blog={data.blog} author={data.author} />
                    : null
            }
        </div>
    )
}
