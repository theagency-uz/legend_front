"use client";

import { useTranslation } from "@/lib/i18n/client";

import CheckboxCustom from "./checkbox";

const filters = [
  { filterVal: "Стекло" },
  { filterVal: "Пластик" },
  { filterVal: "0.33 л" },
  { filterVal: "0.5 л" },
  { filterVal: "1 л" },
  { filterVal: "1.5 л" },
  { filterVal: "19 л" },
];

export function Filter({ lang }: { lang: string }) {
  const { i18n } = useTranslation(lang);

  return (
    <div className="flex flex-col gap-[3.08vw] text-white medium-normal-nospacing w-full">
      <h3 className="flex items-center gap-[1.08vw]">
        <img
          src="/assets/filter.svg"
          width={16}
          height={16}
          className="w-[1.33vw]"
        />{" "}
        <span>{i18n.t("Фильтры")}</span>
      </h3>

      <div className="flex flex-col gap-[2.5vw]">
        <div className="flex flex-col gap-[0.83vw]">
          <h3>{i18n.t("Материал")}</h3>
          <div className="flex flex-col gap-[0.67vw]">
            {filters.slice(0, 2).map(({ filterVal }) => (
              <CheckboxCustom filterVal={filterVal} id={filterVal} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[0.83vw]">
          <h3>{i18n.t("Литраж")}</h3>
          <div className="flex flex-col gap-[0.67vw]">
            {filters.slice(2).map(({ filterVal }) => (
              <CheckboxCustom filterVal={filterVal} id={filterVal} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
