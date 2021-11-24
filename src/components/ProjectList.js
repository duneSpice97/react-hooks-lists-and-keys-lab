import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectsRender = projects.map((project) => {
    return (
      <ProjectItem
        key={Math.random()}
        name={project.name}
        about={project.about}
        technologies={project.technologies}
      />
    );
  });

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectsRender}</div>
    </div>
  );
}

export default ProjectList;

   {/*const info = projects.map(({ name, about }) => {
   <ProjectItem key={id} name={name} about={about} />;*/}
