import React, { useState, useEffect } from 'react';
import { NavBar } from './cmps/NavBar';
import { LandingPage } from './cmps/LandingPage';
import { Social } from './cmps/Social';
import { About } from './cmps/About';
import { Skills } from './cmps/Skills';
import { Work } from './cmps/Work';
import { Contact } from './cmps/Contact';
import { LocalStorageService } from './services/localStorageService';
import { SpaceBgSvg } from './cmps/StyledCmps/SpaceBgSvg';
import { Preload } from './cmps/StyledCmps/Preload';

function App() {
  const [mode, setMode] = useState(false);
  const [bgAnimation, setBgAnimation] = useState(0);
  const [preload, setPreload] = useState(true);
  const [entryAnimationIsReady, setEntryAnimation] = useState(false);

  useEffect(() => {
    const currMode = LocalStorageService.getMode();
    currMode === 'true' ? setMode(true) : setMode(false);
    setEntryAnimation(true);
    
    const timer = setTimeout(() => {
      setPreload(false)
    }, 1500);
    return () => clearTimeout(timer);

  }, []);

  useEffect(() => {
    if (mode) {
      setTimeout(() => setBgAnimation(100), 800);
    } else {
      setTimeout(() => setBgAnimation(0), 10);
    }
  }, [mode]);

  return (
    <div className={mode ? 'home-page dark' : 'home-page light'}>
      
      {preload && <div>
        
        <Preload />
        </div>}

      
      <NavBar />

      {mode && (
        <div
          className="space-bg"
          style={{ opacity: bgAnimation, transition: 'opacity 0.6s ease-in' }}
        >
          <SpaceBgSvg />
        </div>
      )}

      {entryAnimationIsReady && 
      <LandingPage setMode={setMode} mode={mode} />
    }
    <About mode={mode} />
    <Skills mode={mode} />
    <Work mode={mode} />
    <Contact mode={mode} />
    <Social mode={mode} />


      
      
    </div>
  );
}

export default App;
