import React from 'react';
import { Link } from 'react-router-dom';
import ProductImage from '../ProductImage/ProductImage';

export default function ProductSubgroupCards(props) {

    const products = {
        "imgSrc": "CAD",
    }

    let title = props.title;

    return (
        <article className={'product-subgroup-cards ' + props.className} onClick={() => {window.localStorage.setItem('subgroupProduct', `"${title}"`)}}>
            <Link to={props.to} className='product-subgroup-cards__link' />
                <ProductImage className='product-subgroup__product-image' products={products} />
                <div className='product-subgroup-cards__text-wrapper'>
                    <p>{props.title}</p>
                </div>
        </article>
    )
}
