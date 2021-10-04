import React from 'react'

export default function BackgroundContentLoading(props) {

    return (
        <div className={'background-content-loading ' + props.className}>
            <div className='background-content-loading__wrapper' />
        </div>
    )
}
