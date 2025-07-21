'use client';

import ExperienceSection from "@/app/components/app/home/experience-section";
import SubSection from "@/app/components/shared/sub-section";

export default function AboutPage() {
    return (
        <SubSection>
            <h1 className="text-4xl md:text-7xl font-bold">About <span className="bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-600 bg-clip-text text-transparent ">me.</span></h1>
            <p className="text-md sm:text-lg md:text-2xl ps-5 border-s-4 sm:border-s-6  md:border-s-8 border-lime-500">Designing and developing beautiful, fully functional web applications is my passion and expertise. I am dedicated to elevating every project I work on, consistently striving to achieve the highest standards of quality and innovation.</p>
            <h1 className="text-4xl md:text-7xl font-bold">My <span className="bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-600 bg-clip-text text-transparent ">Story.</span></h1>
            <div className="text-md sm:text-lg md:text-2xl md:text-2xl space-y-3 text-justify">
                <p>I began my academic journey to prepare myself for a career in software development in February 2024, right after completing my A/Ls at S. Thomas' College, Mount Lavinia, by enrolling at the Institute of Computer Engineering Technology (iCET).</p>
                <p>At iCET, we were guided by industry professionals, and I successfully completed the course with a GPA of 4.25, earning a place on the Director’s List by the end of the year. I also had the opportunity to participate in the Industry Training Program, where I worked with a company as a Trainee Software Developer.</p>
                <p>During the training program, I was selected by Syigen (Pvt) Ltd along with 15 of my classmates. At Syigen, we had the chance to contribute to several projects, including AI-based applications, and the company also organized several educational sessions focused on AI development.</p>
                <p>Meanwhile, I also began my Bachelor of Information Technology (BIT) at the University of Colombo School of Computing (UCSC) and started applying to companies to begin my career as an Associate Software Developer.</p>
            </div>
            <ExperienceSection/>
        </SubSection>
    )
}