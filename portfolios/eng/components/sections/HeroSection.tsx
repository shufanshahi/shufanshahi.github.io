import { hero } from "@/data/hero";
import { socialLinks } from "@/data/social";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/primitives/icons";

const graphNodes = [
  { label: "Skills", href: "#skills", y: 36 },
  { label: "Experience", href: "#experience", y: 90 },
  { label: "Education", href: "#education", y: 144 },
  { label: "Research", href: "#research", y: 198 },
  { label: "Projects", href: "#projects", y: 252 },
  { label: "Achievements", href: "#achievements", y: 306 },
  { label: "Contact", href: "#contact", y: 360 },
];

function NodeGraph() {
  const rootX = 60;
  const rootY = 198;
  const leafX = 330;

  return (
    <svg
      viewBox="0 0 490 400"
      className="hidden lg:block w-full max-w-[520px] h-auto shrink-0"
      role="navigation"
      aria-label="Section shortcuts"
    >
      {graphNodes.map((node, i) => (
        <line
          key={`edge-${node.label}`}
          x1={rootX}
          y1={rootY}
          x2={leafX}
          y2={node.y}
          stroke="var(--color-edge)"
          strokeOpacity="0.45"
          strokeWidth="1"
          className="graph-line"
          style={{ animationDelay: `${0.3 + i * 0.08}s` }}
        />
      ))}
      <path
        d={`M 330 198 Q 300 225 330 252`}
        fill="none"
        stroke="var(--color-edge)"
        strokeOpacity="0.3"
        strokeWidth="1"
        className="graph-line"
        style={{ animationDelay: "1s" }}
      />

      <g className="graph-node" style={{ animationDelay: "0.15s" }} aria-hidden="true">
        <circle cx={rootX} cy={rootY} r="7" fill="var(--color-signal)" />
      </g>

      {graphNodes.map((node, i) => (
        <g key={node.label} className="graph-node" style={{ animationDelay: `${0.5 + i * 0.08}s` }}>
          <a href={node.href} aria-label={`Jump to ${node.label} section`} className="graph-node-link">
            <circle cx={leafX} cy={node.y} r="14" fill="transparent" />
            <circle
              cx={leafX}
              cy={node.y}
              r="4"
              fill="var(--color-bg)"
              stroke="var(--color-edge)"
              strokeWidth="1.5"
              className="graph-node-dot"
            />
            <text
              x={leafX + 12}
              y={node.y + 4}
              fontFamily="var(--font-mono)"
              fontSize="11"
              fill="var(--color-dim)"
              letterSpacing="0.05em"
              className="graph-node-text"
            >
              {node.label.toUpperCase()}
            </text>
          </a>
        </g>
      ))}
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center px-6 md:px-12 py-16 sm:py-20 md:py-24 border-b border-border">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-border bg-surface">
            <span className="relative flex h-1.5 w-1.5 rounded-full bg-signal node-pulse" />
            <span className="font-mono text-[11px] tracking-[0.15em] text-soft uppercase">
              {hero.title}
            </span>
          </div>

          <h1 className="font-display font-bold leading-[1.05] text-[clamp(40px,6.5vw,76px)] text-text mb-6">
            Hi, I&apos;m Shufan.
          </h1>

          <div className="space-y-4 mb-8 max-w-xl">
            {hero.description.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-soft">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-14">
            <a
              href={hero.resumeLink}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-md bg-signal text-bg font-sans text-sm font-medium transition-all duration-200 hover:bg-signal-dim hover:shadow-[0_0_28px_-6px_var(--color-signal)] active:scale-[0.97]"
            >
              Resume
            </a>
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-md border border-border text-dim transition-all duration-200 hover:text-text hover:border-muted hover:bg-elevated active:scale-[0.94]" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-md border border-border text-dim transition-all duration-200 hover:text-text hover:border-muted hover:bg-elevated active:scale-[0.94]" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href={socialLinks.email} className="w-10 h-10 flex items-center justify-center rounded-md border border-border text-dim transition-all duration-200 hover:text-text hover:border-muted hover:bg-elevated active:scale-[0.94]" aria-label="Email">
              <MailIcon />
            </a>
          </div>

          <div className="grid grid-cols-3 max-w-md border-t border-border pt-6">
            {hero.stats.map((stat, i) => (
              <div key={stat.label} className={i < hero.stats.length - 1 ? "border-r border-border pr-2 sm:pr-4" : "pl-2 sm:pl-4"}>
                <p className="font-display font-bold text-2xl md:text-3xl text-text">
                  {stat.value}
                  <span className="text-signal">{stat.suffix}</span>
                </p>
                <p className="text-[11px] tracking-wide text-dim mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <NodeGraph />
      </div>
    </section>
  );
}
