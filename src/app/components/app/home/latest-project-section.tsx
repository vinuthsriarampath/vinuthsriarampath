import {SquareArrowUpRight} from "lucide-react";
import Image from "next/image";
import {useEffect, useState} from "react";
import axios from "axios";
import {Project} from "@/types/Project";
import LatestProjectsSkeleton from "@/app/components/app/skeletons/latest-projects-skeleton";


export default function LatestProjectSection() {
    const [loading, setLoading] = useState<boolean>(false);
    const [projects, setProjects] = useState<Project[]>([])

    const BASE_URL = process.env.NEXT_PUBLIC_VYNEX_BASE_URL || "";

    useEffect(() => {
        fetchLatestProjects();
    }, []);

    const fetchLatestProjects = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}/api/open/projects/latest?limit=4`);
            setProjects(response.data);
            setLoading(false);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setLoading(false);
                const msg = error.response?.data?.error ?? error.response?.data?.errors?.[0]?.message;
                alert(msg ?? "Something went wrong");
            } else {
                setLoading(false);
                alert(error instanceof Error ? error.message : "Something went wrong");
            }
        }
    }

    return (
        loading ? (
                <LatestProjectsSkeleton/>
            ) :
            (
                <>
                    <h1 className="text-4xl md:text-5xl font-bold mt-0">
                        Latest <span
                        className="bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-600 bg-clip-text text-transparent">Projects.</span>
                    </h1>
                    {/* First Row */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {/* Card 1 */}
                        <div className="col-span-1 md:col-span-2">
                            <div
                                className="w-full h-64 md:h-80 rounded-xl p-4 flex justify-center bg-gradient-to-br from-black/20 to-lime-500/30 backdrop-blur-lg transition-all duration-300 hover:scale-105">
                                <Image
                                    src={projects[0]?.thumbnail && projects[0]?.thumbnail !== "" ? projects[0].thumbnail : "/no-image-provided.png"}
                                    alt="1st latest project thumbnail" fill className="rounded-xl object-scale-down"
                                    sizes="(max-width: 768px) 100vw, 40vw" quality={85}/>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-200">
                                    {projects[0]?.project_name ?? "No project name available"} <SquareArrowUpRight
                                    className="size-5 hover:size-6 cursor-pointer text-lime-400 transition-all"/>
                                </h3>
                                <p className="text-gray-300 mt-2 overflow-hidden text-ellipsis line-clamp-2">
                                    {projects[0]?.description ?? "No description available."}
                                </p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="col-span-1 md:col-span-3">
                            <div
                                className="w-full h-64 md:h-80 rounded-xl p-4 flex justify-center bg-gradient-to-br from-black/20 to-lime-500/30 backdrop-blur-lg transition-all duration-300 hover:scale-105">
                                <Image
                                    src={projects[1]?.thumbnail && projects[1]?.thumbnail !== "" ? projects[1].thumbnail : "/no-image-provided.png"}
                                    alt="2nd latest project thumbnail" fill className="rounded-xl object-scale-down"
                                    sizes="(max-width: 768px) 100vw, 60vw" quality={85}
                                />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-200">
                                    {projects[1]?.project_name ?? "No project name available"} <SquareArrowUpRight
                                    className="size-5 hover:size-6 cursor-pointer text-lime-400 transition-all"/>
                                </h3>
                                <p className="text-gray-300 mt-2 overflow-hidden text-ellipsis line-clamp-2">
                                    {projects[1]?.description ?? "No description available."}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Second Row */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {/* Card 1 */}
                        <div className="col-span-1 md:col-span-3">
                            <div
                                className="w-full h-64 md:h-80 rounded-xl p-4 flex justify-center bg-gradient-to-br from-black/20 to-lime-500/30 backdrop-blur-lg transition-all duration-300 hover:scale-105">
                                <Image
                                    src={projects[2]?.thumbnail && projects[2]?.thumbnail !== "" ? projects[2].thumbnail : "/no-image-provided.png"}
                                    alt="3rd latest project thumbnail" fill className="rounded-xl object-scale-down"
                                    sizes="(max-width: 768px) 100vw, 60vw" quality={85}/>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-200">
                                    {projects[2]?.project_name ?? "No project name available"} <SquareArrowUpRight
                                    className="size-5 hover:size-6 cursor-pointer text-lime-400 transition-all"/>
                                </h3>
                                <p className="text-gray-300 mt-2 overflow-hidden text-ellipsis line-clamp-2">
                                    {projects[2]?.description ?? "No description available."}
                                </p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="col-span-1 md:col-span-2">
                            <div
                                className="w-full h-64 md:h-80 rounded-xl p-4 flex justify-center bg-gradient-to-br from-black/20 to-lime-500/30 backdrop-blur-lg transition-all duration-300 hover:scale-105">
                                <Image
                                    src={projects[3]?.thumbnail && projects[3]?.thumbnail !== "" ? projects[3].thumbnail : "/no-image-provided.png"}
                                    alt="4th latest project thumbnail" fill className="rounded-xl object-scale-down"
                                    sizes="(max-width: 768px) 100vw, 40vw" quality={85}/>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-200">
                                    {projects[3]?.project_name ?? "No project name available"} <SquareArrowUpRight
                                    className="size-5 hover:size-6 cursor-pointer text-lime-400 transition-all"/>
                                </h3>
                                <p className="text-gray-300 mt-2 overflow-hidden text-ellipsis line-clamp-2">
                                    {projects[3]?.description ?? "No description available."}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt:8 md:mt-10">
                        <a href={"/projects"}>
                            <button
                                className="px-6 py-3 bg-lime-500 rounded-lg font-semibold text-black hover:bg-lime-400 transition-all duration-300 hover:drop-shadow-[0_0_10px_#a3e635]">
                                View More...
                            </button>
                        </a>
                    </div>
                </>
            )

    );
}