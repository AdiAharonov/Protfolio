import React from 'react';
import { LocalStorageService } from '../../services/localStorageService';

export const ToggleBtn = ({ names, mode, setMode }) => {
  return (
    <div className={mode ? 'toggle-btn dark' : 'toggle-btn light'}>
      <div className={mode ? 'clean-option light' : 'clean-option dark'}>
        <h4 className={mode ? 'clean' : 'space'}>{names[0]}</h4>
      </div>

      <div className={mode ? 'btn dark' : 'btn light'}>
        <span
          className={
            mode ? 'inside-circle right-side' : 'inside-circle left-side'
          }
          onClick={() => {
            if (mode) {
              setMode(false);
              LocalStorageService.setMode(false);
            } else {
              setMode(true);
              LocalStorageService.setMode(true);
            }
          }}
        ></span>
      </div>

      <div className={mode ? 'space-option light' : 'space-option dark'}>
        <h4 className={mode ? 'space space-font' : 'space-font'}>{names[1]}</h4>
      </div>
    </div>
  );
};
