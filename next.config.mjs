/**
 * GitHub Pages deployment configuration.
 *
 * There are two ways to host this site:
 *
 * 1. USER SITE  ->  https://<username>.github.io
 *    Repository name must be `<username>.github.io`.
 *    Leave NEXT_PUBLIC_BASE_PATH unset (this is the default).
 *
 * 2. PROJECT SITE  ->  https://<username>.github.io/<repo>
 *    Set NEXT_PUBLIC_BASE_PATH=/<repo> (the GitHub Actions workflow does
 *    this for you automatically; see .github/workflows/deploy.yml).
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit a fully static site into ./out — no Node server required.
  output: 'export',
  basePath,
  // Ensures every route is written as a directory with an index.html so that
  // GitHub Pages can serve it without a rewrite layer.
  trailingSlash: true,
  images: {
    // GitHub Pages cannot run the Next.js image optimizer.
    unoptimized: true,
  },
};

export default nextConfig;
