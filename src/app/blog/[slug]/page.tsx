import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Icon from '@/components/Icon';
import Tag from '@/components/Tag';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { formatDate } from '@/lib/format';

type Params = { slug: string };

/**
 * Required for `output: 'export'` — every post is rendered at build time.
 *
 * Post routes are always generated, even when the blog switch in
 * src/content/site.ts is off: that switch controls what is *linked* from the
 * navigation and home page. To remove the routes entirely, delete src/app/blog/.
 */
export function generateStaticParams(): Params[] {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto w-full max-w-page px-5 py-12 sm:px-8 sm:py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium no-underline hover:underline"
      >
        <Icon name="arrow" className="h-3.5 w-3.5 rotate-180" />
        All posts
      </Link>

      <header className="mt-8 max-w-reading border-b border-line pb-8">
        <time
          dateTime={post.date}
          className="text-[0.8125rem] tabular-nums text-muted"
        >
          {formatDate(post.date)}
        </time>

        <h1 className="mt-2 text-[1.85rem] leading-[1.2] tracking-tight sm:text-[2.25rem]">
          {post.title}
        </h1>

        <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-secondary">
          {post.description}
        </p>

        {post.tags.length ? (
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>
        ) : null}
      </header>

      <div className="prose-academic mt-9 max-w-reading">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
