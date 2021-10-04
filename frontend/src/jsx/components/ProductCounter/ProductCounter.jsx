import React from 'react'

export default function ProductCounter(props) {
    return (
        <div className={'product-counter ' + props.className}>
            <button onClick={props.onClickCounter.calcSubtractCounterPropduct} className='product-counter__button__minus'><p>-</p></button>
            <p>{props.statusState} шт</p>
            <button onClick={props.onClickCounter.calcAddCounterPropduct} className='product-counter__button__plus'><p>+</p></button>
        </div>
    )
}
