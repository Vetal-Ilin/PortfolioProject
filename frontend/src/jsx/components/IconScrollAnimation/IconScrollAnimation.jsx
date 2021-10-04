import React from 'react';
import pointerIconScrollAnimation from '@images/IconScrollAnimation.svg';

export default function IconScrollAnimation(props) {
    return (
        <div className={'icon-scroll-animation ' + props.className}>
            <div className='icon-scroll-animation__wrapper'><img src={pointerIconScrollAnimation} alt='Скролл влево' /></div>
        </div>
    )
}
