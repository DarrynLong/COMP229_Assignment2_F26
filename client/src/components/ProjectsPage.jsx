/*
    Author: Darryn Long
    Date: 09/27/2026
    Projects Page
*/

import PageIntro from "./PageIntro";
import { projects } from "../data/portfolioData";

// Data for project cards is stored in portfolioData.js
export default function ProjectsPage() {
  return (
    <>
      <PageIntro eyebrow="Selected work" title="Projects with a point of view." copy="My current collection of games and interactive experiments." />
      <section className="project-grid">
        {projects.map((project) => (
        <article className="project-card" key={project.title}>
            <img src={project.image} alt={`${project.title} project screenshot`} />
            <div className="project-card-body">
            <p className="eyebrow">{project.type}</p>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            </div>
        </article>
        ))}
      </section>
    </>
  );
}
