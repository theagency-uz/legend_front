import React from "react";

import { Button } from "@/components/ui/button";
import { SheetTrigger } from "@/components/ui/sheet";
import CheckboxCustom from "./checkbox";
import FilterPlaceholder from "../filter-skelet";

import useFetchCategories from "@/hooks/useFetchCategories";

import { useTranslation } from "@/lib/i18n/client";

import { X } from "lucide-react";

import { IFilter } from "@/types/filter";
import { Language } from "@/types/language";

export default function FilterContent({
  lang,
  isMob,
}: {
  lang: keyof Language;
  isMob?: boolean;
}) {
  const { t } = useTranslation(lang);

  const { data: filters, loading } = useFetchCategories();

  if (loading) {
    return <FilterPlaceholder lang={lang} isMob={isMob} />;
  }

  if (filters) {
    return (
      <div className="flex flex-col gap-[3.08vw] max-md:gap-[40px] text-white medium-normal-nospacing w-full sticky top-40 left-0 h-fit">
        <div className="flex justify-between">
          <h3 className="flex items-center gap-[1.08vw]">
            <img
              src="/assets/filter.svg"
              width={18}
              height={18}
              className="w-[18px] h-[18px] xl:w-[1.8vw] xl:h-[1.8vw]"
            />{" "}
            <span>{t("Фильтры")}</span>
          </h3>
          {isMob ? (
            <SheetTrigger asChild>
              <X className="h-[25px] w-[25px]" />
            </SheetTrigger>
          ) : null}
        </div>

        <div className="flex flex-col gap-[2.5vw] max-md:gap-[20px]">
          <div className="flex flex-col gap-[0.83vw] max-md:gap-[10px]">
            <h3>{t("Газ")}</h3>
            <div className="flex flex-col gap-[0.67vw] max-md:gap-[5px]">
              {filters?.["types"].map(({ name, id, slug }: IFilter) => (
                <CheckboxCustom
                  key={id}
                  filterVal={name[lang]}
                  id={`${slug}`}
                  name={"gaz"}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[0.83vw] max-md:gap-[10px]">
            <h3>{t("Материал")}</h3>
            <div className="flex flex-col gap-[0.67vw] max-md:gap-[5px]">
              {filters?.["categories"].map(({ name, id, slug }: IFilter) => (
                <CheckboxCustom
                  key={id}
                  filterVal={name[lang]}
                  id={`${slug}`}
                  name={"material"}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[0.83vw] max-md:gap-[10px]">
            <h3>{t("Литраж")}</h3>
            <div className="flex flex-col gap-[0.67vw] max-md:gap-[5px]">
              {filters?.["variations"].map(({ slug, id }: IFilter) => (
                <CheckboxCustom
                  key={id}
                  filterVal={`${slug} ${t("Л")}`}
                  id={`${slug}`}
                  name={"litrage"}
                />
              ))}
            </div>
          </div>
        </div>

        {isMob ? (
          <div className="md:hidden flex justify-center mt-[40px]">
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
}
