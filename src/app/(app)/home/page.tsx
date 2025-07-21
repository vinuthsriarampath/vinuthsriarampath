"use client";

import { useState } from "react";
import { Check, SquareArrowUpRight } from "lucide-react";
import Image from "next/image";
import HeroSection from "@/app/components/app/home/hero-section";
import MainSection from "@/app/components/shared/main-section";
import SubSection from "@/app/components/shared/sub-section";
import LatestProjectSection from "@/app/components/app/home/latest-project-section";
import ExperienceSection from "@/app/components/app/home/experience-section";
import SkillSection from "@/app/components/app/home/skills-section";
import StorySection from "@/app/components/app/about/story-section";

export default function HomePage() {
  

  return (
    <div className="space-y-20 md:space-y-35">
      <MainSection>
        <HeroSection/>
      </MainSection>
      <SubSection>
        <StorySection/>
        <LatestProjectSection/>
        <ExperienceSection/>
        <SkillSection/>
      </SubSection>
    </div>
  );
}