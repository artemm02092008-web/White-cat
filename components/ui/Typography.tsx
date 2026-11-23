export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted ${className}`}
    >
      <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeading({
  children,
  className = "",
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <Tag
      className={`font-semibold leading-[1.08] text-ink text-[clamp(1.9rem,4.2vw,3rem)] ${className}`}
    >
      {children}
    </Tag>
  );
}
