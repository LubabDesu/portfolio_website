import { ProjectsCard } from "@/components/ProjectsCard";
import { getAllProjects } from "../lib/projects.mjs";

export default function Projects() {
    const projects = getAllProjects();
    return (
        <div className="card-container">
            {projects.map((project) => (
                <ProjectsCard key={projects.id} project={project} />
            ))}
        </div>
    );
}
