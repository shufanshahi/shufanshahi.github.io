import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-page px-5 py-24 sm:px-8 sm:py-32">
      <p className="text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-muted">
        404
      </p>
      <h1 className="mt-3 text-[2rem] tracking-tight">Page not found</h1>
      <p className="mt-4 max-w-reading text-[1.0625rem] text-ink-secondary">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block text-[0.9375rem] font-medium no-underline hover:underline"
      >
        Return to the homepage
      </Link>
    </div>
  );
}
