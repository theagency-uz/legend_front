"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useTranslation } from "@/lib/i18n/client";

import Navbar from "../../common/navbar.component";
import FilterContent from "./filter-content";

import useWindowSize from "@/hooks/useWindowSize";

import { MOBILE_SIZE } from "@/constants/site";

import { Language } from "@/types/language";

export function FilterMob({ lang }: { lang: keyof Language }) {
  const { i18n } = useTranslation(lang);

  const windowSize = useWindowSize();

  return (windowSize.width ?? 0) <= MOBILE_SIZE ? (
    <Sheet>
      <SheetTrigger asChild>
        <h3 className="flex items-center gap-[1.08vw] md:hidden">
          <img
            src="/assets/filter.svg"
            width={16}
            height={16}
            className="w-[20px] h-[20px]"
          />{" "}
          <span>{i18n.t("Фильтры")}</span>
        </h3>
      </SheetTrigger>
      <SheetContent className="text-white w-full max-w-full border-none bg-nav-mob aspect-[320/736] bg-cover bg-center overflow-y-scroll">
        <SheetTitle>
          <Navbar lang={lang} />
        </SheetTitle>

        <div className="p-[22px] mx-[10px] mt-[80px] bg-filter-mob rounded-xl">
          <div className="w-full h-full backdrop-blur-[5px]">
            <FilterContent lang={lang} isMob />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ) : null;
}
