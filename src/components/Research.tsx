import Section from './Section';
import Tag from './Tag';
import {
  futureDirections,
  researchInterests,
  researchIntro,
} from '@/content/research';

export default function Research() {
  return (
    <Section id="research" title="Research Interests" lead={researchIntro} tinted>
      <ul className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2">
        {researchInterests.map((interest) => (
          <li key={interest.title} className="bg-paper p-6 sm:p-7">
            <h3 className="text-[1.0625rem] font-semibold text-navy">
              {interest.title}
            </h3>
            <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-secondary">
              {interest.description}
            </p>
            {interest.keywords?.length ? (
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {interest.keywords.map((keyword) => (
                  <li key={keyword}>
                    <Tag>{keyword}</Tag>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>

      {futureDirections ? (
        <p className="mt-8 max-w-reading border-l-2 border-accent-soft pl-5 text-[0.9375rem] leading-relaxed text-muted italic">
          {futureDirections}
        </p>
      ) : null}
    </Section>
  );
}
