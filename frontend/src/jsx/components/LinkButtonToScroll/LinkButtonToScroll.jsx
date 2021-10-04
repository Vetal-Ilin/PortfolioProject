import React from 'react';
import {Link} from 'react-scroll';

export default function LinkButtonToScroll(props) {

    let timeScroll = 1000;

    if (props.link) {
        return (
            <Link onClick={props.closeNavBar} to={props.to} className={'link-to-scroll ' + props.className} smooth={true} duration={timeScroll} offset={-100} ><p>{props.children}</p></Link>
        )
    }

    return (
        <Link to={props.to} className={'link-button-to-scroll ' + props.className} smooth={true} duration={timeScroll} offset={-100} ><p>{props.children}</p></Link>
    )
}
