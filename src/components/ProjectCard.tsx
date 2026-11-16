import { Link } from "react-router";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const typeClass = `type--${project.type.toLowerCase()}`;

  return (
    <article className={`card ${typeClass}`}>
      <p className={`badge ${typeClass}`}>
        {project.type}, {project.year}
      </p>
      <h3 className="card__title">
        <Link to={`/projekt/${project.slug}`} className="card__link">
          {project.title}
        </Link>
      </h3>
      <p>{project.summary}</p>
      <ul className="tags" aria-label="Teknik">
        {project.tech.slice(0, 4).map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </article>
  );
}
