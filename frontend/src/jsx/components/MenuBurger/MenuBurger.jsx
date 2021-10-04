import React from 'react'

export default function MenuBurger(props) {
  
    return (
        <div className={!props.statusState ? 'menu-burger' : 'menu-burger menu-burger_open'} onClick={props.onClick}>
                <span></span>
        </div>
    )
}
