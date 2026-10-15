import SectionHeading from "./SectionHeading.jsx";
import { skillGroups } from "../data/skills.js";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-line-soft">
      <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading id="skills-title" title="Technical" highlight="Skills" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="card-3d flex flex-col gap-4 p-7">
              <h3 className="pill self-start bg-violet-pill text-violet-tint">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-[10px] border border-[#3a3d5a] px-3 py-1.5 text-[15px] font-medium text-[#e4e4f2]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
