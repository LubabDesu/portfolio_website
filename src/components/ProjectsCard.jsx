import Link from "next/link";

export const ProjectsCard = ({ project }) => {
    return (
        <Link href={`./projects/${project.id}`}>
            <section className="buttonCard">
                <h2 className="project-header">{project.title}</h2>
                <p>{project.description}</p>
            </section>
        </Link>
    );
};
