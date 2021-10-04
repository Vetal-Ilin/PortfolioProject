import React from 'react';

// import photo product
import PolyGel from '@images/imagesProducts/PolyGel.png';

export default function ProductImage(props) {

    const {products} = props;

    function getImages() {
        switch (products.imgSrc) {
            case "CAD":
            return PolyGel
            break;
        }   
    }

    return (
        <div className={'product-image ' + props.className}>
            <img src={getImages()} alt={products.title} />
        </div>
    )
}
