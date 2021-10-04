import React, {useState} from 'react';
import iconCardAdd from '@images/iconCardAdd.svg';


export default function DescriptionProductСard(props) {

    const {products} = props;

    const [isAdded, setIsAdded] = useState(false)

    const onClickPlus = () => {
        props.onPlus(products);
        setIsAdded(!isAdded);
    }
    
    return (
        <div className='description-product-card'>
            <div className='description-product-card__wrapper'>
                <div className='description-product-card__wrapper__price'>
                   <p>{products.price} руб</p> 
                </div>
                <div className='description-product-card__wrapper__size'>
                    <p>{products.size}ml</p> 
                </div>
            </div>
            {/* <button className='description-product-card__button' onClick={onClickPlus}><p>В корзину</p></button> */}
            <button className='description-product-card__button' onClick={onClickPlus}><img src={iconCardAdd} alt='добавить' /></button>
        </div>
    )
}
