import React, { useEffect, useState } from "react";
import "./AboutMe.style.css";
import { marked } from "marked";
import {
  fetchBio,
  fetchSummary,
  fetchProjects,
  fetchSkills,
  fetchExperience,
  fetchContact,
} from "../../fetchers/portfolio.fetcher";
import { ButtonLink } from "../../components/button";

const AboutMe = () => {
  const [bio, setBio] = useState("");
  const [summary, setSummary] = useState("");
  const [projects, setProjects] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [contact, setContact] = useState("");

  const loadContent = async (getContent, setContent) => {
    const content = await getContent();
    setContent(marked.parse(content));
  };

  useEffect(() => {
    loadContent(fetchBio, setBio);
    loadContent(fetchSummary, setSummary);
    loadContent(fetchProjects, setProjects);
    loadContent(fetchSkills, setSkills);
    loadContent(fetchExperience, setExperience);
    loadContent(fetchContact, setContact);
  }, []);

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          {bio ? (
            <main dangerouslySetInnerHTML={{ __html: bio }} />
          ) : (
            <p>Loading...</p>
          )}
          <ButtonLink href="#contact">Contact Me</ButtonLink>
        </div>
      </section>

      <section id="summary" className="summary">
        <h2>Summary</h2>
        <div className="summary-cards">
          {summary ? (
            <main dangerouslySetInnerHTML={{ __html: summary }} />
          ) : (
            <p>Loading...</p>
          )}
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
        <p>&copy; 2024 Devlogex. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutMe;
