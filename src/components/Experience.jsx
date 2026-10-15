import SectionHeading from "./SectionHeading.jsx";
import { experience } from "../data/experience.js";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-title" className="border-t border-line-soft">
      <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading id="exp-title" title="Education &" highlight="Experience" />

        <ol className="grid gap-6 md:grid-cols-2">
          {experience.map((item) => (
            <li key={item.title} className="card-3d flex flex-col gap-2.5 p-7 md:odd:last:col-span-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="pill bg-violet-pill text-violet-tint">{item.tag}</span>
                <span className="font-mono text-[13px] text-subtle">{item.when}</span>
              </div>
              <h3 className="mt-1 font-display text-[21px] font-semibold text-white">{item.title}</h3>
              <p className="text-[15px] font-medium text-pink-soft">{item.org}</p>
              <p className="text-base text-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
