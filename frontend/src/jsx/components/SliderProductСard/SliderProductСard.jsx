import React from 'react';
import Slider from "react-slick";

export default function SliderProductСard(props) {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],  
    };

    return (
        <Slider {...settings} className={'slider-product-card ' + props.className}>
            {props.children}
        </Slider>
    )
}
