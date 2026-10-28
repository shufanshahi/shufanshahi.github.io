export function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="relative flex h-2 w-2 shrink-0 rounded-full bg-signal" aria-hidden />
      <span className="font-mono text-[11px] tracking-[0.2em] text-dim">
        NODE_{num}
      </span>
      <span className="h-px w-8 bg-border" aria-hidden />
      <span className="font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-soft">
        {label}
      </span>
    </div>
  );
}
