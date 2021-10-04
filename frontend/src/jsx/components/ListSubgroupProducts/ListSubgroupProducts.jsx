import React from 'react';
import { Link } from 'react-router-dom';
import iconArrowOpeningDown from '@images/iconArrowOpeningDown.svg';

export default function ListSubgroupProducts({listSubgroupProducts = [], onClickLinkSubgroup, closeNavBar}) {

    const onClickLink = (obj) => {
        window.localStorage.setItem('subgroupProduct', JSON.stringify(obj))
        onClickLinkSubgroup(obj)
        closeNavBar()
    }

    return (
        <div className='list-subgroup-products'>
            <div className='list-subgroup-products__title-desktop'><p>Каталог товаров</p><img src={iconArrowOpeningDown} alt='' /></div>
            <ul className='list-subgroup-products__link'>
                <li className='list-subgroup-products__link__item-title'><p>Каталог товаров</p></li>
                {listSubgroupProducts.map(item => 
                    <li key={item.toString()} className='list-subgroup-products__link__item' >
                        <Link to='/ProductsGroup' onClick={() => onClickLink(item)}>
                            <p>{item}</p>
                        </Link>   
                    </li>  
                )}
            </ul>
        </div>
    )
}