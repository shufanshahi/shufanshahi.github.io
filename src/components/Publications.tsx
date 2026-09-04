import Icon from './Icon';
import Section from './Section';
import {
  authorName,
  publicationCategories,
  publications,
  type Publication,
} from '@/content/publications';

const linkMeta: { key: keyof NonNullable<Publication['links']>; label: string; icon: string }[] = [
  { key: 'pdf', label: 'PDF', icon: 'pdf' },
  { key: 'abstract', label: 'Abstract', icon: 'link' },
  { key: 'code', label: 'Code', icon: 'code' },
  { key: 'project', label: 'Project page', icon: 'link' },
  { key: 'doi', label: 'DOI', icon: 'link' },
  { key: 'bibtex', label: 'BibTeX', icon: 'link' },
];

function Authors({ authors }: { authors: string[] }) {
  return (
    <p className="mt-1.5 text-[0.9375rem] text-ink-secondary">
      {authors.map((author, index) => (
        <span key={`${author}-${index}`}>
          {author === authorName ? (
            <span className="font-semibold text-ink">{author}</span>
          ) : (
            author
          )}
          {index < authors.length - 1 ? ', ' : ''}
        </span>
      ))}
    </p>
  );
}

function PublicationEntry({ publication }: { publication: Publication }) {
  const links = publication.links ?? {};
  const available = linkMeta.filter((meta) => links[meta.key]);

  return (
    <li className="border-b border-line py-7 first:pt-0 last:border-0 last:pb-0">
      <article>
        <h4 className="font-serif text-[1.125rem] font-semibold leading-snug text-navy sm:text-[1.1875rem]">
          {publication.title}
        </h4>

        <Authors authors={publication.authors} />

        <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8125rem] text-muted">
          {publication.venue ? <span>{publication.venue}</span> : null}
          <span aria-hidden="true" className="text-line-strong">
            ·
          </span>
          <span>{publication.year}</span>
          {publication.status ? (
            <span className="rounded-sm border border-line bg-surface px-1.5 py-0.5 text-[0.6875rem] font-medium uppercase tracking-wider">
              {publication.status}
            </span>
          ) : null}
          {publication.award ? (
            <span className="rounded-sm border border-accent-soft bg-surface-blue px-1.5 py-0.5 text-[0.6875rem] font-medium uppercase tracking-wider text-accent">
              {publication.award}
            </span>
          ) : null}
        </p>

        {publication.abstract ? (
          <details className="group mt-3.5">
            <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-[0.8125rem] font-medium text-accent hover:text-accent-strong [&::-webkit-details-marker]:hidden">
              <Icon
                name="chevron"
                className="h-3.5 w-3.5 transition-transform group-open:rotate-180"
              />
              Abstract
            </summary>
            <p className="mt-2.5 max-w-reading border-l-2 border-line pl-4 text-[0.9375rem] leading-relaxed text-ink-secondary">
              {publication.abstract}
            </p>
          </details>
        ) : null}

        {available.length ? (
          <ul className="mt-3.5 flex flex-wrap gap-x-4 gap-y-2">
            {available.map((meta) => (
              <li key={meta.key}>
                <a
                  href={links[meta.key]}
                  {...(links[meta.key]?.startsWith('http')
                    ? { target: '_blank', rel: 'noreferrer noopener' }
                    : {})}
                  className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium no-underline hover:underline"
                >
                  <Icon name={meta.icon} className="h-3.5 w-3.5" />
                  <span>
                    {meta.label}
                    <span className="sr-only"> for {publication.title}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </article>
    </li>
  );
}

export default function Publications() {
  const groups = publicationCategories
    .map((category) => ({
      ...category,
      items: publications
        .filter((publication) => publication.category === category.key)
        .sort((a, b) => b.year - a.year),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <Section id="publications" title="Publications">
      {groups.length === 0 ? (
        <p className="text-ink-secondary">Publications will be listed here.</p>
      ) : (
        <div className="space-y-12">
          {groups.map((group) => (
            <div key={group.key}>
              <h3 className="mb-5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-muted">
                {group.label}
              </h3>
              <ul>
                {group.items.map((publication) => (
                  <PublicationEntry
                    key={publication.title}
                    publication={publication}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
