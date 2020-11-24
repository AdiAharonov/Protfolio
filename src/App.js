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

function App() {
  const [mode, setMode] = useState(false);
  const [bgAnimation, setBgAnimation] = useState(0);

  useEffect(() => {
    const currMode = LocalStorageService.getMode();
    currMode === 'true' ? setMode(currMode) : setMode(false);
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
      <NavBar />

      {mode && (
        <div
          className="space-bg"
          style={{ opacity: bgAnimation, transition: 'opacity 0.6s ease-in' }}
        >
          <SpaceBgSvg />
        </div>
      )}

      <LandingPage setMode={setMode} mode={mode} />
      <About mode={mode} />
      <Skills mode={mode} />
      <Work mode={mode} />
      <Contact mode={mode} />
      <Social mode={mode} />
    </div>
  );
}

export default App;
