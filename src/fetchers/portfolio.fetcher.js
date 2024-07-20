
export const fetchSummary = async () => {
    const res = await fetch('/data/portfolio/summary.md');
    const data = await res.text();
    return data;
}

export const fetchContact = async () => {
    const res = await fetch('/data/portfolio/contact.md');
    const data = await res.text();
    return data;
}

export const fetchExperience = async () => {
    const res = await fetch('/data/portfolio/experience.md');
    const data = await res.text();
    return data;
}

export const fetchProjects = async () => {
    const res = await fetch('/data/portfolio/projects.md');
    const data = await res.text();
    return data;
}

export const fetchSkills = async () => {
    const res = await fetch('/data/portfolio/skills.md');
    const data = await res.text();
    return data;
}
