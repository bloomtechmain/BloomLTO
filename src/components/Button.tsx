import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "solid" | "outline" | "ghost";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  solid:
    "bg-orange-deep text-white shadow-[0_10px_24px_-8px_rgba(201,80,11,0.55)] hover:-translate-y-0.5 hover:bg-navy hover:shadow-[0_16px_32px_-10px_rgba(11,42,82,0.5)]",
  outline:
    "border-2 border-navy text-navy hover:-translate-y-0.5 hover:bg-navy hover:text-white hover:shadow-[0_16px_32px_-14px_rgba(11,42,82,0.4)]",
  ghost: "text-navy hover:text-orange-deep",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-[0.98rem]",
  lg: "px-8 py-4 text-[1.05rem]",
};

const shared =
  "inline-flex items-center justify-center gap-2 rounded-full font-heading font-bold transition-all duration-200 ease-out active:scale-[0.97] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-deep";

export function Button({
  variant = "solid",
  size = "md",
  href,
  className,
  children,
  ...rest
}: {
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>) {
  const cls = `${shared} ${variants[variant]} ${sizes[size]} ${className ?? ""}`;

  if (href) {
    return (
      <Link href={href} className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
