import React, { useState, useEffect } from 'react';
import { LocalStorageService } from '../../services/localStorageService';
import { ToolTip } from './ToolTip';

export const ToggleBtn = ({ names, mode, setMode }) => {
  const [alertCleanOpacity, setAlertCleanOpacity] = useState(0);
  const [alertDarkOpacity, setAlertDarkOpacity] = useState(0);

  return (
    <div className={mode ? 'toggle-btn dark' : 'toggle-btn light'}>
        

        

      <div
        // onClick={() => {
        //     setAlertDarkOpacity(0)
        //   mode ? setMode(false) : setAlertCleanOpacity(100);
        //   setMode(false);
        //   LocalStorageService.setMode(false);
        // }}
        className={mode ? 'clean-option light' : 'clean-option dark'}
      >
        <h4 className={mode ? "clean" : "space"}>{names[0]}</h4>
        {/* <div className="border">
          <span className="right"></span>
          <span className="left"></span>
        </div> */}
        {/* <ToolTip
          content={'How much cleaner you want silly'}
          bgColor={'rgb(99, 13, 156)'}
          fontColor={'#fff'}
          fromTop={'120%'}
          fromLeft={'0'}
          opacity={alertCleanOpacity}
        /> */}
      </div>

      <div className={mode ? "btn dark" : "btn light"}><span className={mode ? "inside-circle right-side" : "inside-circle left-side"} onClick={() => {
          if(mode) {
        setMode(false)
        LocalStorageService.setMode(false)
           }
          else {
            setMode(true)
            LocalStorageService.setMode(true)
          }}}
          ></span></div>

      <div
        // onClick={() => {
        //     setAlertCleanOpacity(0)
        //   mode ? setAlertDarkOpacity(100) : setMode(true);
        //   setMode(true)
        //   LocalStorageService.setMode(true);
        // }}
        className={mode ? 'space-option light' : 'space-option dark'}
      >
        <h4 className={mode ? "space space-font" : "space-font"}>{names[1]}</h4>
        {/* <div className="border">
          <span className="right"></span>
          <span className="left"></span>
        </div> */}
        {/* <ToolTip
          content={"You're already exploring!"}
          bgColor={'rgb(99, 13, 156)'}
          fontColor={'#fff'}
          fromTop={'120%'}
          fromLeft={'50%'}
          opacity={alertDarkOpacity}
        /> */}
      </div>
        </div>
  
  );
};
