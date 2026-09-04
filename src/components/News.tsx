'use client';

import { useState } from 'react';
import Section from './Section';
import Icon from './Icon';
import { maxVisibleNews, news } from '@/content/news';
import { formatDate } from '@/lib/format';

export default function News() {
  const [expanded, setExpanded] = useState(false);
  const sorted = [...news].sort((a, b) => b.date.localeCompare(a.date));
  const hasMore = sorted.length > maxVisibleNews;
  const visible = expanded ? sorted : sorted.slice(0, maxVisibleNews);

  return (
    <Section id="news" title="News">
      <ul className="max-w-reading">
        {visible.map((item) => (
          <li
            key={`${item.date}-${item.title}`}
            className="flex flex-col gap-1 border-b border-line py-4 first:pt-0 last:border-0 sm:flex-row sm:gap-6"
          >
            <time
              dateTime={item.date}
              className="shrink-0 pt-0.5 text-[0.8125rem] tabular-nums text-muted sm:w-28"
            >
              {formatDate(item.date, { year: 'numeric', month: 'short' })}
            </time>
            <div>
              <p className="text-[0.9375rem] font-medium text-ink">{item.title}</p>
              {item.description ? (
                <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-secondary">
                  {item.description}
                </p>
              ) : null}
              {item.link ? (
                <a
                  href={item.link.href}
                  {...(item.link.href.startsWith('http')
                    ? { target: '_blank', rel: 'noreferrer noopener' }
                    : {})}
                  className="mt-1.5 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium no-underline hover:underline"
                >
                  {item.link.label}
                  <Icon name="arrow" className="h-3.5 w-3.5" />
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>

      {hasMore ? (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-6 inline-flex items-center gap-1.5 rounded-sm border border-line bg-white px-3 py-1.5 text-[0.8125rem] font-medium text-ink-secondary hover:border-accent-soft hover:text-accent"
        >
          <Icon
            name="chevron"
            className={`h-3.5 w-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`}
          />
          {expanded ? 'Show fewer updates' : `Show all ${sorted.length} updates`}
        </button>
      ) : null}
    </Section>
  );
}
