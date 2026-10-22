import Section from './Section';
import { achievements, scholarships, type Award } from '@/content/awards';

function AwardList({ heading, items }: { heading: string; items: Award[] }) {
  return (
    <div>
      <h3 className="text-[0.8125rem] font-medium uppercase tracking-[0.1em] text-muted">
        {heading}
      </h3>
      <ul className="mt-3 max-w-reading">
        {items.map((item) => (
          <li
            key={`${item.year}-${item.title}`}
            className="flex flex-col gap-1 border-b border-line py-4 last:border-0 sm:flex-row sm:gap-6"
          >
            <span className="shrink-0 pt-0.5 text-[0.8125rem] tabular-nums text-muted sm:w-28">
              {item.year}
            </span>
            <div>
              <p className="text-[0.9375rem] font-medium text-ink">{item.title}</p>
              {item.description ? (
                <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-secondary">
                  {item.description}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Awards() {
  return (
    <Section id="awards" title="Achievements and Awards">
      <div className="space-y-10">
        <AwardList heading="Achievements" items={achievements} />
        <AwardList heading="Scholarships" items={scholarships} />
      </div>
    </Section>
  );
}
