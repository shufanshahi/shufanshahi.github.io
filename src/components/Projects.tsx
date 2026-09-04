import Icon from './Icon';
import Section from './Section';
import Tag from './Tag';
import { projects } from '@/content/projects';
import { withBasePath } from '@/lib/format';

const linkMeta: { key: 'repo' | 'demo' | 'project' | 'paper'; label: string; icon: string }[] = [
  { key: 'repo', label: 'Repository', icon: 'github' },
  { key: 'demo', label: 'Demo', icon: 'link' },
  { key: 'project', label: 'Project page', icon: 'link' },
  { key: 'paper', label: 'Paper', icon: 'pdf' },
];

export default function Projects() {
  return (
    <Section id="projects" title="Projects" tinted>
      <ul className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.title}
            className="flex flex-col overflow-hidden rounded-sm border border-line bg-paper"
          >
            {project.thumbnail ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={withBasePath(project.thumbnail)}
                alt=""
                className="h-40 w-full border-b border-line object-cover"
              />
            ) : null}

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-[1.0625rem] font-semibold text-navy">
                  {project.title}
                </h3>
                {project.period ? (
                  <span className="shrink-0 text-[0.8125rem] tabular-nums text-muted">
                    {project.period}
                  </span>
                ) : null}
              </div>

              <p className="mt-2.5 flex-1 text-[0.9375rem] leading-relaxed text-ink-secondary">
                {project.description}
              </p>

              {project.tags.length ? (
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <Tag>{tag}</Tag>
                    </li>
                  ))}
                </ul>
              ) : null}

              {project.links ? (
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-line pt-4">
                  {linkMeta
                    .filter((meta) => project.links?.[meta.key])
                    .map((meta) => (
                      <li key={meta.key}>
                        <a
                          href={project.links?.[meta.key]}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium no-underline hover:underline"
                        >
                          <Icon name={meta.icon} className="h-3.5 w-3.5" />
                          <span>
                            {meta.label}
                            <span className="sr-only"> for {project.title}</span>
                          </span>
                        </a>
                      </li>
                    ))}
                </ul>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
