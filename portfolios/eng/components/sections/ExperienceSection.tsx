import { experience } from "@/data/experience";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { Reveal } from "@/components/primitives/Reveal";
import { Card } from "@/components/primitives/Card";

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 md:px-12 py-16 md:py-24 border-b border-border">
      <Reveal>
        <SectionLabel num="02" label="Experience" />
        <h2 className="font-display font-bold text-[clamp(28px,5vw,52px)] leading-[1.05] mb-12 text-text">
          Where I&apos;ve worked
        </h2>
      </Reveal>

      <div className="space-y-4">
        {experience.map((job) => (
          <Reveal key={`${job.company}-${job.role}`}>
            <Card
              header={
                <>
                  <p className="font-display font-semibold text-base text-text">{job.company}</p>
                  <p className="text-xs text-signal font-medium mt-1">{job.role}</p>
                  <p className="text-xs text-dim font-mono mt-1">{job.date}</p>
                  <p className="text-sm text-soft leading-relaxed mt-3">{job.desc}</p>
                  {job.bullets.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {job.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-xs text-dim leading-relaxed">
                          <span className="text-edge">—</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              }
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
