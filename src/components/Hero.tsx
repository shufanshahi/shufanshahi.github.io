import Icon from './Icon';
import { siteConfig } from '@/content/site';
import { socialLinks } from '@/content/social';
import { withBasePath } from '@/lib/format';

const heroLinks = socialLinks.filter((link) => link.inHero);

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto w-full max-w-page px-5 py-14 sm:px-8 sm:py-20"
    >
      <div className="flex flex-col gap-9 sm:gap-11 md:flex-row-reverse md:items-start md:justify-between md:gap-14">
        {siteConfig.profileImage ? (
          <div className="shrink-0">
            {/* Plain <img>: the site is statically exported, so the Next.js
                image optimizer is unavailable on GitHub Pages anyway. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBasePath(siteConfig.profileImage)}
              alt={siteConfig.profileImageAlt}
              width={176}
              height={176}
              className="h-32 w-32 rounded-sm border border-line object-cover object-top shadow-[0_1px_2px_rgba(22,32,44,0.06)] sm:h-44 sm:w-44"
            />
          </div>
        ) : null}

        <div className="max-w-reading">
          <h1
            id="hero-heading"
            className="text-[2rem] leading-[1.15] tracking-tight sm:text-[2.6rem]"
          >
            {siteConfig.name}
          </h1>

          <p className="mt-3 text-[1.0625rem] text-ink-secondary sm:text-lg">
            {siteConfig.title}
          </p>

          <p className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
            <span>{siteConfig.affiliation}</span>
            <span aria-hidden="true" className="text-line-strong">
              ·
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="location" className="h-3.5 w-3.5" />
              {siteConfig.location}
            </span>
          </p>

          <p className="mt-6 text-[1.0625rem] leading-relaxed text-ink-secondary">
            {siteConfig.intro}
          </p>

          <ul className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2.5">
            {heroLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={
                    link.href.startsWith('/')
                      ? withBasePath(link.href)
                      : link.href
                  }
                  {...(link.href.startsWith('http')
                    ? { target: '_blank', rel: 'noreferrer noopener' }
                    : {})}
                  className="inline-flex items-center gap-1.5 rounded-sm border border-line bg-white px-2.5 py-1.5 text-[0.8125rem] font-medium text-ink-secondary no-underline transition-colors hover:border-accent-soft hover:text-accent"
                >
                  <Icon name={link.icon} className="h-3.5 w-3.5" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
