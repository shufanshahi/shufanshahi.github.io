import { socialLinks } from "@/data/social";
import { hero } from "@/data/hero";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { Reveal } from "@/components/primitives/Reveal";
import { GithubIcon, LinkedinIcon } from "@/components/primitives/icons";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 md:px-12 py-16 md:py-24">
      <Reveal>
        <SectionLabel num="07" label="Contact" />
        <h2 className="font-display font-bold text-[clamp(28px,5vw,52px)] leading-[1.05] mb-4 text-text">
          Get in touch
        </h2>
        <p className="text-sm text-soft max-w-md mb-8">
          Have a project in mind, or just want to talk research and AI? My inbox is open.
        </p>

        <a
          href={socialLinks.email}
          className="inline-block max-w-full break-all rounded-md bg-signal px-5 py-2.5 font-sans text-sm font-medium text-bg transition-all duration-200 hover:bg-signal-dim hover:shadow-[0_0_28px_-6px_var(--color-signal)] active:scale-[0.97] mb-8"
        >
          {socialLinks.email.replace("mailto:", "")}
        </a>

        <div className="flex flex-wrap gap-2">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-md px-4 py-2 border border-border font-mono text-xs text-dim transition-all duration-150 hover:text-text hover:border-muted hover:bg-elevated active:scale-[0.96]"
          >
            <GithubIcon /> GitHub
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-md px-4 py-2 border border-border font-mono text-xs text-dim transition-all duration-150 hover:text-text hover:border-muted hover:bg-elevated active:scale-[0.96]"
          >
            <LinkedinIcon /> LinkedIn
          </a>
        </div>
      </Reveal>

      <footer className="border-t border-border mt-16 pt-6 text-xs text-dim font-mono">
        © {new Date().getFullYear()} {hero.name}
      </footer>
    </section>
  );
}
