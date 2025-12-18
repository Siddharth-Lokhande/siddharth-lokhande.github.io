import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Dashboard",
            description: "A comprehensive dashboard for managing online stores, featuring real-time analytics and inventory management.",
            tags: ["React", "Node.js", "MongoDB"],
            link: "#"
        },
        {
            title: "Social Media App",
            description: "A mobile-responsive social platform with real-time messaging, file sharing, and interactive feeds.",
            tags: ["React Native", "Firebase", "Redux"],
            link: "#"
        },
        {
            title: "AI Image Generator",
            description: "An interface connecting to OpenAI's DALL-E to generate creative images from text prompts.",
            tags: ["React", "OpenAI API", "Tailwind"],
            link: "#"
        }
    ];

    return (
        <section className="projects section" id="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card glass" key={index}>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="tags">
                                    {project.tags.map((tag, i) => (
                                        <span className="tag" key={i}>{tag}</span>
                                    ))}
                                </div>
                                <a href={project.link} className="project-link">View Project &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
