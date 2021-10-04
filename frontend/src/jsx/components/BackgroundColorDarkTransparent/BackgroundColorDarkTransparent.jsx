import React from 'react'

export default function BackgroundColorDarkTransparent(props) {
    return (
        <div 
            className={!props.statusState ? 
                'background-color-dark-transparent ' + props.className : 
                'background-color-dark-transparent background-color-dark-transparent_open ' + props.className} 
                onClick={props.onClick} 
            >        
        </div>
    )
}
