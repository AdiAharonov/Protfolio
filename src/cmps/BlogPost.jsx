import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export const BlogPostLink = ({ post, pos }) => {
  

    return (
        <Link to={`/blog/${post.url}`} className={`post ${pos}`}> 
            <img src={post.img} alt=""/>
        </Link>
    )
}
