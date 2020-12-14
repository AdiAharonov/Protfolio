import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export const BlogPostLink = ({ post, pos }) => {
  
    // useEffect(() => {
    //     console.log(post)
    // }, [])

    return (
        <Link to={`/blog/${post.url}`} className={`post ${pos}`}> 
            <img src={post.img} alt=""/>
            <h3>{post.header}</h3>
        </Link>
    )
}
