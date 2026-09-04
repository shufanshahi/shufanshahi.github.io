import Icon from './Icon';
import Section from './Section';
import { cv } from '@/content/cv';
import { withBasePath } from '@/lib/format';

export default function CV() {
  const href = withBasePath(cv.file);

  return (
    <Section id="cv" title="Curriculum Vitae" tinted>
      <div className="max-w-reading">
        <p className="text-[1.0625rem] leading-relaxed text-ink-secondary">
          {cv.description}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <a
            href={href}
            download={cv.downloadName}
            className="inline-flex items-center gap-2 rounded-sm bg-navy px-4 py-2.5 text-[0.9375rem] font-medium text-white no-underline transition-colors hover:bg-accent-strong"
          >
            <Icon name="pdf" className="h-4 w-4" />
            Download CV (PDF)
          </a>

          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className="text-[0.875rem] font-medium no-underline hover:underline"
          >
            View in browser
          </a>
        </div>

        {cv.updated ? (
          <p className="mt-4 text-[0.8125rem] text-muted">
            Last updated {cv.updated}.
          </p>
        ) : null}
      </div>
    </Section>
  );
}
