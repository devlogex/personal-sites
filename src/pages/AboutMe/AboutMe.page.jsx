import React, { useEffect, useState } from 'react';
import './AboutMe.style.css';
import { marked } from 'marked';

const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState('');
    const [projects, setProjects] = useState('');
    const [skills, setSkills] = useState('');
    const [experience, setExperience] = useState('');
    const [contact, setContact] = useState('');

    useEffect(() => {
        fetch('/data/portfolio/about_me.md')
            .then(response => response.text())
            .then(text => setAboutMe(marked.parse(text)));
        fetch('/data/portfolio/projects.md')
            .then(response => response.text())
            .then(text => setProjects(marked.parse(text)));
        fetch('/data/portfolio/skills.md')
            .then(response => response.text())
            .then(text => setSkills(marked.parse(text)));
        fetch('/data/portfolio/experience.md')
            .then(response => response.text())
            .then(text => setExperience(marked.parse(text)));
        fetch('/data/portfolio/contact.md')
            .then(response => response.text())
            .then(text => setContact(marked.parse(text)));
    }, []);

    return (
        <div>
            <section className="hero">
                <div className="hero-content">
                    <h1>Haku</h1>
                    <p>Backend Developer, Blockchain Enthusiast</p>
                    <a href="#contact" className="btn">Contact Me</a>
                </div>
            </section>

            <section id="about" className="about">
                <h2>About Me</h2>
                <div className="about-me-cards">
                    <main dangerouslySetInnerHTML={{ __html: aboutMe }} />
                </div>
            </section>

            <section id="projects" className="projects">
                <h2>Projects</h2>
                <div className="project-cards">
                    <main dangerouslySetInnerHTML={{ __html: projects }} />
                </div>
            </section>

            <section id="skills" className="skills">
                <h2>Skills</h2>
                <div className="skill-list">
                    <main dangerouslySetInnerHTML={{ __html: skills }} />
                </div>
            </section>

            <section id="experience" className="experience">
                <h2>Experience</h2>
                <div className="experience-timeline">
                    <main dangerouslySetInnerHTML={{ __html: experience }} />
                </div>
            </section>

            <section id="contact" className="contact">
                <h2>Contact</h2>
                <div className="contact-link">
                    <main dangerouslySetInnerHTML={{ __html: contact }} />
                </div>
            </section>

            <footer>
                <p>&copy; 2024 Haku. All rights reserved.</p>
            </footer>

        </div>
    );
}

export default AboutMe;