import React, {useState, useEffect} from 'react'
import { ReactComponent as ArrowBtn } from '../../assets/images/arrow-btn.svg';
import { BlogPostLink } from '../BlogPost';

export const Carousel = ({posts}) => {

    const [currPostIdx, setCurrPostIdx] = useState(2);
    const [nextPostIdx, setNextPostIdx] = useState(3);
    const [prevPostIdx, setPrevPostIdx] = useState(1);



const next = () => {
    if (currPostIdx === (posts.length - 2)) {
        setCurrPostIdx(currPostIdx + 1);
        setNextPostIdx(0);
        setPrevPostIdx(prevPostIdx + 1);
    }
    else if (currPostIdx === (posts.length - 1)) {
        setCurrPostIdx(0);
        setPrevPostIdx(prevPostIdx + 1)
        setNextPostIdx(nextPostIdx + 1)
    } else if (currPostIdx === 0) {
        setCurrPostIdx(currPostIdx + 1)
        setPrevPostIdx(0)
        setNextPostIdx(nextPostIdx + 1)
    } else {
        setCurrPostIdx(currPostIdx + 1)
        setPrevPostIdx(prevPostIdx + 1)
        setNextPostIdx(nextPostIdx + 1)
    }
    
}

const prev = () => {
    if (currPostIdx === 1) {
        setCurrPostIdx(currPostIdx - 1);
        setNextPostIdx(nextPostIdx - 1);
        setPrevPostIdx(posts.length - 1);
    }
    else if (currPostIdx === 0) {
        setCurrPostIdx(posts.length - 1);
        setPrevPostIdx(prevPostIdx - 1)
        setNextPostIdx(nextPostIdx -1)
    } else if (currPostIdx === (posts.length - 1)) {
        setCurrPostIdx(currPostIdx - 1)
        setPrevPostIdx(prevPostIdx - 1)
        setNextPostIdx(posts.length - 1)
    } else {
        setCurrPostIdx(currPostIdx - 1)
        setPrevPostIdx(prevPostIdx - 1)
        setNextPostIdx(nextPostIdx - 1)
    }
}


    return (
        <div className="carousel">
        <ArrowBtn className="left" onClick={() => prev()}/>
        {posts[0] && <div>
        {window.innerWidth > 720 && <BlogPostLink post={posts[prevPostIdx]} />}
        <BlogPostLink post={posts[currPostIdx]} pos={'center'}/>
        {window.innerWidth > 720 && <BlogPostLink post={posts[nextPostIdx]} />}
        </div>}
        <ArrowBtn className="right" onClick={() => next()}/>
    </div>
    )
}
