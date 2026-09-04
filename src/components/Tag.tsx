export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-line bg-surface px-2 py-0.5 text-xs font-medium tracking-wide text-muted">
      {children}
    </span>
  );
}
