import { Eye, GitBranch, GitBranchPlus, Globe } from "lucide-react";

interface ProjectCardProps {
    thumbnail?: string;
    name: string;
    description: string;
    hostUrl?: string;
    repoUrl: string;
}

export default function ProjectCard({ thumbnail, name, description, hostUrl, repoUrl }: ProjectCardProps) {
    return (
        <div className="w-full h-full p-4 flex flex-col justify-between space-y-4 rounded-xl bg-gradient-to-br from-black/20 to-lime-500/30 backdrop-blur-lg">
            <div className="w-full h-36 overflow-hidden rounded-md flex justify-center items-center bg-black/20">
                <img
                    className="max-h-full max-w-full object-contain"
                    src={thumbnail?.trim() ? thumbnail : '/no-image-provided.png'}
                    alt="thumbnail"
                />
            </div>

            <p className="font-bold text-lg bg-gradient-to-r from-lime-300 via-emerald-500 to-lime-600 bg-clip-text text-transparent">
                {name.trim() ? name : 'No project name is provided'}
            </p>

            <p className="text-sm text-gray-400 text-justify min-h-15 md:min-h-40 overflow-hidden text-ellipsis line-clamp-7">
                {description.trim() ? description : 'No description is provided.'}
            </p>

            <div className="flex justify-around pt-2">
                <a href="#"><button className=" outline-1 outline-lime-400 p-2 rounded-full hover:shadow-lime-400/50"><Eye className="size-5" /></button></a>
                {hostUrl && (
                    <a href={hostUrl}><button className=" outline-1 outline-lime-400 p-2 rounded-full hover:shadow-lime-400/50"><Globe className="size-5" /></button></a>
                )}
                <a href={repoUrl}><button className="outline-1 outline-lime-400 p-2 rounded-full hover:shadow-lime-400/50"><GitBranch className="size-5" /></button></a>
            </div>
        </div>
    )
}