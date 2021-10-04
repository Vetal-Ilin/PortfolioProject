import React from 'react';
import {Link} from 'react-scroll';
import logo from '@images/logo-light.svg';


export default function PageLogoToScroll(props) {

    let timeScroll = 1000;
    return (
        <Link to={props.to} className={"page-logo " + props.className} smooth={true} duration={timeScroll}><img src={logo} alt="Vinaiv logo"/></Link>
    )
}
