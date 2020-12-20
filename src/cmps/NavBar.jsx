import React, { useState, useEffect } from 'react';
import Logo from '../assets/images/logo.svg';
import { Link, animateScroll as scroll } from 'react-scroll';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentScrollHeight, setCurrentScrollHeight] = useState();
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    setCurrentScrollHeight(0);

    window.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
      if (currentScrollHeight !== newScrollHeight) {
        setCurrentScrollHeight(newScrollHeight);
      }
    };
  }, [currentScrollHeight]);

  const opacity = Math.min(currentScrollHeight / 100, 1);
  const navBgc = `rgb(9, 22, 41,${opacity})`;
  const border = `rgb(72, 80, 104,${opacity})`;
  
  return (
    <div className="navbar"  style={{ backgroundColor: navBgc, borderBottom: `3px solid ${border}` }}>
      <img className="logo" src={Logo} alt="" />

      <div className={ !isOpen ? 'hamburger' : 'hamburger change'} onClick={toggle}>
        
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      <div className={isOpen ? 'navbar-content-box' : 'navbar-content-box close'} >
        <Link
          to="about"
          smooth={true}
          offset={0}
          duration={300}
          className="navbar-btn"
        >
          About
        </Link>
        <Link
          to="skills"
          smooth={true}
          offset={0}
          duration={300}
          className="navbar-btn"
        >
          Skills
        </Link>
        <Link
          to="work"
          smooth={true}
          offset={0}
          duration={300}
          className="navbar-btn"
        >
          Work
        </Link>
        <Link
          to="contact"
          smooth={true}
          offset={0}
          duration={300}
          className="navbar-btn"
        >
          Contact
        </Link>
        <a
          download="Adi-Aharonov-CV.pdf"
          href="resume/CV.pdf"
          className="resume-btn"
        >
          Resume
        </a>
      </div>
    </div>
  );
};
