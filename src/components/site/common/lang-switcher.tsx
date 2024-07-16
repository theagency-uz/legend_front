"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function LangSwitcher({
  lang,
  variant,
}: {
  lang: string;
  variant: "header" | "footer" | "nav-mob";
}) {
  const path = usePathname();

  return (
    <div
      className={
        variant === "header"
          ? "text-white base-semibold"
          : variant === "footer"
          ? "text-primary-100 small-semibold"
          : variant === "nav-mob"
          ? "small-semibold md:large-semibold md:flex md:justify-center"
          : ""
      }
    >
      <span className="uppercase cursor-pointer">
        <span
          className={
            (variant === "header" || variant === "nav-mob") && lang !== "ru"
              ? `text-primary-400`
              : ""
          }
        >
          <Link href={path.replace(/ru|uz/, "ru")}>ru</Link>
        </span>{" "}
        |{" "}
        <span
          className={
            (variant === "header" || variant === "nav-mob") && lang !== "uz"
              ? `text-primary-400`
              : ""
          }
        >
          <Link href={path.replace(/ru|uz/, "uz")}>uz</Link>
        </span>
      </span>
    </div>
  );
}
