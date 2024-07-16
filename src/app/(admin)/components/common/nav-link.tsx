"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ReactNode } from "react";

export default function AdminNavLink({
  children,
  href,
  tooltip,
}: {
  children: ReactNode;
  href: string;
  tooltip: string;
}) {
  const pathname = usePathname();

  return (
    <TooltipProvider delayDuration={0} skipDelayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            className={`flex h-9 w-9 items-center justify-center rounded-lg ${
              pathname.includes(href)
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground"
            } transition-colors hover:text-foreground md:h-8 md:w-8`}
          >
            {children}
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">{tooltip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
