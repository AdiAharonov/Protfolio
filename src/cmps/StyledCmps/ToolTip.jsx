import React from 'react'

export const ToolTip = ({content, bgColor, fontColor, fromTop, fromLeft, opacity}) => {

    return (
        <div className="tooltip" style={{backgroundColor: bgColor,color: fontColor, top: fromTop, left: fromLeft, opacity}}>
            <h4>{content}</h4>
        </div>
    )
}
