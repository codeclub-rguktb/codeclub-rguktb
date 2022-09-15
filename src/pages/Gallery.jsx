import React from 'react'
import Image1 from "../Images/cc/image-01.jpeg";
import Image2 from "../Images/cc/image-02.jpeg";
import Image3 from "../Images/cc/image-03.jpeg";
import Image4 from "../Images/cc/image-04.jpeg";
import Image5 from "../Images/cc/image-05.jpeg";
import Image6 from "../Images/cc/image-06.jpeg";
import Image7 from "../Images/cc/image-07.jpeg";
import Image8 from "../Images/cc/image-08.jpeg";
import Image9 from "../Images/cc/image-09.jpeg";
export default function Gallery() {
    return (
        <div>
            <section class="overflow-hidden text-gray-700 ">
                <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32 ">
                    <div class="flex flex-wrap -m-1 md:-m-2">
                        <div class="flex flex-wrap w-1/1 md:w-1/3">
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src={Image1} />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/1 md:w-1/3">
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src={Image2} />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/1 md:w-1/3">
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src={Image3} />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/1 md:w-1/3">
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src={Image4} />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/1 md:w-1/3">
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src={Image5} />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/1 md:w-1/3">
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src={Image6} />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/1 md:w-1/3">
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src={Image7} />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/1 md:w-1/3">
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src={Image8} />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/1 md:w-1/3">
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                    src={Image9} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
