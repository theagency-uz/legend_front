"use client";

import { MouseEventHandler, ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next//navigation";

interface ITransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
}

async function sleep(ms: number) {
  return await new Promise((resolve) => setTimeout(resolve, ms));
}

export default function TransitionLink({
  href,
  children,
  ...props
}: ITransitionLinkProps) {
  const router = useRouter();

  const handleTransition: MouseEventHandler<HTMLAnchorElement> = async (e) => {
    e.preventDefault();

    const body = document.querySelector("body");

    body?.classList?.add("page-transition");
    await sleep(500);

    router.push(href);

    await sleep(500);
    body?.classList?.remove("page-transition");
  };

  return (
    <Link href={href} {...props} onClick={handleTransition}>
      {children}
    </Link>
  );
}
