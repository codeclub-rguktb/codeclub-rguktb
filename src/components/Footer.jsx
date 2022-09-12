import React from 'react'
import SocialMedia from './SocialMedia'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        // < !--Foooter -->
        <section class="bg-white">
            <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <nav class="flex flex-wrap justify-center -mx-5 -my-2">
                    <div class="px-5 py-2">
                        <Link to="/" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Home
                        </Link>
                    </div>
                    <div class="px-5 py-2">
                        <Link to="/contest" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Contest
                        </Link>
                    </div>
                    <div class="px-5 py-2">
                        <Link to="/guidance" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Guidance
                        </Link>
                    </div>
                    <div class="px-5 py-2">
                        <Link to="/gallery" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Gallery
                        </Link>
                    </div>
                </nav>

                <SocialMedia />
                <div className='mx-auto w-full flex justify-center' >
                    <span className='text-xl font-bold ml-4 text-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>RAJIV GANDHI UNIVERSITY OF KNOWLEDGE TECHNOLOGIES - BASAR</span>
                </div>
                <p class="mt-8 text-base leading-6 text-center text-gray-400">
                    © 2022 CODE CLUB - RGUKTB. All rights reserved.
                </p>
            </div>
        </section>
    )
}
