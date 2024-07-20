import React from 'react';
import './AboutMe.style.css';

const AboutMe = () => {

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
                <p>A brief introduction about yourself.</p>
            </section>

            <section id="projects" className="projects">
                <h2>Projects</h2>
                <div className="project-cards">
                </div>
            </section>

            <section id="skills" className="skills">
                <h2>Skills</h2>
                <div className="skill-list">
                </div>
            </section>

            <section id="experience" className="experience">
                <h2>Experience</h2>
                <div className="experience-timeline">
                </div>
            </section>

            <section id="contact" className="contact">
                <h2>Contact</h2>
                <form>
                </form>
                <div className="social-links">
                </div>
            </section>

            <footer>
                <p>&copy; 2024 Haku. All rights reserved.</p>
            </footer>

        </div>
    );
}

export default AboutMe;