import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { X } from "lucide-react";

import { useTranslation } from "@/lib/i18n";

import Filter from "./filter";
import Navbar from "../../common/navbar.component";

export async function FilterMob({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <h3 className="flex items-center gap-[1.08vw] xs:hidden">
          <img
            src="/assets/filter.svg"
            width={16}
            height={16}
            className="max-xs:w-[4.69vw] max-xs:h-[4.69vw]"
          />{" "}
          <span>{t("Фильтры")}</span>
        </h3>
      </SheetTrigger>
      <SheetContent className="text-white w-full border-none bg-nav-mob aspect-[320/736] bg-cover bg-center overflow-y-scroll">
        <SheetTitle>
          <Navbar lang={lang} />
        </SheetTitle>

        <div className="max-xs:p-[22px] mx-[10px] mt-[80px] max-xs:bg-filter-mob max-xs:rounded-xl ">
          <Filter lang={lang}>
            <SheetClose asChild>
              <X className="h-[25px] w-[25px]" />
            </SheetClose>
          </Filter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
