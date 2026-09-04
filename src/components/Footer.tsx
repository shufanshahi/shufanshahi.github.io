import { siteConfig } from '@/content/site';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface/60">
      <div className="mx-auto flex w-full max-w-page flex-col gap-2 px-5 py-9 text-[0.8125rem] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <p>{siteConfig.footerNote}</p>
      </div>
    </footer>
  );
}
