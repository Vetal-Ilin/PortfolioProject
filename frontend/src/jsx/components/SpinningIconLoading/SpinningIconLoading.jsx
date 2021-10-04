import React from 'react';
import spinningIcon from '@images/spinningIcon.svg'

export default function SpinningIconLoading(props) {
    return (
        <div className={'spinning-icon-loading ' + props.className}>
            <div className='spinning-icon-loading__wrapper-icon'>
                <img src={spinningIcon} alt='идет загрузка' />
            </div>
            <p>Загрузка...</p>
        </div>
    )
}
