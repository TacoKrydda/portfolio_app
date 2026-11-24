import { Link } from "react-router";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const FEATURED_COUNT = 3;

export default function Projects() {
  return (
    <section
      id="projekt"
      tabIndex={-1}
      className="section projects"
      aria-labelledby="projekt-title"
    >
      <div className="container">
        <h2 id="projekt-title" className="projects__title">
          Utvalda projekt
        </h2>
        <p className="section__lead">
          Ett urval av skol-, grupp- och egna projekt. Öppna ett projekt för att
          läsa mer om vad jag gjorde.
        </p>

        <div className="grid">
          {projects.slice(0, FEATURED_COUNT).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        <div className="projects__more">
          <Link className="btn btn--primary" to="/projekt">
            Visa alla projekt
          </Link>
        </div>
      </div>
    </section>
  );
}
