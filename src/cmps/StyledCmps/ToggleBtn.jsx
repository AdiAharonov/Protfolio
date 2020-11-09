import React from 'react'


export const ToggleBtn = ({names, mode, setMode}) => {
    
    return (
        <div className={mode ? "toggle-btn dark" : "toggle-btn light"} >
            
            
            <div  onClick={() => setMode(false)} className={mode ? "clean-option light" : "clean-option dark"}>
          <h4  className="clean">{names[0]}</h4>
          <div className="border">

          <span className="right"></span>
          <span className="left"></span>
          </div>
            </div>
            
            
            <div   onClick={() => setMode(true)} className={mode ? "space-option light" : "space-option dark"}>

           <h4 className="space">{names[1]}</h4>
           <div className="border">

           <span className="right"></span>
          <span className="left"></span>
           </div>
            </div>
        </div>
    )
}
