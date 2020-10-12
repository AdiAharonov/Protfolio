import React, { useRef, useEffect, useState } from 'react';
import Typical from 'react-typical';
import { useSpring, animated } from 'react-spring'
import { ReactComponent as Bg } from "../assets/images/2.svg";
import SvgLines from 'react-mt-svg-lines'; 


const calc = (x, y) => [x - window.innerWidth / 2, y + window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`
  


export function LandingPage() {

const [header, setHeader] = useState(0);
const [subHeader, setSubHeader] = useState(0);
const [content, setContent] = useState(0);
const [sentence, setSentence] = useState(0);


useEffect(() => {
window.scrollTo(window.innerWidth, window.innerHeight)
setTimeout(() => setHeader(100), 2000)
setTimeout(() => setSubHeader(100), 4000)
setTimeout(() => setContent(100), 6000)
setTimeout(() => setSentence(100), 8000)
}, [])

  // paralax effect

  const onClick = () => {
    window.location.href = `mailto:adi.ahronov@gmail.com`;
}

const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
    <div className="landing" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <div className="content" >


      <h3 className="name" style={{opacity: header, transition: "opacity 0.6s ease-in"}}>Hi, my name is Adi Aharonov.</h3>
      <h3 style={{opacity: subHeader, transition: "opacity 0.6s ease-in"}}>I build things for the web.</h3>
      <p className="sentence" style={{opacity: content, transition: "opacity 0.6s ease-in"}}>
        I'm a Full-Stack web developer specializing in
      building (and occasionally designing) exceptional websites, applications, and everything in between.
        
        
      </p>
      
     <div className="row " style={{opacity: sentence, transition: "opacity 0.6s ease-in"}}>
     <p>I like to keep my code </p>
     <Typical
      steps={[' clean.', 2000, ' short.', 2000, '  reusable.', 2000]}
      loop={Infinity}
      wrapper="span"
    /></div>
     {/* <Typical
      steps={[" I'm a Full-Stack web developer specializing in building (and occasionally designing) exceptional websites, applications, and everything in between. I like to keep my code", 40000]}
      wrapper="p"
     />
       */}
      </div>
      
     
     {/*
      
      <button onClick={onClick} className="resume-btn">Get In Touch</button> */}

      {/* parallax effect*/}
{/* 
      <animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }} />
      <animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />
      <animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />
      <animated.div className="card4" style={{ transform: props.xy.interpolate(trans4) }} /> */}

<SvgLines animate={ true } duration={ 6000 }>
<Bg  width={window.innerWidth} height={window.innerHeight} />

      </SvgLines>

      <button className="mainframe-btn" style={{top: "50%", left: "10%"}} onClick={() => window.scrollTo(0, window.innerHeight)}>About</button>
      <button className="mainframe-btn" style={{top: "5%", left: "45%"}} onClick={() => window.scrollTo(window.innerWidth, 0)}>Skills</button>
      <button className="mainframe-btn" style={{right: "10%", top: "50%"}} onClick={() => window.scrollTo(window.innerWidth * 2, window.innerHeight)}>Work</button>
      <button className="mainframe-btn" style={{left: "45%", bottom: "5%"}} onClick={() => window.scrollTo(window.innerWidth, window.innerHeight * 2)}>Contact</button>
     
    </div>
  );
}
