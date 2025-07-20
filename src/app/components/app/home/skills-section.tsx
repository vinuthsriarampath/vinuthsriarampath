const webDesignSkills = ["Figma", "Wireframing", "Responsive Design"];
const versionSkills = ["Git", "GitHub"];
const backendSkills = ["Java", "Spring-Boot", "MySQL", "Postgres", "Node.Js", "Express.Js"];
const frontendSkills = ["JavaScript", "Angular", "React", "Next.Js", "CSS"];
const otherSkills = ["Collaboration", "Commitment", "Leadership"];

export default function SkillSection() {
    return (
        <>
            <h1 className="text-4xl md:text-5xl font-bold flex gap-3">
                My <span className="hidden md:block">Valuable</span><span className="bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-600 bg-clip-text text-transparent">Skills.</span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 w-full mt-0 md:mt-6">
                <div className="col-span-1 flex flex-col items-start md:item-center rounded-lg text-white p-4">
                    <div>
                        <h3 className="text-2xl font-semibold">Web Design</h3>
                        <div className="space-y-2 mt-2 text-gray-300">
                            {webDesignSkills.map((detail: string, index: number) => (
                                <p key={index}>{detail}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col items-start md:item-center rounded-lg text-white p-4">
                    <div>
                        <h3 className="text-2xl font-semibold">Backend</h3>
                        <div className="space-y-2 mt-2 text-gray-300">
                            {backendSkills.map((detail: string, index: number) => (
                                <p key={index}>{detail}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col items-start md:item-center rounded-lg text-white p-4">
                    <div>
                        <h3 className="text-2xl font-semibold">Frontend</h3>
                        <div className="space-y-2 mt-2 text-gray-300">
                            {frontendSkills.map((detail: string, index: number) => (
                                <p key={index}>{detail}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col items-start md:item-center rounded-lg text-white p-4">
                    <div>
                        <h3 className="text-2xl font-semibold">Version Control</h3>
                        <div className="space-y-2 mt-2 text-gray-300">
                            {versionSkills.map((detail: string, index: number) => (
                                <p key={index}>{detail}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col items-start md:item-center rounded-lg text-white p-4">
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
        </>
    )
}