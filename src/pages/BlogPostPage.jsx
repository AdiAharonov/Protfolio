import React, {useEffect, useState} from 'react'
import { blogPostService } from '../services/blogPostsService';


export const BlogPostPage = () => {

    const [post, setPost] = useState({})

    useEffect(() => {
        const currPost = blogPostService.getPostByUrl(window.location.pathname.slice(6, window.location.pathname.length));
        setPost(currPost)
    }, [])


    return (
        <div className="blog-post-page">
            {post && <h1>{post.header}</h1>}
    {post.paragraphArr && post.paragraphArr.map((p, idx) => <p key={idx}>{p}</p>)}
        </div>
    )
}
