import React from 'react';
import ProductСard from '../ProductСard/ProductСard';
import SliderProductСard from '../SliderProductСard/SliderProductСard';
import SpinningIconLoading from '../SpinningIconLoading/SpinningIconLoading';

export default function ListСardsHitProducts(props) {
    let CatalogElements = props.statusState.map(
        item => {
            if(item.hit) {
               return <ProductСard key={item.id} products={item} onPlus={props.onPlus}  itemsCart={props.itemsCart} />
            }
        }
    )
    
    return (
        <div className={'list-cards-hit-products ' + props.className}>
            <h2>Хиты продаж</h2>
            {CatalogElements.length !== 0  ? 
            <SliderProductСard>
                {CatalogElements}
            </SliderProductСard> : 
            <div className='list-cards-hit-products__wrapper'>
                <SpinningIconLoading />
            </div>}
        </div>
    )
}
