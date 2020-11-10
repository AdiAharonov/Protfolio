import React from 'react'

export  function Social({mode}) {
    return (
        <div className="social">
            <a style={mode ? {color: "#fff"} : {color: "rgb(99, 13, 156)"}} href="https://github.com//AdiAharonov" > <i className="fab fa-github"></i></a>
            <a style={mode ? {color: "#fff"} : {color: "rgb(99, 13, 156)"}} href="https://www.linkedin.com/in/adi-aharonov-a230061a9/" ><i className="fab fa-linkedin"></i></a>
        </div>
    )
}
