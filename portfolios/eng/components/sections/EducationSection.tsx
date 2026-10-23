import { education } from "@/data/education";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { Reveal } from "@/components/primitives/Reveal";
import { Card } from "@/components/primitives/Card";

export function EducationSection() {
  return (
    <section id="education" className="px-6 md:px-12 py-16 md:py-24 border-b border-border">
      <Reveal>
        <SectionLabel num="03" label="Education" />
        <h2 className="font-display font-bold text-[clamp(28px,5vw,52px)] leading-[1.05] mb-12 text-text">
          Education
        </h2>
      </Reveal>

      <div className="space-y-3">
        {education.map((edu) => (
          <Reveal key={`${edu.schoolName}-${edu.subHeader}`}>
            <Card
              header={
                <>
                  <div className="flex justify-between items-start flex-wrap gap-2 pr-2">
                    <p className="font-display font-semibold text-base text-text">{edu.schoolName}</p>
                    {edu.grade && (
                      <span className="font-mono text-xs text-signal rounded-full border border-signal/40 px-2.5 py-0.5">
                        {edu.grade}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-soft mt-1">{edu.subHeader}</p>
                  <p className="text-xs text-dim font-mono mt-1">{edu.duration}</p>
                </>
              }
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
