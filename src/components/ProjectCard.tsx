import { Link } from "react-router";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const image = project.thumbnail ?? project.images?.[0];

  return (
    <article className="card">
      {image ? (
        <img
          className="card__image"
          src={`${import.meta.env.BASE_URL}${image.src.replace(/^\//, "")}`}
          alt=""
          width={1600}
          height={1000}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="card__image card__image--empty" aria-hidden="true">
          Ingen bild
        </div>
      )}

      <h3 className="card__title">{project.title}</h3>
      <ul className="tags" aria-label="Teknik">
        {project.tech.slice(0, 4).map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <p className="card__summary">{project.summary}</p>
      <p className="sr-only">
        {project.categories.join(", ")}, {project.year}.
      </p>

      <Link to={`/projekt/${project.slug}`} className="card__more">
        Läs mer <span aria-hidden="true">→</span>
        <span className="sr-only"> om {project.title}</span>
      </Link>
    </article>
  );
}
