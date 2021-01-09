import Axios from 'axios'
import React, { useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import './CreateBlog.css'

export default function CreateBlog() {
    let history = useHistory()
    const [blog, setBlog] = useState({
        title: '',
        content: '',
        tags: '',
        cover_img: '',
        author_id: '5fb6407d0be0a24f50001592'
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const onChangeHandler = (e) => {
        setBlog({
            ...blog,
            [e.target.name]: e.target.value
        })
    }

    const onAddTagHandler = (e, value) => {
        if (e.key === ',') {
            e.preventDefault();
            return
        }

        if (e.key !== 'Enter')
            return

        value = value.trim()
        if (value === '')
            return

        setBlog(() => {
            if (blog.tags === '') {
                return { ...blog, tags: value }
            } else {
                return {
                    ...blog,
                    tags: blog.tags + ',' + value
                }
            }
        })

        e.target.value = ''
    }

    const onDeleteTagHandler = (id) => {
        let oldTags = blog.tags.split(',')
        let newTags = oldTags.filter((tag, oid) => (
            oid !== id
        ))
        let newData = newTags.join(',')
        setBlog({
            ...blog,
            tags: newData
        })
    }

    const addFileHandler = async (e) => {
        console.log(e.target.files[0]);
        var file = e.target.files[0]
        if (file) {
            setLoading(true)
            let formData = new FormData()
            formData.append('file', file)
            await Axios.post('/upload', formData)
                .then(data => {
                    console.log(data);
                    setBlog({
                        ...blog,
                        cover_img: data.data.file.filename
                    })
                    setLoading(false)
                })
                .catch(err => {
                    setLoading(false)
                    console.log(err);
                })
        }
    }

    const onCancelHandler = () => {
        console.log('Cancelled');
        history.goBack()
    }

    const onSubmitHandler = () => {
        if (blog.title.trim() === '') {
            setError('Title should not be empty')
            window.scrollTo(0, 0)
            return
        }
        if (blog.content.trim().length < 30) {
            setError('Content should have atleast 30 characters')
            window.scrollTo(0, 0)
            return
        }

        Axios.post('/blog', blog)
            .then(data => {
                console.log(data);
                history.push('/user/blogs')
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="create_blog">
            {
                error
                    ?
                    <div className="error">
                        <div>{error}</div>
                        <div className="close" onClick={() => setError(null)}>X</div>
                    </div>
                    : null
            }

            <div className="form_field">
                <label htmlFor="title">Title</label>
                <input onChange={onChangeHandler} type="text" name="title" id="title" placeholder="Title" />
            </div>

            <div className="hr"></div>

            <div>
                <label htmlFor="">Content</label>
                <textarea onChange={onChangeHandler} name="content" placeholder="Write your beautiful blog here"></textarea>
            </div>

            <div className="hr"></div>

            <label htmlFor="tags">Add Tags</label>
            <input type="text" id="tags" placeholder="Press enter after writing" maxLength="40" onKeyDown={(e) => onAddTagHandler(e, e.target.value)} />

            <div className="tags">
                {
                    blog.tags !== ''
                        ?
                        <>
                            <div style={{ color: "gray", fontSize: "0.8rem", flexBasis: "100%", padding: "1rem" }}>
                                Click on a tag to remove it
                            </div>

                            {
                                blog.tags.split(',').map((tag, i) => (
                                    <div onClick={() => onDeleteTagHandler(i)} className="tag" key={i}>{tag}</div>
                                ))
                            }
                        </>
                        : null
                }
            </div>

            <div className="hr"></div>

            <label htmlFor="file">COVER IMG</label>
            <input type="file" id="file" onChange={addFileHandler} />
            {
                loading
                    ?
                    <div className="loading">
                        <i className='fas fa-circle-notch fa-spin'></i>
                    </div>
                    : null
            }

            <div className="hr"></div>

            <div className="submit_field">
                <button className="cancel" onClick={onCancelHandler}>CANCEL</button>
                <button className="save" onClick={onSubmitHandler}>SAVE</button>
            </div>
        </div>
    )
}
