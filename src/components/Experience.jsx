import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "Senior Frontend Developer",
            company: "Tech Corp",
            period: "2023 - Present",
            description: "Leading the frontend team, architecting scalable React applications, and mentoring junior developers."
        },
        {
            id: 2,
            role: "Full Stack Developer",
            company: "Startup Inc",
            period: "2021 - 2023",
            description: "Developed and maintained full-stack web applications using MERN stack. Implemented CI/CD pipelines."
        },
        {
            id: 3,
            role: "Junior Web Developer",
            company: "Web Solutions",
            period: "2019 - 2021",
            description: "Collaborated with designers to translate UI/UX designs into responsive web pages using HTML, CSS, and jQuery."
        }
    ];

    return (
        <section className="experience section" id="experience">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="timeline">
                    {experiences.map((exp) => (
                        <div className="timeline-item" key={exp.id}>
                            <div className="timeline-content glass">
                                <span className="date">{exp.period}</span>
                                <h3>{exp.role}</h3>
                                <h4>{exp.company}</h4>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
