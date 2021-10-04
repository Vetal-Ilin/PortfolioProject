import React from 'react';
import LinkButtonTransition from '../LinkButtonTransition/LinkButtonTransition';
import ProductСardMini from '../ProductСardMini/ProductСardMini';
import iconCardClosse from '@images/iconCardClosse.svg';

export default function ShoppingCart({onClickButtonClose, onRemoveItemToCart, itemsCart = [], totalPrice, recurringProducts, onPlus, onMinus}) {

    return (
        <div className='shopping-cart'>
            <div className='shopping-cart__wrapper'>
                <div className='shopping-cart__wrapper__background' onClick={onClickButtonClose} />
                <div className='shopping-cart__wrapper__retractable-card'>
                    <div className='shopping-cart__wrapper__retractable-card__header'>
                        <h2>Корзина</h2>
                        <button onClick={onClickButtonClose} className='shopping-cart__wrapper__retractable-card__header__button-close'><img src={iconCardClosse} alt='закрыть' /></button>
                    </div>
                    {itemsCart.length > 0 ?
                        <div>
                            <div className='shopping-cart__wrapper__retractable-card__list-item'>
                                {itemsCart.map((item) => <ProductСardMini 
                                    product={item} key={item.id} onRemoveItemToCart={onRemoveItemToCart} recurringProducts={recurringProducts} onPlus={onPlus} onMinus={onMinus}
                                />)}
                            </div>
                            <div className='shopping-cart__wrapper__retractable-card__footer'>
                                <h3>Итого: {totalPrice} руб</h3>
                                <LinkButtonTransition to='#' className='shopping-cart__wrapper__retractable-card__footer__button'>Оформить заказ</LinkButtonTransition>
                            </div>
                        </div>
                        :
                        <h2 className='shopping-cart__wrapper__retractable-card__empty'>Корзина пуста</h2>
                    }
                </div>
            </div>
        </div>
    )
}
