import posts from '../Posts.json';


const getPostByUrl = (path) => {
    const currPost = posts.find(post => post.url === path);
    return currPost
}

const getPosts = () => {
    return posts;
}

export const blogPostService = {
    getPostByUrl,
    getPosts
}