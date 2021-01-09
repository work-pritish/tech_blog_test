import Axios from 'axios'
import React, { useState } from 'react'
import './Blog.css'

export default function Blog({ blog, author }) {

    const [comments, setComments] = useState(null)

    const onShowComments = () => {
        Axios.get(`/comment/blog/${blog._id}`)
            .then(data => {
                console.log(data.data.comments);
                setComments(data.data.comments)
            })
            .catch(err => {
                console.log(err);
            })
    }

    const onHideComments = () => {
        setComments(null);
    }

    return (
        <div className="blog_container">
            <div className="blog_head">
                <div className="blog_cover">
                    <img src={blog.cover_img}/>
                </div>
                <div className="blog_title">
                    {blog.title}
                </div>
                <div className="blog_author">
                    Author : {author.first_name} {author.last_name}
                    <div className="blog_date">
                        Date : 1/1/20
                    </div>
                </div>
                
            </div>
            <div className="blog_body">
                <div className="blog_content">
                    {blog.content}
                </div>
                <div className="blog_tags">
                    Tags : {blog.tags}
                </div>
                <div className="blog_comments">
                    {
                        comments
                            ? <div onClick={onHideComments} className="show_comments"> <i className="far fa-comments"></i> Hide Comments </div>
                            : <div onClick={onShowComments} className="show_comments"> <i className="far fa-comments"></i> Show Comments </div>
                    }
                    {
                        comments
                            ?
                            comments.map((comment, id) => {
                                return <div key={id} className="comment">
                                    {comment.content}
                                </div>
                            })
                            : null
                    }
                </div>
            </div>
        </div>
    )
}
