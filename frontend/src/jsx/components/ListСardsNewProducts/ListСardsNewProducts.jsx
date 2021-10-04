import React from 'react';
import ProductСard from '../ProductСard/ProductСard';
import SliderProductСard from '../SliderProductСard/SliderProductСard';
import SpinningIconLoading from '../SpinningIconLoading/SpinningIconLoading';

export default function ListСardsNewProducts(props) {

    let CatalogElements = props.statusState.map(
        item => {
            if(item.new) {
               return <ProductСard key={item.id} products={item} onPlus={props.onPlus} />
            }
        }
    )

    return (
        <div className={'list-cards-new-products ' + props.className}>
            <h2>Новинки</h2>
            {CatalogElements.length !== 0  ? 
            <SliderProductСard>
                {CatalogElements}
            </SliderProductСard> : 
            <div className='list-cards-new-products__wrapper'>
                <SpinningIconLoading />
            </div>}
        </div>
    )
}
