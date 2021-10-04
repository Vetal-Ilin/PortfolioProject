import React from 'react';
import IllustrationDescription from '../IllustrationDescription/IllustrationDescription';
import imageProductSelection from '@images/imageProductSelection.png';
import imageOrderConfirmation from '@images/imageOrderConfirmation.png';
import imageSendingProducts from '@images/imageSendingProducts.png';
import imageReceivingTheProduct from '@images/imageReceivingTheProduct.png';

export default function PurchaseStages(props) {
    return (
        <div className={'purchase-stages ' + props.className}>
            <div className='purchase-stages__wrapper'>
                <IllustrationDescription className='purchase-stages__wrapper__illustration-description' src={imageProductSelection}> 
                    Вы оставляете заявку на заказ.
                </IllustrationDescription>
                <IllustrationDescription className='purchase-stages__wrapper__illustration-description' src={imageOrderConfirmation}> 
                    Мы проверяем наличие и высылаем реквизиты для оплаты. Высылаем товар по 100% предоплате.
                </IllustrationDescription>
                <IllustrationDescription className='purchase-stages__wrapper__illustration-description' src={imageSendingProducts}> 
                    Вы оплачиваете, выбираете способ доставки.
                </IllustrationDescription>
                <IllustrationDescription className='purchase-stages__wrapper__illustration-description' src={imageReceivingTheProduct}> 
                    Мы высылаем товар в течении двух рабочих дней.
                </IllustrationDescription>
            </div>
        </div>
    )
}
