'use client';

import StorySection from "@/app/components/app/about/story-section";
import ExperienceSection from "@/app/components/app/home/experience-section";
import SubSection from "@/app/components/shared/sub-section";

export default function AboutPage() {
    return (
        <SubSection>
            <h1 className="text-4xl md:text-7xl font-bold">About <span className="bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-600 bg-clip-text text-transparent ">me.</span></h1>
            <p className="text-md sm:text-lg md:text-2xl ps-5 border-s-4 sm:border-s-6  md:border-s-8 border-lime-500">Designing and developing beautiful, fully functional web applications is my passion and expertise. I am dedicated to elevating every project I work on, consistently striving to achieve the highest standards of quality and innovation.</p>
            <StorySection/>
            <ExperienceSection/>
        </SubSection>
    )
}