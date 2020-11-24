const gPosts = [{header: "Roadmap To Web Development", paragraphArr: ["This beginner's roadmap lays out all the basics for web development. We’re going to go through each step–from figuring out what code editor to use, to what JavaScript framework or back-end language you can pick up. And we’ll also include links to resources where you can learn these skills.", "The fact is, if you’re just starting out, all you need to know right now are the basics. You really don’t need to know every single technology, tool, or language in existence right from the get-go. (You’ll cross that bridge when you come to it, believe me!)", "By the end of this guide, you’ll have an understanding of the basics of web development, what skills you need to know, and where to find them!", "1: What is web development?", "Before we get into actual coding, let’s first take a look at some general information on what web development is: how websites work, the difference between front and back-end, and using a code editor." ], url: "roadmap-to-web-development"},
{header: "JavaScript Job Interview", paragraphArr: ["In the years since I wrote this article, a lot has changed. When I wrote it, lots of developers were coming to JavaScript from languages like Java and C++, lacking any understanding of how objects work in JavaScript, and trying to apply obsolete patterns, such as deeply layered inheritance hierarchies.", "Thanks in part to warnings from influential software developers and framework authors (particularly the authors of React, who wisely listened to the warnings and encouraged better alternatives such as higher order components and React hooks for idiomatic React), the trend of overusing class inheritance in JavaScript has mostly died. And it’s missed by nobody.", "Ask the candidate to build a click counter using any popular framework (React preferred in 2020). This ridiculously simple app has one job: keep track of how many times the user has clicked the button during the current session. No storage. No network I/O. Just count clicks. It is intentionally ridiculously simple: We’re not trying to stump the developer — we’re just trying to verify that they know how to code. I prefer to do this in a pair programming session via a remote Zoom meeting — no use flying a candidate to some office just to watch them code."], url: "js-job-interview"},
 {header: "Testing", paragraphArr: [], url: "testing"},
 ];

const getPostByUrl = (path) => {
    const currPost = gPosts.find(post => post.url === path);
    return currPost
}

const getPosts = () => {
    return gPosts;
}

export const blogPostService = {
    getPostByUrl,
    getPosts
}