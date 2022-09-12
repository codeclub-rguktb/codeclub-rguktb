import React from 'react'
import Teams from "../components/Teams";
import ImageSlider from "../components/ImageSlider";
import NextContest from '../components/NextContest';
// import LandingPage from './GuidanceAndResourses';
import CTA from "../pages/CTA";
import Community from '../components/Community';
import PageSection from '../components/PageSection';
export default function Home() {
    return (
        <div className='container px-2 max-w-8xl mx-auto'>
            <ImageSlider />
            <PageSection />
            <NextContest />
            <Community />
            <Teams />
        </div>
    )
}
