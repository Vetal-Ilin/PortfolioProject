import React, {useState, useEffect} from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductCounter from '../ProductCounter/ProductCounter';
import iconCardDelete from '@images/iconCardDelete.svg';

export default function ProductСardMini(props) {

    const {product} = props;
    let priceItemOne = product.price;

    const [counterPropduct, setCounterPropduct] = useState(1);
    const [priseItem, setPriseItem] = useState('');

    useEffect(() => {
        if(props.recurringProducts.filter(item => item.id === product.id).length > 1) {
            setCounterPropduct(props.recurringProducts.filter(item => item.id === product.id).length)
        }
        
    }, [])

    useEffect(() => {
        setPriseItem(priceItemOne * Number(counterPropduct))
    }, [counterPropduct])

    let calcAddCounterPropduct = () => {
        setCounterPropduct(counterPropduct + 1)
        props.onPlus(product)
    }

    let calcSubtractCounterPropduct = () => {
        if (counterPropduct !== 1) {
            setCounterPropduct(counterPropduct - 1)
            props.onMinus(product)
        } 
    }

    return (
        <article className='product-card-mini'>
            <ProductImage className='product-card-mini__product-image' products={product} />
            <div className='product-card-mini__text'>
                <p>{product.title}</p>
                <div className='product-card-mini__text__wrapper'>
                    <p>Объем: {product.size} ml</p>
                    <p>{priseItem} руб</p>
                </div>
                <div className='product-card-mini__text__wrapper__button'>
                    <button className='product-card-mini__text__wrapper__button__delete' 
                        onClick={() => props.onRemoveItemToCart(product)}>
                            <img src={iconCardDelete} alt='удалить' />
                    </button>
                    <ProductCounter onClickCounter={{'calcAddCounterPropduct': calcAddCounterPropduct, 'calcSubtractCounterPropduct': calcSubtractCounterPropduct}}  
                        statusState={counterPropduct} className='product-card-mini__text__product-counter' />
                </div>
            </div>
        </article>
    )
}
