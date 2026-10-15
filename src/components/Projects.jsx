import SectionHeading from "./SectionHeading.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-line-soft bg-ink-2">
      <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          id="projects-title"
          title="Featured"
          highlight="Projects"
          subtitle="Applications I designed, built and shipped — with my role in each."
        />

        <div className="flex flex-col gap-8">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          <div className="grid gap-8 md:grid-cols-2">
            {others.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
