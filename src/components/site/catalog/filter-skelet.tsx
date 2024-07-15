import { Button } from "@/components/ui/button";
import { SheetTrigger } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslation } from "@/lib/i18n/client";
import { Language } from "@/types/language";
import { X } from "lucide-react";

export default function FilterPlaceholder({
  lang,
  isMob,
}: {
  lang: keyof Language;
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
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton
                key={i}
                className="w-[50%] h-[25px] rounded-[5px] bg-catalog-card"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[0.83vw] max-xs:gap-[10px]">
          <h3>{t("Материал")}</h3>
          <div className="flex flex-col gap-[0.67vw] max-xs:gap-[5px]">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton
                key={i}
                className="w-[50%] h-[25px] rounded-[5px] bg-catalog-card"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[0.83vw] max-xs:gap-[10px]">
          <h3>{t("Литраж")}</h3>
          <div className="flex flex-col gap-[0.67vw] max-xs:gap-[5px]">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton
                key={i}
                className="w-[50%] h-[25px] rounded-[5px] bg-catalog-card"
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
