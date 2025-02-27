import fs from "fs";
import path from "path";

const dataDirectory = path.join(process.cwd(), "src/app/data");

export function getAllProjects() {
    const filePath = path.join(dataDirectory, "projects.json");

    const fileContents = fs.readFileSync(filePath);
    const projects = JSON.parse(fileContents);

    return projects;
}

getAllProjects();
