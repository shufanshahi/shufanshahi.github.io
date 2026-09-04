import Icon from './Icon';
import Section from './Section';
import { teaching } from '@/content/teaching';

export default function Teaching() {
  return (
    <Section id="teaching" title="Teaching">
      <ul className="max-w-reading space-y-8">
        {teaching.map((entry) => (
          <li
            key={`${entry.course}-${entry.term}`}
            className="border-b border-line pb-8 last:border-0 last:pb-0"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="text-[1.0625rem] font-semibold text-navy">
                {entry.code ? (
                  <span className="mr-2 font-sans text-[0.875rem] font-medium tracking-wide text-muted">
                    {entry.code}
                  </span>
                ) : null}
                {entry.course}
              </h3>
              <span className="shrink-0 text-[0.8125rem] text-muted">
                {entry.term}
              </span>
            </div>

            <p className="mt-1.5 text-[0.9375rem] text-ink-secondary">
              {entry.role}
              <span aria-hidden="true" className="mx-2 text-line-strong">
                ·
              </span>
              <span className="text-muted">{entry.institution}</span>
            </p>

            {entry.description ? (
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-secondary">
                {entry.description}
              </p>
            ) : null}

            {entry.resources?.length ? (
              <ul className="mt-3.5 flex flex-wrap gap-x-4 gap-y-2">
                {entry.resources.map((resource) => (
                  <li key={resource.label}>
                    <a
                      href={resource.href}
                      className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium no-underline hover:underline"
                    >
                      <Icon name="link" className="h-3.5 w-3.5" />
                      <span>
                        {resource.label}
                        <span className="sr-only"> for {entry.course}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}
