import React from 'react'
import Image from "../Images/ss.png"
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
export default function PageSection() {
    const words = ['CODECLUB', 'CODECLUB-RGUKTB'];
    return (
        <div>
            <div class="mx-auto mt-20 mb-20 w-full text-center text-[#1A237E] md:w-3/4">
                <h2 class="block antialiased tracking-normal font-sans text-4xl leading-[1.3] text-inherit mb-4 font-black">
                    <Typewriter words={words} typeSpeed={200} deleteSpeed={100} loop={false} />
                </h2>
                <p class="block antialiased font-sans font-light text-inherit text-lg opacity-60">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem perspiciatis facilis, eum dicta hic atque pariatur dolorum beatae, veniam unde harum culpa commodi repudiandae et omnis qui possimus debitis recusandae.</p>
            </div>
            <div class="m-4 max-w-8xl mx-auto overflow-hidden md:max-w-8xl bg-white rounded-xl shadow-md">
                <div class="md:flex">
                    <div class="md:w-1/2 w-full">
                        <img class="object-cover w-full" style={{ height: '400px' }} alt="Image" src={Image} />
                    </div>
                    <div class="md:w-1/2 w-full p-8">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Category</div><a class="block mt-1 text-lg leading-tight font-medium text-black hover:underline" href="#">Link Title Text</a>
                        <p class="mt-2 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed recusandae libero possimus culpa quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed recusandae libero possimus culpa quod</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
