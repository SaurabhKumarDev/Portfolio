import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { projectData } from "../json/Project";

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card-container text-dark">
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
        <div className="container text-light py-2 mb-4">
            <h2 className="my-5 aboutHeading experience-title">
                <span className="highlight">P</span>r<span className="highlight">o</span>j<span className="highlight">ec</span>ts
            </h2>
            <div className="d-flex flex-column gap-5">
                {projectData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectList;