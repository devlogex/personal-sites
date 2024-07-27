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
import { ButtonLink, Loading } from "@/components";

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
          <Loading isLoading={!bio}>
            <main dangerouslySetInnerHTML={{ __html: bio }} />
          </Loading>
          <ButtonLink href="#contact">Contact Me</ButtonLink>
        </div>
      </section>

      <section id="summary" className="portfolio-card">
        <div className="portfolio-content">
          <Loading isLoading={!summary}>
            <main dangerouslySetInnerHTML={{ __html: summary }} />
          </Loading>
        </div>
      </section>

      <section id="projects" className="portfolio-card">
        <div className="portfolio-content">
          <Loading isLoading={!projects}>
            <main dangerouslySetInnerHTML={{ __html: projects }} />
          </Loading>
        </div>
      </section>

      <section id="skills" className="portfolio-card">
        <div className="portfolio-content">
          <Loading isLoading={!skills}>
            <main dangerouslySetInnerHTML={{ __html: skills }} />
          </Loading>
        </div>
      </section>

      <section id="experience" className="portfolio-card">
        <div className="portfolio-content">
          <Loading isLoading={!experience}>
            <main dangerouslySetInnerHTML={{ __html: experience }} />
          </Loading>
        </div>
      </section>

      <section id="contact" className="portfolio-card">
        <div className="portfolio-content">
          <Loading isLoading={!contact}>
            <main dangerouslySetInnerHTML={{ __html: contact }} />
          </Loading>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
