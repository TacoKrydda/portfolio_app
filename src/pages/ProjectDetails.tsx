import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { getProject } from "../data/projects";
import { ExternalLinkIcon } from "../components/Icons";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProject(slug);

  useEffect(() => {
    document.title = project
      ? `${project.title} – Jonathan Berhane`
      : "Projektet hittades inte – Jonathan Berhane";
  }, [project]);

  if (!project) {
    return (
      <div className="container detail">
        <h1>Projektet hittades inte</h1>
        <p>Länken kan vara felaktig, eller så har projektet tagits bort.</p>
        <Link className="btn btn--primary" to="/#projekt">
          Se alla projekt
        </Link>
      </div>
    );
  }

  const typeClass = `type--${project.type.toLowerCase()}`;

  return (
    <article className="container detail">
      <nav aria-label="Brödsmulor">
        <Link className="back-link" to="/#projekt">
          <span aria-hidden="true">←</span> Alla projekt
        </Link>
      </nav>

      <header className="detail__header">
        <p className={`badge ${typeClass}`}>{project.type}</p>
        <h1>{project.title}</h1>
        <p className="detail__lead">{project.summary}</p>
      </header>

      <dl className="facts">
        <div>
          <dt>År</dt>
          <dd>{project.year}</dd>
        </div>
        <div>
          <dt>Min roll</dt>
          <dd>{project.role}</dd>
        </div>
      </dl>

      <section aria-labelledby="om-projektet">
        <h2 id="om-projektet">Om projektet</h2>
        <p>{project.description}</p>
      </section>

      <section aria-labelledby="funktioner">
        <h2 id="funktioner">Det här gjorde jag</h2>
        <ul className="checklist">
          {project.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="teknik">
        <h2 id="teknik">Teknik</h2>
        <ul className="tags" aria-label="Teknik som användes">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>

      {(project.liveUrl || project.repoUrl) && (
        <div className="actions">
          {project.liveUrl && (
            <a
              className="btn btn--primary"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Öppna live-versionen
              <span className="sr-only"> (öppnas i ny flik)</span>
              <ExternalLinkIcon />
            </a>
          )}
          {project.repoUrl && (
            <a
              className="btn btn--secondary"
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Se koden på GitHub
              <span className="sr-only"> (öppnas i ny flik)</span>
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      )}
    </article>
  );
}
