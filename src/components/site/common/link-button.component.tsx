import Link from "next/link";
import { HTMLAttributes, ReactNode } from "react";

interface IProps extends HTMLAttributes<HTMLElement> {
  href: string;
  children: ReactNode;
}

export default function LinkButton({ children, href, ...props }: IProps) {
  return (
    <Link
      className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 small-semibold py-[12px] px-[25px] bg-white text-primary-100 hover:bg-white/90 small-semibold rounded-[200px]"
      {...props}
      href={href}
    >
      {children}
    </Link>
  );
}
