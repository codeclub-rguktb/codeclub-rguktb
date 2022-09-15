import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Image1 from "../Images/slider/image1.jpeg";
import Image2 from "../Images/slider/image2.jpg";
import Image3 from "../Images/slider/image3.jpg";
import Image4 from "../Images/slider/image4.jpg";

export default function SimpleSlider() {

    const images = [
        {
            id: 1,
            src: Image1,
            alt: 'Image 1'
        },
        {
            id: 2,
            src: Image2,
            alt: 'Image 2'
        },
        {
            id: 3,
            src: Image3,
            alt: 'Image 3'
        },
        {
            id: 3,
            src: Image4,
            alt: 'Image 4'
        },
    ]
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2500,
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
                                        class="block w-full rounded-lg" style={{ height: '550px' }}
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
