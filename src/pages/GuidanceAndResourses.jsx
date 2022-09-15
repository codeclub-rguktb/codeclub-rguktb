import React, { useState } from 'react';
// import Modal from '../utils/Modal';
import { Button } from "@material-tailwind/react";


function HeroHome() {
    return (
        <section className="relative container max-w-5xl mr-auto ml-auto">

            {/* Illustration behind hero content */}
            {/* <div className="absolute left-1/3 container mr-auto ml-auto   transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
                <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                            <stop stopColor="#FFF" offset="0%" />
                            <stop stopColor="#EAEAEA" offset="77.402%" />
                            <stop stopColor="#DFDFDF" offset="100%" />
                        </linearGradient>
                    </defs>
                    <g fill="url(#illustration-01)" fillRule="evenodd">
                        <circle cx="1232" cy="128" r="128" />
                        <circle cx="155" cy="443" r="64" />
                    </g>
                </svg>
            </div> */}

            <div className="max-w-6xl mt-10 mx-auto px-4 sm:px-6">

                {/* Hero content */}
                <div className="pt-8 pb-12 md:pt-32 md:pb-20">

                    {/* Section header */}
                    <div className="text-center pb-12 md:pb-16">
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"> Guidance And Resources Team</h1>
                        <div className="max-w-3xl mx-auto">
                            <p className="text-4xl font-extrabold leading-tighter tracking-tighter md:text-5xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150"><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Join the Discord</span></p>
                            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                                <a href="https://discord.gg/r3mYNP3S" target="blank" className='flex mx-auto w-max gap-4'>
                                    <Button>
                                        <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" style={{ backgroundColor: '#7289da' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-4 h-4">
                                                <path fill="currentColor" d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                                            </svg>
                                        </button>
                                        <span className='text-xl font-bold ml-4 text-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>Join !!</span>
                                    </Button>
                                </a>

                            </div>
                            {/* <p className="text-xl text-gray-600 mt-8 tracking-wide" data-aos="zoom-y-out" data-aos-delay="150">autem voluptatum sed eaque accusantium tenetur, deleniti molestiae quam nihil aspernatur officia, iusto libero blanditiis molestias cum. Voluptas quibusdam distinctio dolor ab quo a tempora, reprehenderit quisquam officia!</p> */}
                        </div>
                    </div>

                    {/* Hero image */}

                </div>

            </div>
        </section >
    );
}

export default HeroHome;