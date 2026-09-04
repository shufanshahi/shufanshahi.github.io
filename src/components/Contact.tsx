import Icon from './Icon';
import Section from './Section';
import { socialLinks } from '@/content/social';
import { withBasePath } from '@/lib/format';

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      lead="I am always glad to hear about related work, collaborations or graduate study opportunities. Email is the most reliable way to reach me."
    >
      <ul className="max-w-reading divide-y divide-line border-y border-line">
        {socialLinks.map((link) => {
          const external = link.href.startsWith('http');
          return (
            <li key={link.label}>
              <a
                href={external ? link.href : withBasePath(link.href)}
                {...(external
                  ? { target: '_blank', rel: 'noreferrer noopener' }
                  : {})}
                className="group flex items-center gap-4 py-3.5 no-underline"
              >
                <Icon
                  name={link.icon}
                  className="h-4 w-4 shrink-0 text-accent-soft transition-colors group-hover:text-accent"
                />
                <span className="w-32 shrink-0 text-[0.875rem] font-medium text-ink">
                  {link.label}
                </span>
                <span className="truncate text-[0.9375rem] text-accent group-hover:underline">
                  {link.display}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
