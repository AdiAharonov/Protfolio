const gPosts = [
{header: "JavaScript Job Interview (Junior)", paragraphArr: [{type: 'p', content: "So you're a highly motivated new web developer ready to get your first real opportunity in a real world job. Maybe you just finished a coding boot camp of some sort or even you've learned all by yourself through the power of the internet (If that's the case I would recommend looking into Maximilian's course at udemy.com). Either way, you feel ready to land your first real web developing position. If that's the case then you're just like me. So in this article, I'll do my best to help you get your first job, From outputting your resume among others to being ready to pass the job interview."}, {type: 'p', content: "So here are the things I've learned so far:  "}, {type: 'h', content: "1) Getting real experience."}, {type: 'p', content: "After getting rejected by many companies and opportunities without even getting to the interview stage, I've contacted some of the recruiter's in my connections at LinkedIn (we'll talk about building your LinkedIn page later, but here's a good example of why you need it.), And asked them what's the reason I'm being rejected all the time and the majority of them said it's 'The lack of real experience'.  When they write in the job post at the requirements section number of experience years (For example 1-2 years of experience) they mean in a real product. One that's being used by real users and shows how you collaborate with other people in a real team."}], url: "js-job-interview"},
 {header: "Testing", paragraphArr: [], url: "testing"},
 {header: "Test Driven Development - TDD", paragraphArr: [], url: "tdd"},
 {header: "Open Source", paragraphArr: [], url: "open-source"},
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