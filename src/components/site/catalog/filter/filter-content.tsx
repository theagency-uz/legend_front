import React from "react";

import { Button } from "@/components/ui/button";
import { SheetTrigger } from "@/components/ui/sheet";
import CheckboxCustom from "./checkbox";

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

  const { data: filters, error, loading } = useFetchCategories();

  if (loading) {
    return <p>Loading ...</p>;
  }

  if (filters) {
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

          <div className="flex flex-col gap-[0.83vw] max-xs:gap-[10px]">
            <h3>{t("Материал")}</h3>
            <div className="flex flex-col gap-[0.67vw] max-xs:gap-[5px]">
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

          <div className="flex flex-col gap-[0.83vw] max-xs:gap-[10px]">
            <h3>{t("Литраж")}</h3>
            <div className="flex flex-col gap-[0.67vw] max-xs:gap-[5px]">
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
}
