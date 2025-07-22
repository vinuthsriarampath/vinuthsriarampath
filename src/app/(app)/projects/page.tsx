import ProjectCard from "@/app/components/app/project/project-card";
import SubSection from "@/app/components/shared/sub-section";

export default function ProjectsPage() {
    return(
        <SubSection>
            <h1 className="font-bold text-4xl md:text-7xl">All <span className="bg-gradient-to-r from-lime-400 via-emerald-500 to-lime-600 bg-clip-text text-transparent">Projects.</span></h1>
            <div className="grid grid-cols-1 justify-center items-center md:grid-cols-3 lg:grid-cols-4 gap-4 md-10 md:mb-20">
                <ProjectCard thumbnail="/no-image-provided.png" name="Project 1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illo, eius, corporis ut facere tempore molestias fugit vitae deleniti dolor voluptas assumenda enim sed? Similique voluptates reiciendis aliquid quos sed." hostUrl="#" repoUrl="#"/>
                <ProjectCard thumbnail="/og-image.png" name="project 2" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illo, eius, corporis ut facere tempore molestias fugit vitae deleniti dolor voluptas assumenda enim sed? Similique voluptates reiciendis aliquid quos sed." hostUrl="#" repoUrl="#"/>
                <ProjectCard thumbnail="/project-images/clothify.png" name="Project 3" description="1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illo, eius, corporis ut facere tempore molestias fugit vitae deleniti dolor voluptas assumenda enim sed? Similique voluptates reiciendis aliquid quos sed.2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illo, eius, corporis ut facere tempore molestias fugit vitae deleniti dolor voluptas assumenda enim sed? Similique voluptates reiciendis aliquid quos sed. " repoUrl="#"/>
                <ProjectCard thumbnail="/project-images/vynex.png" name="Project 4" description="" hostUrl="#" repoUrl="#"/>
                <ProjectCard thumbnail="/og-image.png" name="project 2" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illo, eius, corporis ut facere tempore molestias fugit vitae deleniti dolor voluptas assumenda enim sed? Similique voluptates reiciendis aliquid quos sed." hostUrl="#" repoUrl="#"/>
            </div>
        </SubSection>
    )
}