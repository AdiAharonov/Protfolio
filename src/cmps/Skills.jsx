import React from 'react'

export function Skills() {
    return (
        <div className="skills" name="skills">
             <h3><span className="clr3">02. </span>Skills & Knowledge</h3>
             <section className="skill-groups">
             <div className="skill-group">
             <h2>Front-end</h2>
             <div className="skill-container">
                 <p>React / React Native</p>
                 <p>Redux</p>
                 <p>Mobx</p>
                 <p>Vue / Vuex</p>
                 <p>Angular</p>
                 <p>JavaScript</p>
                 <p>TypeScript</p>
                 <p>HTML</p>
                 <p>CSS</p>
             </div>
             </div>
             <div className="skill-group">
                 <h2>Back-end</h2>
                 <div className="skill-container">
                 <p>Node.js</p>
                 <p>PHP</p>
                 <p>MongoDB</p>
                 <p>MySQL</p>
                 <p>Express.js</p>
                 </div>
             </div>
             <div className="skill-group">
             <h2>Code Managment</h2>
             <div className="skill-container">
                <p>Git</p>
                <p>Unit Testing</p>
                <p>MVC</p>
                <p>Npm</p>
             </div>
             </div>
             </section>
             <button onClick={() => window.scrollTo(window.innerWidth, window.innerHeight)} style={{position: 'absolute',top: '50%', left: '20%', width: '300px', zIndex: '9999'}}>To the mainframe</button>
        </div>
    )
}
