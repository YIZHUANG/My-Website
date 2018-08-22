import React from 'react';

const ProjectCard = ({ data }) => {
  return (
    <div className="project-card">
      <div className="project-card--title">{data.title}</div>
      <div className="project-card--description">{data.description}</div>
      <div className="project-card--stacks">
        {data.stacks.map((tech, index) => (
          <span key={index} className="project-card--stacks-tech">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
