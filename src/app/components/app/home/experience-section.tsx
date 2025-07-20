import { Check } from "lucide-react";
import { useState } from "react";

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

export default function ExperienceSection() {
    const [selectedExperience, setSelectedExperience] = useState<ExperienceKey>("Syigen");
    return (
        <>
            <h1 className="text-4xl md:text-5xl font-bold">
                My <span className="bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-600 bg-clip-text text-transparent">Experiences.</span>
            </h1>
            <div className="hidden md:block">

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

            <ol className="md:hidden relative border-s border-lime-200 dark:border-lime-700">
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-lime-500 dark:border-lime-900 dark:bg-lime-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{experiences[selectedExperience].period}</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{experiences[selectedExperience].position} <span className="bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-600 bg-clip-text text-transparent">@ {experiences[selectedExperience].name}</span></h3>
                    <ul className="mt-4 space-y-6">
                        {experiences[selectedExperience].details.map((detail: string, index: number) => (
                            <li key={index} className="flex gap-4 text-sm"><Check className="font-bold text-lime-500" />{detail}</li>
                        ))}
                    </ul>

                </li>
            </ol>


        </>
    )
}