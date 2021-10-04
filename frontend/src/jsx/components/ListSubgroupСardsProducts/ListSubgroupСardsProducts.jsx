import React from 'react';
import ProductSubgroupCards from '../ProductSubgroupCards/ProductSubgroupCards';
import IconScrollAnimation from '../IconScrollAnimation/IconScrollAnimation';
import PolyGel from '@images/imagesProducts/PolyGel.png';

export default function ListSubgroupСardsProducts({listSubgroupProducts = [], className, onClickLinkSubgroup}) {

    const onClickLink = (obj) => {
        window.localStorage.setItem('subgroupProduct', JSON.stringify(obj))
        onClickLinkSubgroup(obj)
    }

    return (
        <div className={'list-subgroup-cards-products ' + className}>
            <h2>Группы товаров</h2>
            <IconScrollAnimation className='list-subgroup-cards-products__icon-scroll-animation' />
            <div className='list-subgroup-cards-products__wrapper'>
                {listSubgroupProducts.map(item => 
                    <ProductSubgroupCards 
                        to='/ProductsGroup' 
                        key={item.toString()} 
                        className='list-subgroup-cards-products__wrapper__product-subgroup-cards' 
                        onClick={() => onClickLink(item)}
                        src={PolyGel}
                        title={item}
                    /> 
                )}
            </div>
        </div>
    )
}
