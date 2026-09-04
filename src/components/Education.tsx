import Section from './Section';
import { education } from '@/content/education';

export default function Education() {
  return (
    <Section id="education" title="Education" tinted>
      <ol className="relative space-y-10 border-l border-line pl-7 sm:pl-9">
        {education.map((entry) => (
          <li key={`${entry.degree}-${entry.institution}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[calc(1.75rem+4.5px)] top-2 h-[9px] w-[9px] rounded-full border border-accent bg-paper sm:-left-[calc(2.25rem+4.5px)]"
            />

            <p className="text-[0.8125rem] font-medium uppercase tracking-[0.1em] text-muted">
              {entry.startDate} — {entry.endDate}
            </p>

            <h3 className="mt-2 text-[1.125rem] font-semibold text-navy">
              {entry.degree}
            </h3>

            <p className="mt-1 text-[0.9375rem] text-ink-secondary">
              {entry.institution}
              <span aria-hidden="true" className="mx-2 text-line-strong">
                ·
              </span>
              <span className="text-muted">{entry.location}</span>
            </p>

            {entry.thesisTitle ? (
              <p className="mt-3.5 text-[0.9375rem] text-ink-secondary">
                <span className="font-medium text-ink">Thesis: </span>
                <span className="italic">{entry.thesisTitle}</span>
              </p>
            ) : null}

            {entry.thesisDescription ? (
              <p className="mt-1.5 max-w-reading text-[0.9375rem] leading-relaxed text-muted">
                {entry.thesisDescription}
              </p>
            ) : null}

            {entry.details?.length ? (
              <ul className="mt-3.5 max-w-reading space-y-1.5 text-[0.9375rem] text-ink-secondary">
                {entry.details.map((detail) => (
                  <li key={detail} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-[0.6em] h-px w-2.5 shrink-0 bg-accent-soft" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </Section>
  );
}
