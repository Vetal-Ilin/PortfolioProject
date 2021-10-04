import React from 'react';

export default function SectionText(props) {
    return (
        <div className={'section-text ' + props.className}>
            <div className='section-text__wrapper'>
                <h3>{props.text}</h3>
                <div className='section-text__wrapper__children'>
                    {props.children}
                </div>
            </div>
            <div className='section-text__image'>
                <img src={props.src} alt='изображение' />
            </div>
        </div>
    )
}
