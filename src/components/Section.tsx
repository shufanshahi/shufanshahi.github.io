import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  title: string;
  /** Optional short line under the heading. */
  lead?: string;
  children: ReactNode;
  /** Adds a subtle tinted background — use sparingly to break up the page. */
  tinted?: boolean;
};

/**
 * One page section: a numbered rule, a serif heading, and the content.
 * Every section is a landmark <section> labelled by its own heading.
 */
export default function Section({
  id,
  title,
  lead,
  children,
  tinted = false,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={
        tinted
          ? 'border-t border-line bg-surface/60 py-16 sm:py-20'
          : 'border-t border-line py-16 sm:py-20'
      }
    >
      <div className="mx-auto w-full max-w-page px-5 sm:px-8">
        <header className="mb-9 sm:mb-11">
          <h2
            id={`${id}-heading`}
            className="text-2xl sm:text-[1.75rem] tracking-tight"
          >
            {title}
          </h2>
          <div
            className="mt-3 h-px w-12 bg-accent-soft"
            aria-hidden="true"
          />
          {lead ? (
            <p className="mt-5 max-w-reading text-[1.0625rem] leading-relaxed text-ink-secondary">
              {lead}
            </p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
