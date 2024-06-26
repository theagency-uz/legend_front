"use client";

import useWindowSize from "@/hooks/useWindowSize";

import FilterContent from "./filter-content";

import { MOBILE_SIZE } from "@/constants/site";

export default function Filter({ lang }: { lang: string }) {
  const windowSize = useWindowSize();

  return (windowSize.width ?? 0) > MOBILE_SIZE ? (
    <FilterContent lang={lang} />
  ) : null;
}
