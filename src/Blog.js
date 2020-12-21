import React, {useState, useEffect} from 'react'
import { Carousel } from './cmps/StyledCmps/Carousel';
import { blogPostService } from './services/blogPostsService';
import { Link } from 'react-router-dom'
import { ReactComponent as BlogHeader } from './assets/images/blog/blog-header.svg';


export const Blog = () => {

    const [posts, setPosts] = useState([]);
  


    useEffect(() => {
        const posts = blogPostService.getPosts();
        setPosts(posts);
    },[])

   

    return (
        <div className="blog">
            <div className="blog-header">
            <BlogHeader />
            </div>


            {posts && <Carousel posts={posts}/>}


            <span className="to-site-link"><Link to="/">CHECK MY SITE</Link></span>


            <footer>All rights reserved © Adi Aharonov</footer>
        </div>
    )
}
