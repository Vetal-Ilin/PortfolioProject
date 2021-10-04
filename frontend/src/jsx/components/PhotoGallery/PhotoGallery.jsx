import React, {useState, useEffect} from 'react';
import Slider from "react-slick";
import BackgroundContentLoading from '../BackgroundContentLoading/BackgroundContentLoading';

// import photo product
import PolyGelOne from '@images/imagesProducts/PolyGel.png';
import PolyGelTwo from '@images/imagesProducts/PolyGel2.png';

export default function PhotoGallery(props) {

    const {products} = props;

    const [imageProduct, setImageProduct] = useState([]);
    const [bigPhoto, setBigPhoto] = useState(false)

    useEffect(() => {
        switch (products.imgSrc) {
            case "CAD":
            return setImageProduct([PolyGelOne, PolyGelOne])
            break
        }
    }, [products]);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        
        <div className='photo-gallery' >
            <Slider {...settings}>
                <div className='photo-gallery__item'>
                    <img src={imageProduct[0]} alt="123" />
                </div>
                <div className='photo-gallery__item'>
                    <img src={imageProduct[1]} alt="123" />
                </div>
            </Slider>
        </div> 
    )
}