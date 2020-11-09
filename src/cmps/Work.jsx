import React from 'react';
import { Card } from '../cmps/StyledCmps/Card';
import VenyouGif from '../assets/images/work/venyou.gif';
import bitcoinGif from '../assets/images/work/bitcoin.gif';
import { ReactComponent as ArrowBtn } from '../assets/images/arrow-btn.svg';

export function Work({ mode }) {
  return (
    <div className="work main-container">
      <h3>Some things i've made</h3>

      <div className="proj1">
        {' '}
        <Card
          mode={mode}
          src={'https://venyouformisterbit.herokuapp.com/'}
          reg={true}
          gif={VenyouGif}
          header={'Venyou'}
          tech={['MongoDB', 'Express', 'React.js', 'Node.js']}
          content={
            'Inspired by Meetup, a full-scale marketplace web application. based on MERN (MongoDB / Express / React / Node.js), includes: Sign in with Facebook/Google, Socket for live comments, Notification system, Google MAPS, and many more features '
          }
        />
      </div>
      <div className="proj2">
        <Card
          mode={mode}
          src={'https://adiaharonov.github.io/Mr.BitCoin/'}
          reg={false}
          gif={bitcoinGif}
          header={'Mr.Bitcoin'}
          tech={['Angular', 'TypeScript', 'RxJs', 'Fetch API']}
          content={
            ' A quite simple and lovely bitcoin managing app, just an example where I used angular and ts. Includes localstorage for login system & async api requests.'
          }
        />
      </div>
      <div className="center-btn" onClick={() => window.scrollTo(window.innerWidth, window.innerHeight)}>
        <ArrowBtn fill={mode ? '#fff' : '#222'} />
        <button
          style={
            mode
              ? { color: '#fff', transform: 'rotate(-90deg)' }
              : { color: '#222', transform: 'rotate(-90deg)' }
          }
          
        >
          {mode ? 'Explore' : 'Back'}
        </button>
      </div>
    </div>
  );
}
