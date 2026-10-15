import { profile } from "../data/profile.js";

const cardBase = "card-3d card-lift flex flex-col gap-1 px-6 py-5 text-left";

export default function Contact() {
  const channels = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "LinkedIn", value: "hana-berhe-dev ↗", href: profile.linkedin },
    { label: "GitHub", value: "hana-Berhe ↗", href: profile.github },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line-soft bg-ink-2">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-10 px-5 pb-24 pt-20 text-center sm:px-8 md:pt-28">
        <div className="flex flex-col items-center gap-3.5">
          <h2
            id="contact-title"
            className="font-display text-[34px] font-bold tracking-[-0.02em] sm:text-5xl"
          >
            Let's build something <span className="text-violet">together</span>.
          </h2>
          <p className="max-w-[560px] text-lg text-muted">
            I'm looking for a junior full-stack role or internship where I can contribute, learn
            from experienced engineers, and grow.
          </p>
        </div>

        {/* Plain links instead of a form: no backend or form service needed */}
        <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c) => (
            <a key={c.label} href={c.href} className={cardBase}>
              <span className="font-mono text-xs text-subtle">{c.label}</span>
              <span className="break-words font-semibold text-white">{c.value}</span>
            </a>
          ))}
          <a
            href={profile.resume}
            download
            className="card-lift flex flex-col gap-1 rounded-[20px] bg-action px-6 py-5 text-left shadow-[inset_0_1px_0_rgb(255_255_255/0.25),0_6px_0_#4744c9,0_22px_40px_-14px_rgb(113_111_255/0.6)] transition-transform"
          >
            <span className="font-mono text-xs text-[#e6e5ff]">Résumé</span>
            <span className="font-semibold text-white">Download PDF ↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
