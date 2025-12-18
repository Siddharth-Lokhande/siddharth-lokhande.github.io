import React from 'react';
import './Skills.css';

const Skills = () => {
    const skills = [
        { name: "JavaScript", level: "90%" },
        { name: "React", level: "85%" },
        { name: "Node.js", level: "80%" },
        { name: "CSS/SASS", level: "90%" },
        { name: "Java", level: "75%" },
        { name: "SQL", level: "70%" },
        { name: "Git", level: "85%" },
        { name: "Python", level: "60%" }
    ];

    return (
        <section className="skills section" id="about">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div className="skill-card glass" key={index}>
                            <h3>{skill.name}</h3>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: skill.level }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
