import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ButtonVariant = "primary" | "dark" | "ghost" | "outline";
type ButtonSize = "md" | "lg";

const base =
  "group inline-flex select-none items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-[var(--ease-out-expo)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none disabled:translate-y-0";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white shadow-[0_8px_20px_-10px_rgba(117,192,67,0.9)] hover:bg-accent-strong hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-12px_rgba(117,192,67,0.85)] focus-visible:ring-accent active:translate-y-0 active:bg-accent-strong",
  dark: "bg-accent-deep text-white shadow-[0_10px_24px_-14px_rgba(29,59,46,0.9)] hover:bg-accent-deep-2 hover:-translate-y-0.5 focus-visible:ring-accent-deep active:translate-y-0",
  outline:
    "border border-line-strong bg-white text-ink hover:border-accent hover:text-accent-strong hover:-translate-y-0.5 focus-visible:ring-accent active:translate-y-0",
  ghost:
    "text-ink hover:text-accent-strong focus-visible:ring-accent underline-offset-4 hover:underline",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-[14px]",
  lg: "px-8 py-4 text-[15px]",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
  ariaLabel?: string;
  className?: string;
};

export default function CtaButton({
  href,
  children,
  variant = "primary",
  size = "lg",
  withArrow = false,
  ariaLabel,
  className = "",
}: Props) {
  const isExternal = href.startsWith("tel:") || href.startsWith("http");
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
          strokeWidth={2}
        />
      )}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={classes}>
      {content}
    </Link>
  );
}
