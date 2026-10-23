import { skillGroups } from "@/data/skills";
import { skillIcons } from "@/lib/skillIcons";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { Reveal } from "@/components/primitives/Reveal";

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 md:px-12 py-16 md:py-24 border-b border-border">
      <Reveal>
        <SectionLabel num="01" label="Skills" />
        <h2 className="font-display font-bold text-[clamp(28px,5vw,52px)] leading-[1.05] text-text">
          Tools I work with
        </h2>
        <p className="mt-1 mb-12 font-sans text-[13px] italic text-muted">
          Languages, frameworks, and platforms I use day to day
        </p>
      </Reveal>

      <div className="space-y-10">
        {skillGroups.map((group) => (
          <Reveal key={group.title} className="grid md:grid-cols-[1fr_1.2fr] gap-8 border-t border-border pt-8">
            <div>
              <h3 className="font-display font-semibold text-lg mb-4 text-text">{group.title}</h3>
              <ul className="space-y-2.5">
                {group.capabilities.map((c) => (
                  <li key={c} className="flex gap-3 text-sm text-soft leading-relaxed">
                    <span className="text-edge mt-0.5">—</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap content-start gap-2">
              {group.skills.map((skill) => {
                const icon = skillIcons[skill];
                return (
                  <span
                    key={skill}
                    className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1 font-mono text-xs text-soft transition-all duration-150 hover:text-text hover:border-muted hover:bg-elevated"
                  >
                    {icon && (
                      <svg
                        viewBox="0 0 24 24"
                        width="13"
                        height="13"
                        fill="currentColor"
                        className="shrink-0 opacity-80"
                        aria-hidden="true"
                      >
                        <path d={icon.path} />
                      </svg>
                    )}
                    {skill}
                  </span>
                );
              })}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
