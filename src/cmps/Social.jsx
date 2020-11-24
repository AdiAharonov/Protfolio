import React from 'react'
import { Link } from 'react-router-dom';

export  function Social({mode}) {
    return (
        <div className="social">
            <a style={mode ? {color: "#fff"} : {color: "rgb(99, 13, 156)"}} href="https://github.com//AdiAharonov" > <i className="fab fa-github"></i></a>
            <a style={mode ? {color: "#fff"} : {color: "rgb(99, 13, 156)"}} href="https://www.linkedin.com/in/adi-aharonov-a230061a9/" ><i className="fab fa-linkedin"></i></a>
            <Link style={mode ? {color: "#fff"} : {color: "rgb(99, 13, 156)"}} to="/blog" ><i className="fab fa-blogger"></i></Link>
        </div>
    )
}
