import Section from './Section';
import { experience } from '@/content/experience';

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ul className="max-w-reading">
        {experience.map((entry) => (
          <li
            key={`${entry.organization}-${entry.role}`}
            className="flex flex-col gap-1 border-b border-line py-5 first:pt-0 last:border-0 sm:flex-row sm:gap-6"
          >
            <span className="shrink-0 pt-0.5 text-[0.8125rem] tabular-nums text-muted sm:w-28">
              {entry.period}
            </span>
            <div>
              <h3 className="text-[1.0625rem] font-semibold text-navy">{entry.role}</h3>
              <p className="mt-0.5 text-[0.9375rem] text-ink-secondary">{entry.organization}</p>
              <ul className="mt-2.5 list-disc space-y-1.5 pl-5 text-[0.9375rem] leading-relaxed text-ink-secondary">
                {entry.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
