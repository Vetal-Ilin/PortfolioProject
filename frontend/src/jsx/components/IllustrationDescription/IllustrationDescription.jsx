import React from 'react';

export default function IllustrationDescription(props) {
    return (
        <div className={'illustration-description ' + props.className}>
            <img src={props.src} alt={props.alt} />
            <div className="illustration-description__text">
                <p >{props.children}</p>
            </div>
        </div>
    )
}
