export default function LatestProjectsSkeleton() {
    return (
        <>
            <h1 className="text-4xl md:text-5xl font-bold mt-0">
                Latest <span className="text-transparent">Projects.</span>
            </h1>

            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-6">
                {/* Card 1 */}
                <div className="col-span-1 md:col-span-2 animate-pulse">
                    <div className="w-full h-64 md:h-80 rounded-xl bg-lime-600"></div>
                    <div className="mt-4 space-y-2">
                        <div className="h-6 w-3/4 bg-lime-600 rounded"></div>
                        <div className="h-4 w-full bg-lime-600 rounded"></div>
                        <div className="h-4 w-5/6 bg-lime-600 rounded"></div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-span-1 md:col-span-3 animate-pulse">
                    <div className="w-full h-64 md:h-80 rounded-xl bg-lime-600"></div>
                    <div className="mt-4 space-y-2">
                        <div className="h-6 w-3/4 bg-lime-600 rounded"></div>
                        <div className="h-4 w-full bg-lime-600 rounded"></div>
                        <div className="h-4 w-5/6 bg-lime-600 rounded"></div>
                    </div>
                </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-6">
                {/* Card 3 */}
                <div className="col-span-1 md:col-span-3 animate-pulse">
                    <div className="w-full h-64 md:h-80 rounded-xl bg-lime-600"></div>
                    <div className="mt-4 space-y-2">
                        <div className="h-6 w-3/4 bg-lime-600 rounded"></div>
                        <div className="h-4 w-full bg-lime-600 rounded"></div>
                        <div className="h-4 w-5/6 bg-lime-600 rounded"></div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="col-span-1 md:col-span-2 animate-pulse">
                    <div className="w-full h-64 md:h-80 rounded-xl bg-lime-600"></div>
                    <div className="mt-4 space-y-2">
                        <div className="h-6 w-3/4 bg-lime-600 rounded"></div>
                        <div className="h-4 w-full bg-lime-600 rounded"></div>
                        <div className="h-4 w-5/6 bg-lime-600 rounded"></div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt:8 md:mt-10">
                <a href={"/projects"}>
                    <button className="px-6 py-3 bg-lime-500 rounded-lg font-semibold text-black hover:bg-lime-400 transition-all duration-300 hover:drop-shadow-[0_0_10px_#a3e635]">
                        View More...
                    </button>
                </a>
            </div>
        </>
    );
}