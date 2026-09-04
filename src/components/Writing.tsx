import Link from 'next/link';
import Icon from './Icon';
import Section from './Section';
import type { PostMeta } from '@/lib/blog';
import { formatDate } from '@/lib/format';

/** The three most recent posts, shown on the home page. */
export default function Writing({ posts }: { posts: PostMeta[] }) {
  return (
    <Section
      id="writing"
      title="Writing"
      lead="Reading notes, paper discussions and occasional write-ups from competitions and conferences."
    >
      <ul className="max-w-reading space-y-7">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-line pb-7 last:border-0 last:pb-0">
            <article>
              <time
                dateTime={post.date}
                className="text-[0.8125rem] tabular-nums text-muted"
              >
                {formatDate(post.date)}
              </time>
              <h3 className="mt-1.5 text-[1.0625rem] font-semibold leading-snug">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-navy no-underline hover:text-accent"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-secondary">
                {post.description}
              </p>
            </article>
          </li>
        ))}
      </ul>

      <Link
        href="/blog"
        className="mt-8 inline-flex items-center gap-1.5 text-[0.875rem] font-medium no-underline hover:underline"
      >
        All posts
        <Icon name="arrow" className="h-3.5 w-3.5" />
      </Link>
    </Section>
  );
}
