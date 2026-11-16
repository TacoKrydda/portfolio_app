import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectFilters, projects, type ProjectFilter } from "../data/projects";

export default function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("Alla");

  const visible =
    filter === "Alla" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section
      id="projekt"
      tabIndex={-1}
      className="section section--tint"
      aria-labelledby="projekt-title"
    >
      <div className="container">
        <h2 id="projekt-title">Projekt</h2>
        <p className="section__lead">
          Ett urval av skol-, grupp- och egna projekt. Öppna ett projekt för att
          läsa mer om vad jag gjorde.
        </p>

        <div className="filters" role="group" aria-label="Filtrera projekt">
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              className="chip"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <p className="sr-only" role="status" aria-live="polite">
          Visar {visible.length} projekt
          {filter !== "Alla" ? ` inom ${filter}` : ""}.
        </p>

        <div className="grid">
          {visible.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
