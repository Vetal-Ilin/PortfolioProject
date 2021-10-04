import React from 'react';
import LinkButtonToScroll from '../LinkButtonToScroll/LinkButtonToScroll';
import LinkAvatar from '../../components/LinkAvatar/LinkAvatar';

export default function SectionHeader(props) {
    return (
        <div className={'section-header ' + props.className}>
            <div className='container'>
                <LinkAvatar  className='section-header__link-avatar' />
                <h1>{props.title}</h1>
                <h3>{props.text}</h3>
                <LinkButtonToScroll to={props.to} className='section-header__link-button-to-scroll'>
                    {props.buttonText}
                </LinkButtonToScroll>
            </div>
            {props.children}
        </div>
    )
}