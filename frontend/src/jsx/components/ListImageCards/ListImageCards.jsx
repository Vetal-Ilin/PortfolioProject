import React from 'react';
import SliderProductСard from '../SliderProductСard/SliderProductСard';

export default function ListImageCards(props) {

    let listImage = props.listImage.map(
        item => <img src={item.src} key={item.id} alt='Фото моей работы' className='list-image-cards__image' />
    )

    return (
        <div className='list-image-cards'>
            <h2>{props.title}</h2>
            <div className='list-image-cards__wrapper-children'>
                {props.children}
            </div>
            <SliderProductСard className='list-image-cards__list-image-cards'>
                {listImage}
            </SliderProductСard>
        </div>
    )
}
