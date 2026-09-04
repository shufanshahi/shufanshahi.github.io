import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

/**
 * Blog posts are Markdown files in src/content/blog/.
 *
 * The file name (minus `.md`) becomes the URL slug. Frontmatter fields:
 *
 *   title       required, string
 *   date        required, YYYY-MM-DD
 *   description required, one or two sentences for the index page
 *   tags        optional, string[]
 *   draft       optional, true hides the post from the build
 */

const POSTS_DIR = path.join(process.cwd(), 'src', 'content', 'blog');

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  draft: boolean;
};

export type Post = PostMeta & { content: string };

function readPost(fileName: string): Post {
  const slug = fileName.replace(/\.md$/, '');
  const raw = fs.readFileSync(path.join(POSTS_DIR, fileName), 'utf8');
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ''),
    description: String(data.description ?? ''),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    draft: data.draft === true,
    content,
  };
}

/** All published posts, newest first. */
export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith('.md'))
    .map(readPost)
    .filter((post) => !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
