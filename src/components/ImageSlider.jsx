import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Image from "../Images/ss.png";

export default function SimpleSlider() {

    const images = [
        {
            id: 1,
            src: Image,
            alt: 'Image 1'
        },
        {
            id: 2,
            src: Image,
            alt: 'Image 1'
        },
        {
            id: 3,
            src: Image,
            alt: 'Image 1'
        },
    ]
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div className='container mr-auto ml-auto mt-4 rounded-lg'>

            <Slider {...settings}>
                {
                    images.map((item, index) => {
                        return (
                            <div key={index} className="rounded-lg">
                                <div class="carousel-item active relative float-left w-full rounded-lg">
                                    <img
                                        src={item.src}
                                        class="block w-full rounded-lg" style={{ height: '500px' }}
                                        alt={item.alt}

                                    />
                                    <div class="carousel-caption hidden md:block absolute text-center">
                                        <h5 class="text-xl">First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>

    );
}
