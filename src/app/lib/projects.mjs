import fs from "fs";
import path from "path";

const dataDirectory = path.join(process.cwd(), "src/app/data");

export function getAllProjects() {
    const filePath = path.join(dataDirectory, "projects.json");

    const fileContents = fs.readFileSync(filePath);
    const projects = JSON.parse(fileContents);

    return projects;
}

export function getAllProjectSlugs() {
    const projects = getAllProjects();
    return projects.map((project) => {
        return {
            params: {
                slug: project.id,
            },
        };
    });
}

export function getProjectBySlug(slug) {
    const projects = getAllProjects();
    return projects.find((project) => project.id === slug);
}
