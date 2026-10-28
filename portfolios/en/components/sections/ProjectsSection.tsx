import { projects } from "@/data/projects";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { Reveal } from "@/components/primitives/Reveal";
import { Card } from "@/components/primitives/Card";
import { StopClickPropagation } from "@/components/primitives/StopClickPropagation";
import { GithubIcon, ExternalLinkIcon } from "@/components/primitives/icons";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 md:px-12 py-16 md:py-24 border-b border-border">
      <Reveal>
        <SectionLabel num="04" label="Projects" />
        <h2 className="font-display font-bold text-[clamp(28px,5vw,52px)] leading-[1.05] text-text">
          Projects
        </h2>
        <p className="mt-1 mb-12 font-sans text-[15px] italic text-muted">
          Full stack and applied AI work
        </p>
      </Reveal>

      <div className="space-y-4">
        {projects.map((project) => (
          <Reveal key={project.name}>
            <Card
              header={
                <>
                  <p className="font-display font-semibold text-lg text-text mb-2">{project.name}</p>
                  <p className="text-sm text-soft leading-relaxed mb-3">{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-dim"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <StopClickPropagation className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-md text-xs font-mono border border-border px-3 py-1.5 text-dim transition-all duration-150 hover:text-text hover:border-muted hover:bg-elevated active:scale-[0.96]"
                      >
                        <GithubIcon /> Code
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-md text-xs font-mono border border-border px-3 py-1.5 text-dim transition-all duration-150 hover:text-text hover:border-muted hover:bg-elevated active:scale-[0.96]"
                      >
                        <ExternalLinkIcon /> {project.linkLabel ?? "Live"}
                      </a>
                    )}
                  </StopClickPropagation>
                </>
              }
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
