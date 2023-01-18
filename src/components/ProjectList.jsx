import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../projects.json";

export default function ProjectList(json) {

  const projectList = projects.map((project) => {
    return (
      <ProjectCard
        key={project.id}
        title={project.title}
        image={project.image}
        description={project.description}
        href={project.href}
        tags={project.tags}
      />
    );
  });

  return (
    <div id="projects">
      <h2 class="decorated">
        <span>Projetos</span>
      </h2>
      <ul id="project-list">
        {projectList}
      </ul>
    </div>
  );
}
