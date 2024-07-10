import React from "react";

import { Button } from "@/components/ui/button";
import CheckboxCustom from "./checkbox";

import { useTranslation } from "@/lib/i18n/client";

import { SheetClose, SheetTrigger } from "@/components/ui/sheet";
import { X } from "lucide-react";

const filters = [
  { filterVal: "Без газа" },
  { filterVal: "С газом" },
  { filterVal: "Стекло" },
  { filterVal: "Пластик" },
  { filterVal: "0.33" },
  { filterVal: "0.5" },
  { filterVal: "1" },
  { filterVal: "1.5" },
  { filterVal: "19" },
];

export default function FilterContent({
  lang,
  isMob,
}: {
  lang: string;
  isMob?: boolean;
}) {
  const { t } = useTranslation(lang);

  return (
    <div className="flex flex-col gap-[3.08vw] max-xs:gap-[40px] text-white medium-normal-nospacing w-full">
      <div className="flex justify-between">
        <h3 className="flex items-center gap-[1.08vw]">
          <img
            src="/assets/filter.svg"
            width={16}
            height={16}
            className="w-[1.33vw] max-xs:w-[4.69vw] max-xs:h-[4.69vw]"
          />{" "}
          <span>{t("Фильтры")}</span>
        </h3>
        {isMob ? (
          <SheetTrigger asChild>
            <X className="h-[25px] w-[25px]" />
          </SheetTrigger>
        ) : null}
      </div>

      <div className="flex flex-col gap-[2.5vw] max-xs:gap-[20px]">
        <div className="flex flex-col gap-[0.83vw] max-xs:gap-[10px]">
          <h3>{t("Газ")}</h3>
          <div className="flex flex-col gap-[0.67vw] max-xs:gap-[5px]">
            {filters.slice(0, 2).map(({ filterVal }, index) => (
              <CheckboxCustom
                key={index}
                filterVal={filterVal}
                id={filterVal}
                name={"gaz"}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[0.83vw] max-xs:gap-[10px]">
          <h3>{t("Материал")}</h3>
          <div className="flex flex-col gap-[0.67vw] max-xs:gap-[5px]">
            {filters.slice(2, 4).map(({ filterVal }, index) => (
              <CheckboxCustom
                key={index}
                filterVal={filterVal}
                id={filterVal}
                name={"material"}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[0.83vw] max-xs:gap-[10px]">
          <h3>{t("Литраж")}</h3>
          <div className="flex flex-col gap-[0.67vw] max-xs:gap-[5px]">
            {filters.slice(4).map(({ filterVal }, index) => (
              <CheckboxCustom
                key={index}
                filterVal={`${filterVal} ${t("Л")}`}
                id={filterVal}
                name={"litrage"}
              />
            ))}
          </div>
        </div>
      </div>

      {isMob ? (
        <div className="xs:hidden flex justify-center mt-[40px]">
          <SheetTrigger asChild>
            <Button className="px-[70px]" type="submit">
              {t("Применить")}
            </Button>
          </SheetTrigger>
        </div>
      ) : null}
    </div>
  );
}
