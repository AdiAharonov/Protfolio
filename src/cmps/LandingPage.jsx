import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { ReactComponent as SpaceShip } from '../assets/images/spaceship.svg';
import { StarsAnimation } from './StyledCmps/StarsAnimation';
import { ToggleBtn } from '../cmps/StyledCmps/ToggleBtn';
import { ReactComponent as ArrowBtn } from '../assets/images/arrow-btn.svg';

const calc = (x, y) => [x - window.innerWidth / 2, y + window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

export function LandingPage({ setMode, mode }) {
  const [header, setHeader] = useState(0);
  const [subHeader, setSubHeader] = useState(0);
  const [content, setContent] = useState(0);
  const [sentence, setSentence] = useState(0);
  const [animations, setAnimations] = useState(0);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      window.scrollTo(window.innerWidth, window.innerHeight);
    }
    setTimeout(() => setHeader(100), 1000);
    setTimeout(() => setSubHeader(100), 2500);
    setTimeout(() => setContent(100), 3500);
    setTimeout(() => setSentence(100), 4500);
  }, []);

  useEffect(() => {
    if (mode) {
      setTimeout(() => setAnimations(100), 1500);
    } else {
      setTimeout(() => setAnimations(0), 10);
    }
  }, [mode]);

  // paralax effect

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <div
      className="landing"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <div className="content">
        <h2
          className="name"
          style={{ opacity: header, transition: 'opacity 0.6s ease-in' }}
        >
          Hello, my name is <span>Adi Aharonov.</span>
        </h2>
        <h3 style={{ opacity: subHeader, transition: 'opacity 0.6s ease-in' }}>
          Front-end web developer.
        </h3>
        <p
          className="sentence"
          style={{ opacity: content, transition: 'opacity 0.6s ease-in' }}
        >
          Choose your path:
        </p>
        <span style={{ opacity: sentence, transition: 'opacity 0.6s ease-in' }}>
          <ToggleBtn
            names={['Clean & Boring', 'Space Explorer!']}
            mode={mode}
            setMode={setMode}
          />
        </span>
      </div>

      {/* parallax effect*/}
      {mode && window.innerWidth > 1024 && (
        <div
          className="animations"
          style={{ opacity: animations, transition: 'opacity 0.6s ease-in' }}
        >
          <StarsAnimation />
          <animated.div
            className="card2"
            style={{ transform: props.xy.interpolate(trans2) }}
          ></animated.div>
          <animated.div
            className="card3"
            style={{ transform: props.xy.interpolate(trans3) }}
          />
          <animated.div
            className="card4"
            style={{ transform: props.xy.interpolate(trans4) }}
          />
          <animated.div
            className="space-ship"
            style={{ transform: props.xy.interpolate(trans1) }}
          >
            {' '}
            <SpaceShip width={window.innerWidth / 5} />
          </animated.div>
        </div>
      )}

      <div
        className="left"
        onClick={() => window.scrollTo(0, window.innerHeight)}
      >
        <ArrowBtn fill={mode ? '#fff' : '#222'} />
        <button
          className="main-page-btn "
          style={
            mode
              ? { color: '#fff', transform: 'rotate(-90deg)' }
              : { color: '#222', transform: 'rotate(-90deg)' }
          }
        >
          About
        </button>
      </div>
      <div
        className="top"
        onClick={() => window.scrollTo(window.innerWidth, 0)}
      >
        <ArrowBtn fill={mode ? '#fff' : '#222'} />
        <button
          className="main-page-btn top"
          style={mode ? { color: '#fff' } : { color: '#222' }}
        >
          Skills
        </button>
      </div>
      <div
        className="right"
        onClick={() =>
          window.scrollTo(window.innerWidth * 2, window.innerHeight)
        }
      >
        <button
          className="main-page-btn right"
          style={
            mode
              ? { color: '#fff', transform: 'rotate(90deg)' }
              : { color: '#222', transform: 'rotate(90deg)' }
          }
        >
          Work
        </button>
        <ArrowBtn fill={mode ? '#fff' : '#222'} />
      </div>
      <div
        className="bottom"
        onClick={() =>
          window.scrollTo(window.innerWidth, window.innerHeight * 2)
        }
      >
        <button
          className="main-page-btn bottom"
          style={mode ? { color: '#fff' } : { color: '#222' }}
        >
          Contact
        </button>
        <ArrowBtn fill={mode ? '#fff' : '#222'} />
      </div>
    </div>
  );
}
