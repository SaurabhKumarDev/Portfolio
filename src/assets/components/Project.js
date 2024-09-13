import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { projectData } from "../json/Project";

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card-container">
            <div className="project-card-left">
                <img src={project.image} className="project-card-image" alt={project.projectName} />
            </div>
            <div className="project-card-right">
                <h5 className="card-title">{project.projectName}</h5>
                        <p className="card-text my-2">{project.description}</p>
                <p className="card-text">
                    {project.technologiesUsed.map((tag, index) => (
                        <span key={index} className="badge bg-secondary me-2">{tag}</span>
                    ))}
                </p>
                <p className="card-text">
                    <small className="text-muted">{project.createdDate}</small>
                </p>
                <div className='d-flex gap-4'>
                    {project.repositoryLink && <a href={project.repositoryLink} className="btn btn-outline-info">Read More</a>}
                    {project.liveProjectLink && <a href={project.liveProjectLink} className="btn btn-outline-success ">Live</a>}
                </div>
            </div>
        </div>
    ); 
};

const ProjectList = () => {
    return (
        <div className="container mt-2 mt-md-5">
            <h2 className="project-heading text-light">
                <span className="highlight">P</span>r<span className="highlight">o</span>j<span className="highlight">ec</span>ts
            </h2>
            {projectData.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
};

export default ProjectList;