import Link from 'next/link';
import type { Metadata } from 'next';
import Tag from '@/components/Tag';
import { getAllPosts } from '@/lib/blog';
import { formatDate } from '@/lib/format';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Research notes, paper discussions, conference write-ups and technical writing.',
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto w-full max-w-page px-5 py-14 sm:px-8 sm:py-20">
      <header className="max-w-reading">
        <h1 className="text-[2rem] tracking-tight sm:text-[2.4rem]">Blog</h1>
        <div className="mt-3 h-px w-12 bg-accent-soft" aria-hidden="true" />
        <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-secondary">
          Notes on papers I am reading, write-ups from competitions and
          conferences, and occasional technical writing. These are working notes
          rather than finished arguments.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="mt-12 text-ink-secondary">No posts yet.</p>
      ) : (
        <ul className="mt-12 max-w-reading space-y-9">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-line pb-9 last:border-0">
              <article>
                <time
                  dateTime={post.date}
                  className="text-[0.8125rem] tabular-nums text-muted"
                >
                  {formatDate(post.date)}
                </time>

                <h2 className="mt-1.5 text-[1.25rem] font-semibold leading-snug">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-navy no-underline hover:text-accent"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-secondary">
                  {post.description}
                </p>

                {post.tags.length ? (
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <li key={tag}>
                        <Tag>{tag}</Tag>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
