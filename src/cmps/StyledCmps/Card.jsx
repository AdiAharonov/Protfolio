import React from 'react'

export const Card = ({gif, alt, header, content, tech, reg, src, mode}) => {

  


    return (
        <div className={reg ? "card" : "card reverse"} >
            <a href={src}><img src={gif} alt={alt} /></a>
    <div className="content">
    <h2>{header}</h2>
    <p>{content}</p>
    </div>
    <div className="tech">
    {tech.map((item, idx) => <h4 key={idx} style={mode ? {color: " #E9B9FF"} : {color: "#650d9f"}}>- {item} -</h4>)}
    </div>
    
        </div>
    )
}
