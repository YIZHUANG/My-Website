import React from "react";
import ProjectCard from "./common/ProjectCard";

import "./ProjectSection.scss";

const ProjectSection = ({ projects }) => {
  return (
    <div className="project-section__container">
      {projects
        ? projects.map((project, index) => (
            <ProjectCard key={index} data={project} />
          ))
        : null}
    </div>
  );
};

export default ProjectSection;
