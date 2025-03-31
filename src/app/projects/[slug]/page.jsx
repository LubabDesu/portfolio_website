import {
    getAllProjects,
    getAllProjectSlugs,
    getProjectBySlug,
} from "../../lib/projects.mjs";

export default function ProjectPage({ params }) {
    const project = getProjectBySlug(params.slug);
    if (!project) {
        return <div>Project not found...</div>;
    }
    return (
        <div>
            <h2>{project.title}</h2>
            <p>{project.details}</p>
        </div>
    );
}

export async function generateStaticParams() {
    const paths = await getAllProjectSlugs();
    return paths.map((path) => path.params);
}

// export async function generateStaticParams() {
//     // This function tells Next.js which slugs to pre-generate
//     const projects = await getAllProjects(); // Your data fetching function

//     return projects.map((project) => ({
//         slug: project.id,
//     }));
// }
