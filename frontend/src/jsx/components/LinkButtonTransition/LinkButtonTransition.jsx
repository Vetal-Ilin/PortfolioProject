import React from 'react';
import { Link} from 'react-router-dom';

export default function LinkButtonTransition(props) {

    if (props.link) {
        return (
            <Link to={props.to} className={'link-to-transition ' + props.className} href={props.href}><p>{props.children}</p></Link>
        )
    }
    return (
        <Link to={props.to} className={'link-button-transition ' + props.className}><p>{props.children}</p></Link>
    )
}


