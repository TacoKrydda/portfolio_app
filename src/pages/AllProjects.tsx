import { useEffect } from "react";
import { useSearchParams } from "react-router";
import ProjectCard from "../components/ProjectCard";
import ProjectFilter from "../components/ProjectFilter";
import { categories, projects, type CategoryFilter } from "../data/projects";

export default function AllProjects() {
  const [params, setParams] = useSearchParams();
  const selected: CategoryFilter =
    categories.find((c) => c.toLowerCase() === params.get("kategori")) ??
    "Alla";

  const visible =
    selected === "Alla"
      ? projects
      : projects.filter((p) => p.categories.includes(selected));

  useEffect(() => {
    document.title = "Alla projekt – Jonathan Berhane";
  }, []);

  const handleChange = (next: CategoryFilter) => {
    setParams(next === "Alla" ? {} : { kategori: next.toLowerCase() }, {
      replace: true,
    });
  };

  return (
    <section className="section projects" aria-labelledby="alla-projekt-title">
      <div className="container">
        <h1 id="alla-projekt-title" className="projects-page__title">
          Alla projekt
        </h1>

        <ProjectFilter value={selected} onChange={handleChange} />

        <p className="sr-only" role="status">
          Visar {visible.length} projekt
          {selected !== "Alla" ? ` inom ${selected}` : ""}.
        </p>

        {visible.length > 0 ? (
          <div className="grid">
            {visible.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        ) : (
          <p className="projects-page__empty">
            Det finns inga projekt i den här kategorin ännu.
          </p>
        )}
      </div>
    </section>
  );
}
