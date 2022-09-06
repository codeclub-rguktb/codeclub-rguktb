import React from 'react'
import Teams from "../components/Teams";
import ImageSlider from "../components/ImageSlider";
import NextContest from '../components/NextContest';
// import LandingPage from './GuidanceAndResourses';

export default function Home() {
    return (
        <div className='container max-w-8xl mx-auto'>
            <ImageSlider />
            <NextContest />
            <Teams />
        </div>
    )
}
