import React, {useEffect, useState} from 'react'
import { blogPostService } from '../services/blogPostsService';
import { ReactComponent as BlogHeader } from '../assets/images/blog/blog-header.svg';


export const BlogPostPage = () => {

    const [post, setPost] = useState({})

    useEffect(() => {
        const currPost = blogPostService.getPostByUrl(window.location.pathname.slice(6, window.location.pathname.length));
        setPost(currPost);
    }, [])


    return (
        <div className="blog-post-page">
            
            <div className="blog-header">
            <BlogHeader />
            </div>

            <div className="post-page-content">

            {post && <h1>{post.header}</h1>}
    {post.contentArr && post.contentArr.map((p, idx) => {
        // p.type === 'h' ? <h2 key={idx}>{p.content}</h2> : <p key={idx}>{p.content}</p>
        if (p.type === 'h') {
            return <h2 key={idx}>{p.content}</h2>
        } else if (p.type === 'p') {
            return <p key={idx}>{p.content}</p>
        } else if (p.type === 'h2') {
            return <h3 key={idx}>{p.content}</h3>
        } else if (p.type === 'file-source') {
            return <p className="file-source" key={idx}>{p.content}</p>
        } else if (p.type === 'link') {
            return <p key={idx}><a className="post-link" href={p.source}>{p.content}</a></p>
        } else if (p.type === 'code-block') {
            return <p key={idx} className="code-block" >{p.content}</p>
        }
        })}
    </div>

    <footer>All rights reserved © Adi Aharonov</footer>
        </div>
    )
}
