import React from 'react';
import { Astroid } from './StyledCmps/Astroid';
import { ReactComponent as ArrowBtn } from '../assets/images/arrow-btn.svg';

export function Contact({ mode }) {
  const onClick = () => {
    window.location.href = `mailto:adi.ahronov@gmail.com`;
  };
  return (
    <div className="contact">
      <div className="center-btn" onClick={() => window.scrollTo(window.innerWidth, window.innerHeight)}>
        <ArrowBtn fill={mode ? '#fff' : '#222'} />
        <button
          style={mode ? { color: '#fff' } : { color: '#222' }}
          
        >
          {mode ? 'Explore' : 'Back'}
        </button>
      </div>

      <h2 className="header">Wanna get in touch?</h2>

      <div className="contact-content">
        <p>
          {' '}
          Always looking for great opportunities or a nice chat so feel free to
          contact me any time!
        </p>
      </div>
      <button onClick={onClick} className="contact-btn">
        Contact Me
      </button>
      {mode && window.innerWidth > 1024 && <Astroid />}
    </div>
  );
}
