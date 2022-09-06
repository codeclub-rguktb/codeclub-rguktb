import React from 'react'
import Teams from "../components/Teams";
import ImageSlider from "../components/ImageSlider";
import NextContest from '../components/NextContest';
// import LandingPage from './GuidanceAndResourses';

export default function Home() {
    return (
        <div className='container mr-auto ml-auto'>
            <ImageSlider />
            <NextContest />
            <Teams />
            {/* <LandingPage /> */}
            {/* <SocialMedia /> */}

        </div>
    )
}
