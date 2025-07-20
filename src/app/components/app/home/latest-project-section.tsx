import { SquareArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function LatestProjectSection() {
    return (
        <>
            <h1 className="text-4xl md:text-5xl font-bold mt-0">
                Latest <span className="bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-600 bg-clip-text text-transparent">Projects.</span>
            </h1>
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {/* Card 1 */}
                <div className="col-span-1 md:col-span-2">
                    <div className="w-full h-64 md:h-80 rounded-xl p-4 flex justify-center bg-gradient-to-br from-black/20 to-lime-500/30 backdrop-blur-lg transition-all duration-300 hover:scale-105">
                        <Image src="/project-images/vynex.png" alt="Vynex" fill className="rounded-xl object-scale-down" sizes="(max-width: 768px) 100vw, 40vw" quality={85} />
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
                        <Image src="/project-images/clothify.png" alt="Clothify" fill className="rounded-xl object-scale-down" sizes="(max-width: 768px) 100vw, 60vw" quality={85}
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
                        <Image src="/project-images/clothify.png" alt="Clothify" fill className="rounded-xl object-scale-down" sizes="(max-width: 768px) 100vw, 60vw" quality={85} />
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
                        <Image src="/project-images/vynex.png" alt="Vynex" fill className="rounded-xl object-scale-down" sizes="(max-width: 768px) 100vw, 40vw" quality={85} />
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
            <div className="flex justify-center mt:8 md:mt-12">
                <button className="px-6 py-3 bg-lime-500 rounded-lg font-semibold text-black hover:bg-lime-400 transition-all duration-300 hover:drop-shadow-[0_0_10px_#a3e635]">
                    View More...
                </button>
            </div>
        </>
    );
}