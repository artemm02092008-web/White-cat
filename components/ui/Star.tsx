export function Star({
  className = "",
  filled = true,
}: {
  className?: string;
  filled?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.6}
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.45 6.19 20.5 7.3 14.03 2.6 9.45l6.5-.95L12 2.6z" />
    </svg>
  );
}

export function Rating({ value = 5, className = "" }: { value?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`} aria-label={`Оценка ${value} из 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          filled={i < value}
          className={`h-3.5 w-3.5 ${i < value ? "text-star" : "text-line-strong"}`}
        />
      ))}
    </div>
  );
}
