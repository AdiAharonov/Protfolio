import React from 'react';
import { ReactComponent as G1 } from '../assets/images/skills/g1.svg';
import { ReactComponent as G2 } from '../assets/images/skills/g2.svg';
import { ReactComponent as G3 } from '../assets/images/skills/g3.svg';
import { ReactComponent as ArrowBtn } from '../assets/images/arrow-btn.svg';

export function Skills({ mode }) {
  return (
    <div className="skills">
      <div className="header">
        <h2>What can I do?</h2>
        <p>
          My best qualities are being a quick learner and a sharp problem solver
          ( aside from having a great sense of humor, of course). On the
          technical side i've spent a lot of time, money and tears to get
          comfortable with many technologies and work environments, from any
          popular framework in the front-end field (React ❤, Vue, Angular) to
          the far back-end with node.js, mongoDb, SQL, PHP.
        </p>
      </div>

      <div className="left skill">
        <G1 stroke={mode ? '#fff' : '#222'} fill={mode ? '#fff' : '#222'} />
        Big & Complex Systems
      </div>
      <div className="middle skill">
        <G2 stroke={mode ? '#fff' : '#222'} fill={mode ? '#fff' : '#222'} />
        Friendly UI/UX
      </div>
      <div className="right skill">
        <G3 stroke={mode ? '#fff' : '#222'} fill={mode ? '#fff' : '#222'} />
        Interactive & Dynamic
      </div>

      <div className="center-btn" onClick={() => window.scrollTo(window.innerWidth, window.innerHeight)}>
        <button
          style={mode ? { color: '#fff' } : { color: '#222' }}
          
        >
          {mode ? 'Explore' : 'Back'}
        </button>
        <ArrowBtn fill={mode ? '#fff' : '#222'} />
      </div>
    </div>
  );
}
