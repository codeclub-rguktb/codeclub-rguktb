import React from 'react'

export default function Community() {
    return (
        <div>
            <section class="relative my-8 z-30 pb-20 md:pt-12">
                <div class="mx-auto mb-20 w-full text-center text-[#1A237E] md:w-3/4">
                    <h2 class="block antialiased tracking-normal font-sans text-4xl leading-[1.3] text-inherit mb-4 font-black">Join Our Community</h2>
                    <p class="block antialiased font-sans font-light text-inherit text-lg opacity-60">Now, this is how you reach us, the best community of coders and enthusiasts among us.</p>
                </div>
                <div class="mt-22 flex flex-wrap items-center">
                    <div class="w-full px-4 md:w-1/3">
                        <div class="relative flex flex-col bg-clip-border rounded-xl text-gray-700 border border-white/80 bg-white/80 backdrop-blur-2xl backdrop-saturate-200 shadow-blue-gray-500/[0.12] shadow-2xl">
                            <div class="relative bg-clip-border overflow-hidden text-gray-700 -mt-6 mx-6  grid h-12 w-12 place-items-center rounded-lg bg-[#1A237E]"><i class="fab fa-github relative text-xl text-white" aria-hidden="true"></i>
                            </div><div class="p-6 mt-1">
                                <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug mb-2 text-[#1A237E]">Github</h5>
                                <p class="block antialiased font-sans text-base leading-relaxed font-light text-[#1A237E]/60">Contribute to our project and help our community!</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-12 w-full px-4 md:mt-0 md:w-1/3">
                        <div class="relative flex flex-col bg-clip-border rounded-xl text-gray-700 border border-white/80 bg-white/80 backdrop-blur-2xl backdrop-saturate-200 shadow-blue-gray-500/[0.12] shadow-2xl">
                            <div class="relative bg-clip-border overflow-hidden text-gray-700 -mt-6 mx-6  grid h-12 w-12 place-items-center rounded-lg bg-[#1A237E]"><i class="fab fa-discord relative text-xl text-white" aria-hidden="true"></i></div><div class="p-6 mt-1"><h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug mb-2 text-[#1A237E]">Discord</h5>
                                <p class="block antialiased font-sans text-base leading-relaxed font-light text-[#1A237E]/60">Join our Discord community and let’s get to know each other.</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-12 w-full px-4 md:mt-0 md:w-1/3">
                        <div class="relative flex flex-col bg-clip-border rounded-xl text-gray-700 border border-white/80 bg-white/80 backdrop-blur-2xl backdrop-saturate-200 shadow-blue-gray-500/[0.12] shadow-2xl"><div class="relative bg-clip-border overflow-hidden text-gray-700 -mt-6 mx-6  grid h-12 w-12 place-items-center rounded-lg bg-[#1A237E]"><i class="fab fa-twitter relative text-xl text-white" aria-hidden="true"></i></div><div class="p-6 mt-1"><h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug mb-2 text-[#1A237E]">Twitter</h5><p class="block antialiased font-sans text-base leading-relaxed font-light text-[#1A237E]/60">Follow us on Twitter and keep up-to-date with our latest news.</p></div></div></div></div></section>
        </div>
    )
}
