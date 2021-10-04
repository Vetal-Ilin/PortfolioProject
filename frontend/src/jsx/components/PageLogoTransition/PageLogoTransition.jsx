import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@images/logo-light.svg';


export default function PageLogoTransition(props) {
    return (
        <Link to={props.to} className={"page-logo " + props.className}><img src={logo} alt="Vinaiv logo"/></Link>
    )
}
