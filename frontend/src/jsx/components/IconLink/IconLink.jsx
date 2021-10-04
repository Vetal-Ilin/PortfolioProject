import React from 'react';


export default function IconLink(props) {
    return (
        <a href={props.href} className={'icon-link ' + props.className}><span><img src={props.src} alt={props.alt} /></span><p>{props.children}</p></a>
    )
}


