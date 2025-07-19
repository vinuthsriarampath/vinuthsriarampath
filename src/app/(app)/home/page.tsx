"use client";

import { useState } from "react";
import { Check, SquareArrowUpRight } from "lucide-react";
import Image from "next/image";

const experienceKeys = ["Syigen"] as const;
type ExperienceKey = typeof experienceKeys[number];

const experiences: Record<ExperienceKey, { name: string, position: string; period: string; details: string[] }> = {
  Syigen: {
    name: "Syigen",
    position: "Trainee Software Developer",
    period: "Jan 2025 - Present",
    details: [
      "Contributed to developed a system for a law firm to manage cases, lawyers, document and more using Laravel with Tailwind ",
      "Contributed to built and shipped Web Application for a client which manages stocks,orders,invoices and deliveries of the relevant client using Next.Js",
      "Contributed to develop a web application using Gemini AI to Analyze users cv's and suggest improvement and courses",
    ],
  },

};

const webDesignSkills = ["Figma", "Wireframing", "Responsive Design"];
const versionSkills = ["Git", "GitHub"];
const backendSkills = ["Java", "Spring-Boot", "MySQL", "Postgres", "Node.Js", "Express.Js"];
const frontendSkills = ["JavaScript", "Angular", "React", "Next.Js", "CSS"];
const otherSkills = ["Collaboration", "Commitment", "Leadership"];

export default function HomePage() {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceKey>("Syigen");

  return (
    <div className="space-y-35">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen gap-8 px-4 md:px-0">
        <div className="col-span-1 flex flex-col justify-center gap-4">
          <p className="text-xl font-semibold text-gray-200">Hey, I'm Vinuth Sri Arampath 👋</p>
          <p className="text-5xl md:text-7xl font-bold">
            Full <span className="text-lime-400 drop-shadow-[0_0_10px_#a3e635]">Stack</span>
          </p>
          <p className="text-5xl md:text-7xl font-bold">Developer</p>
          <p className="text-xl md:text-2xl text-gray-300 max-w-lg">
            Empower your business with innovative, high-impact software solutions crafted for your success.
          </p>
          <div className="flex flex-row gap-4 mt-6">
            <a href="/contact">
              <button className="px-6 py-3 bg-lime-500 rounded-lg font-semibold text-black hover:bg-lime-400 transition-all duration-300 hover:drop-shadow-[0_0_10px_#a3e635]">
                Get In Touch
              </button>
            </a>
            <a href="/projects">
              <button className="px-6 py-3 outline-2 outline-lime-500 rounded-lg font-semibold text-lime-500 hover:text-lime-400 hover:outline-lime-400 transition-all duration-300 hover:drop-shadow-[0_0_10px_#a3e635]">
                Browse Projects
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-1 flex justify-center md:justify-end items-center">
          <div className="relative w-48 h-48 md:w-96 md:h-96 drop-shadow-[0_0_12px_#fff035]">
            <Image src="https://nycuybywyqgqnlwictzm.supabase.co/storage/v1/object/public/avatars/1752738899881.jpeg" alt="Profile Picture" fill className="object-cover rounded-full border-4 border-dashed border-lime-300 p-2 md:p-4" sizes="(max-width: 768px) 192px, 384px" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mt-0">
          Latest <span className="bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-600 bg-clip-text text-transparent">Projects.</span>
        </h1>
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Card 1 */}
          <div className="col-span-1 md:col-span-2">
            <div className="w-full h-64 md:h-80 rounded-xl p-4 flex justify-center bg-gradient-to-br from-black/20 to-lime-500/30 backdrop-blur-lg transition-all duration-300 hover:scale-105">
              <Image src="/project-images/vynex.png" alt="Vynex" fill className="rounded-xl object-cover" sizes="(max-width: 768px) 100vw, 40vw" quality={85} />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-200">
                Vynex <SquareArrowUpRight className="size-5 hover:size-6 cursor-pointer text-lime-400 transition-all" />
              </h3>
              <p className="text-gray-300 mt-2">
                A cutting-edge platform for seamless project management and collaboration, built with modern web technologies.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-span-1 md:col-span-3">
            <div className="w-full h-64 md:h-80 rounded-xl p-4 flex justify-center bg-gradient-to-br from-black/20 to-lime-500/30 backdrop-blur-lg transition-all duration-300 hover:scale-105">
              <Image src="/project-images/clothify.png" alt="Clothify" fill className="rounded-xl object-cover" sizes="(max-width: 768px) 100vw, 60vw" quality={85}
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-200">
                Clothify <SquareArrowUpRight className="size-5 hover:size-6 cursor-pointer text-lime-400 transition-all" />
              </h3>
              <p className="text-gray-300 mt-2">
                An e-commerce solution for fashion enthusiasts, featuring a sleek UI and robust backend for efficient shopping.
              </p>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Card 1 */}
          <div className="col-span-1 md:col-span-3">
            <div className="w-full h-64 md:h-80 rounded-xl p-4 flex justify-center bg-gradient-to-br from-black/20 to-lime-500/30 backdrop-blur-lg transition-all duration-300 hover:scale-105">
              <Image src="/project-images/clothify.png" alt="Clothify" fill className="rounded-xl object-cover" sizes="(max-width: 768px) 100vw, 60vw" quality={85} />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-200">
                Clothify <SquareArrowUpRight className="size-5 hover:size-6 cursor-pointer text-lime-400 transition-all" />
              </h3>
              <p className="text-gray-300 mt-2">
                A scalable e-commerce platform with advanced filtering and personalized recommendations for users.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-span-1 md:col-span-2">
            <div className="w-full h-64 md:h-80 rounded-xl p-4 flex justify-center bg-gradient-to-br from-black/20 to-lime-500/30 backdrop-blur-lg transition-all duration-300 hover:scale-105">
              <Image src="/project-images/vynex.png" alt="Vynex" fill className="rounded-xl object-cover" sizes="(max-width: 768px) 100vw, 40vw" quality={85} />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-200">
                Vynex <SquareArrowUpRight className="size-5 hover:size-6 cursor-pointer text-lime-400 transition-all" />
              </h3>
              <p className="text-gray-300 mt-2">
                Streamlined project management tool with real-time collaboration features and intuitive design.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <button className="px-6 py-3 bg-lime-500 rounded-lg font-semibold text-black hover:bg-lime-400 transition-all duration-300 hover:drop-shadow-[0_0_10px_#a3e635]">
            View More...
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-12 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">
          My <span className="bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-600 bg-clip-text text-transparent">Experiences.</span>
        </h1>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-1 text-white rounded-lg">
            <ul className="space-y-2">
              {Object.keys(experiences).map((exp) => (
                <li key={exp} className="cursor-pointer hover:text-lime-400 px-5 py-2 border-s-3 font-bold" onClick={() => setSelectedExperience(exp as ExperienceKey)} >
                  {exp}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-5 p-4 rounded-lg text-white">
            <h3 className="text-xl font-semibold">{experiences[selectedExperience].position} <span className="bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-600 bg-clip-text text-transparent">@ {experiences[selectedExperience].name}</span></h3>
            <p className="text-gray-400 mt-2">{experiences[selectedExperience].period}</p>
            <ul className="mt-4 space-y-6">
              {experiences[selectedExperience].details.map((detail: string, index: number) => (
                <li key={index} className="flex gap-4"><Check className="font-bold text-lime-500" />{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">
          My Valuable <span className="bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-600 bg-clip-text text-transparent">Skills.</span>
        </h1>
        <div className="grid grid-cols-10 gap-6">
          <div className="col-span-2 flex flex-col items-center rounded-lg text-white">
            <div>
              <h3 className="text-2xl font-semibold">Web Design</h3>
              <div className="space-y-2 mt-2 text-gray-300">
                {webDesignSkills.map((detail: string, index: number) => (
                  <p key={index}>{detail}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-2 flex flex-col items-center rounded-lg text-white">
            <div>
              <h3 className="text-2xl font-semibold">Backend</h3>
              <div className="space-y-2 mt-2 text-gray-300">
                {backendSkills.map((detail: string, index: number) => (
                  <p key={index}>{detail}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-2 flex flex-col items-center rounded-lg text-white">
            <div>
              <h3 className="text-2xl font-semibold">Frontend</h3>
              <div className="space-y-2 mt-2 text-gray-300">
                {frontendSkills.map((detail: string, index: number) => (
                  <p key={index}>{detail}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-2 flex flex-col items-center rounded-lg text-white">
            <div>
              <h3 className="text-2xl font-semibold">Version Control</h3>
              <div className="space-y-2 mt-2 text-gray-300">
                {versionSkills.map((detail: string, index: number) => (
                  <p key={index}>{detail}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-2 flex flex-col items-center rounded-lg text-white">
            <div>

              <h3 className="text-2xl font-semibold">Other</h3>
              <div className="space-y-2 mt-2 text-gray-300">
                {otherSkills.map((detail: string, index: number) => (
                  <p key={index} className="">{detail}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}