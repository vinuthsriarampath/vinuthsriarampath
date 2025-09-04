export default function ProjectCardSkeleton() {
    return (
        <div className="w-full h-full p-4 flex flex-col justify-between space-y-4 rounded-xl bg-gradient-to-br from-black/20 to-lime-500/30 backdrop-blur-lg animate-pulse">

            {/* Thumbnail */}
            <div className="w-full h-36 overflow-hidden rounded-md flex justify-center items-center bg-lime-600"></div>

            {/* Title */}
            <div className="h-6 w-3/4 bg-lime-600 rounded"></div>

            {/* Description (multiple lines) */}
            <div className="space-y-2">
                <div className="h-4 w-full bg-lime-600 rounded"></div>
                <div className="h-4 w-11/12 bg-lime-600 rounded"></div>
                <div className="h-4 w-5/6 bg-lime-600 rounded"></div>
                <div className="h-4 w-3/4 bg-lime-600 rounded"></div>
            </div>

            {/* Action buttons */}
            <div className="flex justify-around pt-2">
                <div className="h-10 w-10 bg-lime-600 rounded-full"></div>
                <div className="h-10 w-10 bg-lime-600 rounded-full"></div>
                <div className="h-10 w-10 bg-lime-600 rounded-full"></div>
            </div>
        </div>
    )
}