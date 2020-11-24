import React, {useState, useEffect} from 'react'
import { BlogPostLink } from './cmps/BlogPost';
import { blogPostService } from './services/blogPostsService';
import { Link } from 'react-router-dom'

export const Blog = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const posts = blogPostService.getPosts();
        setPosts(posts);

    },[])


    return (
        <div className="blog">
            <div className="blog-header">
            <h1>Mind Your Code </h1>
            <h2>Web Development Blog</h2>
            </div>

            {posts && <div className="blog-posts">
            {posts.map((post, idx) => <BlogPostLink 
            post={post}
            key={idx}
            />
            )}
            
            </div>}

            <span className="to-site-link"><Link to="/">Check My Site</Link></span>


            <footer>All rights reserved © Adi Aharonov</footer>
        </div>
    )
}
