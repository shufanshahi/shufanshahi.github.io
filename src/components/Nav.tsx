'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Icon from './Icon';
import { navigation, sections, siteConfig } from '@/content/site';

const items = navigation.filter((item) => sections[item.key]);

export default function Nav() {
  const pathname = usePathname();
  const onHome = pathname === '/' || pathname === '';
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('');

  // Highlight the section currently occupying the upper part of the viewport.
  useEffect(() => {
    if (!onHome) return;

    const anchors = items
      .filter((item) => item.href.startsWith('#'))
      .map((item) => item.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-88px 0px -65% 0px', threshold: 0 },
    );

    anchors.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [onHome]);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  /** Anchors only work on the home page; elsewhere they need the '/' prefix. */
  const resolve = (href: string) =>
    href.startsWith('#') && !onHome ? `/${href}` : href;

  const isActive = (href: string) => {
    if (href.startsWith('#')) return onHome && href.slice(1) === activeId;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/75">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-sm focus:bg-navy focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-page items-center justify-between gap-6 px-5 py-3.5 sm:px-8"
      >
        <Link
          href="/"
          className="shrink-0 font-serif text-[0.98rem] font-semibold tracking-tight text-navy no-underline hover:text-accent"
        >
          {siteConfig.name}
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {items.map((item) => (
            <li key={item.key}>
              <Link
                href={resolve(item.href)}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`rounded-sm px-2.5 py-1.5 text-[0.875rem] no-underline transition-colors ${
                  isActive(item.href)
                    ? 'bg-surface-blue font-medium text-accent'
                    : 'text-ink-secondary hover:bg-surface hover:text-accent'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="inline-flex items-center gap-2 rounded-sm border border-line px-2.5 py-1.5 text-sm text-ink-secondary hover:border-line-strong hover:text-accent lg:hidden"
        >
          <Icon name={open ? 'close' : 'menu'} className="h-4 w-4" />
          <span>{open ? 'Close' : 'Menu'}</span>
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-paper lg:hidden"
      >
        <ul className="mx-auto w-full max-w-page px-3 py-2 sm:px-6">
          {items.map((item) => (
            <li key={item.key}>
              <Link
                href={resolve(item.href)}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`block rounded-sm px-3 py-3 text-[0.95rem] no-underline ${
                  isActive(item.href)
                    ? 'bg-surface-blue font-medium text-accent'
                    : 'text-ink-secondary hover:bg-surface hover:text-accent'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
