import SectionHeading from "./SectionHeading.jsx";
import { profile } from "../data/profile.js";

const facts = [
  { label: "Role", value: "Junior Full-Stack Developer" },
  {
    label: "Education",
    value: "B.Sc. Electrical Engineering, Haramaya University",
  },
  { label: "Focus", value: "Full-stack + applied AI" },
  { label: "Location", value: profile.location },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-t border-line-soft bg-ink-2"
    >
      <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading id="about-title" title="About" highlight="Me" />

        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col gap-5 text-muted">
            <p className="font-display text-[22px] font-semibold leading-snug text-white">
              An electrical engineer who found her craft in building software.
            </p>
            <p>
              I’m a junior full-stack developer based in Winnipeg, Canada, with
              a background in electrical engineering, technical leadership, and
              business management.
            </p>
            <p>
              After six months of full-stack development training, I’ve built
              applications using React, Node.js, Express, MySQL, and Gemini AI.
            </p>
            <p>
              I enjoy solving complex problems, understanding how systems work,
              and collaborating with others to build practical, user-focused
              applications.
            </p>
          </div>

          <dl className="card-3d flex flex-col self-start px-7 py-2">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex gap-4 border-b border-line py-4"
              >
                <dt className="w-[110px] shrink-0 font-semibold text-white">
                  {fact.label}
                </dt>
                <dd className="text-muted">{fact.value}</dd>
              </div>
            ))}
            <div className="flex gap-4 py-4">
              <dt className="w-[110px] shrink-0 font-semibold text-white">
                Email
              </dt>
              <dd className="min-w-0 break-words">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-violet-soft underline hover:text-white"
                >
                  {profile.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
