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
} from "@/fetchers";
import { ButtonLink } from "@/components";

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
    <div id="about-me">
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

      <section id="summary" className="portfolio-card">
        <div className="portfolio-content">
          {summary ? (
            <main dangerouslySetInnerHTML={{ __html: summary }} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>

      <section id="projects" className="portfolio-card">
        <div className="portfolio-content">
          {projects ? (
            <main dangerouslySetInnerHTML={{ __html: projects }} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>

      <section id="skills" className="portfolio-card">
        <div className="portfolio-content">
          {skills ? (
            <main dangerouslySetInnerHTML={{ __html: skills }} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>

      <section id="experience" className="portfolio-card">
        <div className="portfolio-content">
          {experience ? (
            <main dangerouslySetInnerHTML={{ __html: experience }} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>

      <section id="contact" className="portfolio-card">
        <div className="portfolio-content">
          {contact ? (
            <main dangerouslySetInnerHTML={{ __html: contact }} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Devlogex. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutMe;
