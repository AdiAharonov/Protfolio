import React from 'react';
import RealImage from '../assets/images/about/real.png';
import AnimatedImage from '../assets/images/about/animated.png';
import { ReactComponent as ArrowBtn } from '../assets/images/arrow-btn.svg';

export function About({ mode }) {
  return (
    <div className="about" name="about">
      {mode && (
        <div className="img-container">
          <img className="real-img" src={RealImage} alt="" />
          <img className="animated-img" src={AnimatedImage} alt="" />
        </div>
      )}
      {!mode && (
        <div className="img-container">
          <img className="" src={RealImage} alt="" />
        </div>
      )}

      <div className="header-area">
        <h3 className="header">Who is this guy?</h3>
        <h4 className="motto">
          {' '}
          <span>
            "Just tell me what you want, I'll find the best way to do it."
          </span>
        </h4>
      </div>

      <div className="content">
        <p>
          Passionate freelance web developer with a strong appeal to the
          front-end side of the web. I enjoy building amazing websites and rich
          interactive web apps, especially with react and typescript.
        </p>
      </div>

      <div className="center-btn" onClick={() => window.scrollTo(window.innerWidth, window.innerHeight)}>
        <button
          style={
            mode
              ? { color: '#fff', transform: 'rotate(90deg)' }
              : { color: '#222', transform: 'rotate(90deg)' }
          }
          
        >
          {mode ? 'Explore' : 'Back'}
        </button>
        <ArrowBtn fill={mode ? '#fff' : '#222'} />
      </div>
    </div>
  );
}
