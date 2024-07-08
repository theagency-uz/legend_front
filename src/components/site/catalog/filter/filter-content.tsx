import React from "react";

import { Button } from "@/components/ui/button";
import CheckboxCustom from "./checkbox";

import { useTranslation } from "@/lib/i18n/client";

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
  children,
}: {
  lang: string;
  children?: React.ReactNode;
}) {
  const { i18n } = useTranslation(lang);

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
          <span>{i18n.t("Фильтры")}</span>
        </h3>
        {children}
      </div>

      <div className="flex flex-col gap-[2.5vw] max-xs:gap-[20px]">
        <div className="flex flex-col gap-[0.83vw] max-xs:gap-[10px]">
          <h3>{i18n.t("Газ")}</h3>
          <div className="flex flex-col gap-[0.67vw] max-xs:gap-[5px]">
            {filters.slice(0, 2).map(({ filterVal }, index) => (
              <CheckboxCustom
                key={index}
                filterVal={filterVal}
                id={filterVal}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[0.83vw] max-xs:gap-[10px]">
          <h3>{i18n.t("Материал")}</h3>
          <div className="flex flex-col gap-[0.67vw] max-xs:gap-[5px]">
            {filters.slice(2, 4).map(({ filterVal }, index) => (
              <CheckboxCustom
                key={index}
                filterVal={filterVal}
                id={filterVal}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[0.83vw] max-xs:gap-[10px]">
          <h3>{i18n.t("Литраж")}</h3>
          <div className="flex flex-col gap-[0.67vw] max-xs:gap-[5px]">
            {filters.slice(4).map(({ filterVal }, index) => (
              <CheckboxCustom
                key={index}
                filterVal={`${filterVal} ${i18n.t("Л")}`}
                id={filterVal}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="xs:hidden flex justify-center mt-[40px]">
        <Button className="px-[70px]" type="submit">
          {i18n.t("Применить")}
        </Button>
      </div>
    </div>
  );
}
