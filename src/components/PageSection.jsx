import React from 'react'
import Image from "../Images/mission.jpg"
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
export default function PageSection() {
    const words = ['CODECLUB', 'CODECLUB-RGUKTB'];
    return (
        <div>
            <div class="mx-auto mt-20 mb-20 w-full text-center text-[#1A237E] md:w-3/4">
                <h2 class="block antialiased tracking-normal font-sans text-4xl leading-[1.3] text-inherit mb-4 font-black">
                    <Typewriter words={words} typeSpeed={200} deleteSpeed={100} loop={false} />
                </h2>
                <p class="block antialiased font-sans font-light text-inherit text-lg opacity-60">Empowering the young and aspiring minds of RGUKTB to develop passion towards technology and inculcating coding culture that is diverse, welcoming and inclusive for all students.</p>
            </div>
            <div class="m-4 max-w-8xl mx-auto overflow-hidden md:max-w-8xl bg-white rounded-xl shadow-md">
                <div class="md:flex">
                    <div class="md:w-1/2 w-full">
                        <img class="object-cover w-full" style={{ height: '400px' }} alt="Image" src={Image} />
                    </div>
                    <div class="md:w-1/2 w-full p-8">
                        <div class="uppercase tracking-wide text-lg text-indigo-500 font-semibold">MISSION</div>
                        <p class="mt-8 text-gray-500">Creating a platform for the students to enhance their coding ability.</p>
                        <p class="mt-8 text-gray-500">Conducting weekly contests, hackathons and workshops.</p>
                        <p class="mt-8 text-gray-500">Introducing real world project statements.</p>
                        <p class="mt-8 text-gray-500">Developing Personality through group discussions and mentorship.</p>
                        <p class="mt-8 text-gray-500">Learning to Code is learning to Create and Innovate.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
