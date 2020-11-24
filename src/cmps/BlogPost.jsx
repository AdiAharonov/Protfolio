import React from 'react'
import { Link } from 'react-router-dom'

export const BlogPostLink = ({ post }) => {
    return (
        <div className="post">
            <Link to={`/blog/${post.url}`}><h3>{post.header}</h3></Link>
        </div>
    )
}
