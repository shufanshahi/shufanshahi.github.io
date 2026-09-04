import Section from './Section';
import { bio } from '@/content/bio';

export default function About() {
  return (
    <Section id="about" title={bio.heading}>
      <div className="max-w-reading space-y-5 text-[1.0625rem] leading-[1.8] text-ink-secondary">
        {bio.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
