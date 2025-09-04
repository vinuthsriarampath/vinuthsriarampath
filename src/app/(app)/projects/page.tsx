"use client";

import ProjectCard from "@/app/components/app/project/project-card";
import SubSection from "@/app/components/shared/sub-section";
import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {Project} from "@/types/Project";
import ProjectCardSkeleton from "@/app/components/app/skeletons/project-card-skeleton";

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const BASE_URL = process.env.NEXT_PUBLIC_VYNEX_BASE_URL || "";

    useEffect(() => {

        const getProjects = async () => {
            try {
                const response:AxiosResponse = await axios.get(
                    `${BASE_URL}/api/open/projects/show-case`,
                )
                setProjects(response.data);
                setLoading(false);
            }catch (error) {
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
        getProjects();
    }, []);
    return(
        <SubSection>
            <h1 className="font-bold text-4xl md:text-7xl">All <span className="bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-600 bg-clip-text text-transparent">Projects.</span></h1>
            <div className="grid grid-cols-1 justify-center items-center md:grid-cols-3 lg:grid-cols-4 gap-4 md-10 md:mb-20">
                {loading && (
                    <>
                        {Array.from({ length: 12 }).map((_, idx) => (
                            <ProjectCardSkeleton key={idx} />
                        ))}
                    </>
                )}
                {projects.map((project:any) => (
                    <ProjectCard
                        key={project.id}
                        thumbnail={project.thumbnail || "/no-image-provided.png"}
                        name={project.project_name}
                        description={project.description}
                        hostUrl={project.host_url ? project.host_url : ""}
                        repoUrl={project.html_url}
                    />
                ))}
            </div>
        </SubSection>
    )
}