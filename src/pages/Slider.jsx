import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Image from "../Images/ss.png";
const ImageSlider = () => {

    const images = [{
        id: 1,
        src: Image,
    },
    {
        id: 2,
        src: Image,
    },
    {
        id: 3,
        src: Image,
    }
    ];


    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 1500,
    };
    return (
        <>
            <div className="container mr-auto ml-auto mt-4 rounded-lg">
                <Slider {...settings}>
                    {images.map((item, index) => (
                        <div>
                            <div className="rounded-lg">
                                <div class="carousel-item active relative float-left w-full rounded-lg">
                                    <img
                                        src={Image}
                                        class="block w-full rounded-lg"
                                        alt="..."
                                    />
                                    <div class="carousel-caption hidden md:block absolute text-center">
                                        <h5 class="text-xl">First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </Slider>
            </div>
        </>
    )
}
export default ImageSlider;
