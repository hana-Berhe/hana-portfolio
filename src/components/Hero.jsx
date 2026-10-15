import { ArrowRight, Download } from "lucide-react";
import photo from "../assets/hana-berhe.webp";
import { profile } from "../data/profile.js";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons.jsx";

const iconLink =
  "inline-flex size-[52px] items-center justify-center rounded-xl border border-line text-[#c3c4dc] transition-colors hover:border-violet hover:text-white";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="mx-auto grid max-w-[1180px] items-center gap-16 px-5 pb-28 pt-16 sm:px-8 md:pt-24 lg:grid-cols-[1fr_400px]"
    >
      <div className="flex flex-col gap-6">
        <p className="inline-flex items-center gap-2.5 font-mono text-[13px] text-muted">
          <span aria-hidden className="size-2 rounded-full bg-ok" />
          {profile.availability} · Winnipeg
        </p>

        <h1
          id="hero-title"
          className="font-display text-[50px] font-bold leading-[1.02] tracking-[-0.03em] text-white sm:text-[72px]"
        >
          Hana <span className="text-violet">Berhe</span>
        </h1>

        <div className="flex flex-col gap-2.5">
          <p className="font-display text-2xl font-medium tracking-[-0.01em] sm:text-[30px]">
            {profile.title}
          </p>
          <span aria-hidden className="h-1 w-[72px] rounded-sm bg-pink" />
        </div>

        <p className="max-w-[560px] text-[19px] text-muted">
          I build full-stack web apps with React, Node.js and MySQL, including AI features like
          semantic search and RAG. Most recently, I led an 8-member team to ship an AI-powered
          developer forum.
        </p>

        <div className="flex flex-wrap items-center gap-3.5 pt-1.5">
          <a
            href="#projects"
            className="btn-3d inline-flex min-h-[52px] items-center gap-2.5 rounded-xl px-6 font-semibold"
          >
            View projects <ArrowRight size={18} aria-hidden />
          </a>
          <a
            href={profile.resume}
            download
            className="inline-flex min-h-[52px] items-center gap-2.5 rounded-xl border border-line-strong px-6 font-semibold text-white transition-colors hover:border-violet"
          >
            <Download size={18} aria-hidden /> Download résumé
          </a>
          <a href={profile.github} aria-label="GitHub profile" className={iconLink}>
            <GitHubIcon />
          </a>
          <a href={profile.linkedin} aria-label="LinkedIn profile" className={iconLink}>
            <LinkedInIcon />
          </a>
        </div>
      </div>

      <figure className="relative mx-auto w-full max-w-[380px]">
        <img
          src={photo}
          alt="Hana Berhe"
          width="576"
          height="720"
          fetchPriority="high"
          className="aspect-[4/5] w-full rounded-t-[200px] rounded-b-3xl border border-line bg-raised object-cover object-[40%_20%] outline outline-1 outline-offset-[12px] outline-violet"
        />
        <figcaption className="absolute bottom-9 left-2 flex flex-col gap-0.5 rounded-2xl border border-line bg-raised px-4 py-3 sm:-left-3">
          <span className="font-mono text-[11px] text-muted">Background</span>
          <span className="text-sm font-semibold text-white">Electrical Eng. → Software</span>
        </figcaption>
      </figure>
    </section>
  );
}
