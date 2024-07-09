"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { X } from "lucide-react";

import { useTranslation } from "@/lib/i18n/client";

import Navbar from "../../common/navbar.component";
import FilterContent from "./filter-content";

import useWindowSize from "@/hooks/useWindowSize";

import { MOBILE_SIZE } from "@/constants/site";

export function FilterMob({ lang }: { lang: string }) {
  const { i18n } = useTranslation(lang);

  const windowSize = useWindowSize();

  return (windowSize.width ?? 0) <= MOBILE_SIZE ? (
    <Sheet>
      <SheetTrigger asChild>
        <h3 className="flex items-center gap-[1.08vw]">
          <img
            src="/assets/filter.svg"
            width={16}
            height={16}
            className="w-[4.69vw] h-[4.69vw]"
          />{" "}
          <span>{i18n.t("Фильтры")}</span>
        </h3>
      </SheetTrigger>
      <SheetContent className="text-white w-full border-none bg-nav-mob aspect-[320/736] bg-cover bg-center overflow-y-scroll">
        <SheetTitle>
          <Navbar lang={lang} />
        </SheetTitle>

        <div className="p-[22px] mx-[10px] mt-[80px] bg-filter-mob rounded-xl">
          <div className="w-full h-full backdrop-blur-[5px]">
            <FilterContent lang={lang} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ) : null;
}
