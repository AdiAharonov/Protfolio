import posts from '../Posts.json';
import jsJobInterview from '../assets/images/blog/js-job-interview.svg';
import tdd from '../assets/images/blog/tdd.svg';
import openSource from '../assets/images/blog/open-source.svg';
import webAppTesting from '../assets/images/blog/web-app-testing.svg';


const getPostByUrl = (path) => {
    const currPost = posts.find(post => post.url === path);
    if (currPost) return currPost;
    else return { "header": "404: not found"}
}

const getPosts = () => {
   return attachImagesToPosts(posts)
}

const attachImagesToPosts = (posts) => {
posts.forEach(post => {
    if (post.url === 'js-job-interview') post.img = jsJobInterview;
    if (post.url === 'testing') post.img = webAppTesting;
    if (post.url === 'tdd') post.img = tdd;
    if (post.url === 'open-source') post.img = openSource;
});
return posts;
}

export const blogPostService = {
    getPostByUrl,
    getPosts
}