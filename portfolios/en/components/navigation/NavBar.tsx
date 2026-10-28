import { hero } from "@/data/hero";

const navLinks = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 px-4 sm:px-6 md:px-12 py-3 sm:py-0 sm:h-16 bg-bg/85 backdrop-blur-md border-b border-border">
      <a
        href="#"
        className="shrink-0 truncate whitespace-nowrap max-w-full font-display font-semibold text-sm tracking-tight text-text"
      >
        <span className="text-signal">●</span> {hero.name}
      </a>
      <nav className="grid grid-cols-3 sm:flex sm:items-center gap-0.5 sm:gap-1 sm:overflow-x-auto sm:[scrollbar-width:none] sm:[&::-webkit-scrollbar]:hidden">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-md font-sans text-[12px] sm:text-[13px] font-medium text-dim text-center sm:text-left transition-all duration-150 hover:text-text hover:bg-surface active:scale-[0.96] truncate"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
