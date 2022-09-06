import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='container mr-auto ml-auto mt-4 rounded-lg'>

            <Slider {...settings}>
                <div className="rounded-lg">
                    <div class="carousel-item active relative float-left w-full rounded-lg">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                            class="block w-full rounded-lg"
                            alt="..."
                        />
                        <div class="carousel-caption hidden md:block absolute text-center">
                            <h5 class="text-xl">First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg">
                    <div class="carousel-item active relative float-left w-full rounded-lg">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                            class="block w-full rounded-lg"
                            alt="..."
                        />
                        <div class="carousel-caption hidden md:block absolute text-center">
                            <h5 class="text-xl">First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg">
                    <div class="carousel-item active relative float-left w-full rounded-lg">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                            class="block w-full rounded-lg"
                            alt="..."
                        />
                        <div class="carousel-caption hidden md:block absolute text-center">
                            <h5 class="text-xl">First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg">
                    <div class="carousel-item active relative float-left w-full rounded-lg">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                            class="block w-full rounded-lg"
                            alt="..."
                        />
                        <div class="carousel-caption hidden md:block absolute text-center">
                            <h5 class="text-xl">First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg">
                    <div class="carousel-item active relative float-left w-full rounded-lg">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                            class="block w-full rounded-lg"
                            alt="..."
                        />
                        <div class="carousel-caption hidden md:block absolute text-center">
                            <h5 class="text-xl">First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg">
                    <div class="carousel-item active relative float-left w-full rounded-lg">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                            class="block w-full rounded-lg"
                            alt="..."
                        />
                        <div class="carousel-caption hidden md:block absolute text-center">
                            <h5 class="text-xl">First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>

    );
}
