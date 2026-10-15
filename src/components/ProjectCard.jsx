import { ArrowUpRight, ImageOff } from "lucide-react";
import { GitHubIcon } from "./BrandIcons.jsx";

const pillTone = {
  violet: "bg-violet-pill text-violet-tint",
  pink: "bg-pink-pill text-pink-soft",
};

function Screenshot({ project, className = "" }) {
  if (!project.image) {
    return (
      <div
        className={`flex aspect-[16/10] flex-col items-center justify-center gap-2 rounded-[14px] border border-[#3a3d5a] bg-[#2e3150] text-subtle ${className}`}
      >
        <ImageOff size={28} aria-hidden />
        <span className="font-mono text-[13px]">Screenshot coming soon</span>
      </div>
    );
  }
  return (
    <img
      src={project.image}
      alt={project.imageAlt}
      loading="lazy"
      decoding="async"
      width="1310"
      height="819"
      className={`aspect-[16/10] w-full rounded-[14px] border border-[#3a3d5a] object-cover object-left-top ${className}`}
    />
  );
}

/*
  One card for every project. `featured` switches to a wide side-by-side
  layout; everything else comes from the project object.
*/
export default function ProjectCard({ project }) {
  const { featured } = project;
  const titleId = `${project.id}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className={`card-3d card-tilt flex flex-col gap-5 rounded-3xl ${
        featured ? "p-6 sm:p-8 lg:flex-row lg:items-center lg:gap-11" : "p-6"
      }`}
    >
      <Screenshot
        project={project}
        className={featured ? "lg:w-[54%] lg:shrink-0" : ""}
      />

      <div className="flex min-w-0 flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag.label} className={`pill ${pillTone[tag.tone]}`}>
              {tag.label}
            </span>
          ))}
        </div>

        <h3
          id={titleId}
          className={`font-display font-bold tracking-[-0.02em] ${featured ? "text-3xl" : "text-2xl"}`}
        >
          {project.name}
        </h3>
        <p className="text-muted">{project.description}</p>

        <ul className="flex flex-wrap gap-2" aria-label="Key features">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="rounded-full bg-text px-3 py-1.5 text-[13px] font-semibold text-ink"
            >
              {feature}
            </li>
          ))}
        </ul>

        <dl className="flex flex-col gap-2.5 text-[15px]">
          <div className="flex gap-3">
            <dt className="w-[52px] shrink-0 font-semibold text-white">Role</dt>
            <dd className="text-muted">{project.role}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-[52px] shrink-0 font-semibold text-white">
              Stack
            </dt>
            <dd className="text-muted">{project.stack.join(" · ")}</dd>
          </div>
        </dl>

        {project.stats && (
          <p className="flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-[13px] text-pink-soft">
            {project.stats.map((stat) => (
              <span key={stat}>{stat}</span>
            ))}
          </p>
        )}

        <div className="mt-auto flex flex-wrap gap-3 pt-1">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-3d inline-flex min-h-[46px] items-center gap-2 rounded-xl px-5 text-[15px] font-semibold"
            >
              Live demo <ArrowUpRight size={16} aria-hidden />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-line-strong px-5 text-[15px] font-semibold text-white transition-colors hover:border-violet"
          >
            <GitHubIcon width={16} height={16} /> Source code
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </article>
  );
}
