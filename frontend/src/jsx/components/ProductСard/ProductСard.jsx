import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ProductImage from '../ProductImage/ProductImage';
import iconCardAdd from '@images/iconCardAdd.svg';
import iconCardCheck from '@images/iconCardCheck.svg';

export default function ProductСard(props) {
    const {products} = props;
    const [isAdded, setIsAdded] = useState(false)

    const onClickPlus = () => {
        props.onPlus(products);
        setIsAdded(!isAdded);
        return setTimeout(() => setIsAdded(false), 500)
    }

    return (
        <div className={'product-card ' + props.className}>
            <Link to={`/Product`} className='product-card__link' onClick={() => {window.localStorage.setItem('idUrl', JSON.stringify(products))}}></Link>
            <ProductImage className='product-card__product-image' products={products} />
            <div className='product-card__wrapper'>
                <p>{products.title}</p>
                <p>{products.subgroup}</p>
                <div className='product-card__description-product-card'>
                    <div className='product-card__description-product-card__wrapper'>
                        <div className='product-card__description-product-card__wrapper__price'>
                        <p>{products.price} руб</p> 
                        </div>
                        <div className='product-card__description-product-card__wrapper__size'>
                            <p>{products.size}ml</p> 
                        </div>
                    </div>
                    {isAdded ? 
                        <button className='product-card__description-product-card__button' onClick={onClickPlus}><img src={iconCardCheck} alt='добавить' /></button> :
                        <button className='product-card__description-product-card__button' onClick={onClickPlus}><img src={iconCardAdd} alt='добавлено' /></button>
                    }
                </div>
            </div>
        </div>
    )
}



