import { cn } from "@/lib/utils";

export function Card({
  header,
  className,
}: {
  header: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-surface transition-all duration-300 hover:border-signal/40",
        className
      )}
    >
      <div className="p-6">{header}</div>
    </div>
  );
}
