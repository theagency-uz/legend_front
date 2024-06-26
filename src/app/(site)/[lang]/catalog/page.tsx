import CatalogCard from "@/components/site/catalog/card/card";
import Filter from "@/components/site/catalog/filter/filter";

import { useTranslation } from "@/lib/i18n";
import { FilterMob } from "@/components/site/catalog/filter/filter-mob";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

import { PRODUCTS } from "@/constants/site";

export default async function Catalog({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang);

  return (
    <main className="px-[100px] py-[11.83vw] max-xs:py-[28vw] w-full h-auto bg-catalog bg-cover aspect-[1200/1942] text-white max-xs:px-[10px] max-xs:bg-catalog-mob max-xs:aspect-[442/1878] bg-top bg-fixed">
      <div className="flex flex-col gap-[50px] mb-[3.92vw] max-xs:mb-[19vw]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="uppercase medium-normal-nospacing"
                href={`/${lang}`}
              >
                {t("main")}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="rotate-[-15deg]" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="uppercase medium-normal-nospacing"
                href={`catalog`}
              >
                {t("catalog")}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex justify-between">
          <h2 className="uppercase h2">{t("Вода")}</h2>
          <FilterMob lang={lang} />
        </div>
      </div>

      <div className="flex gap-[1vw] max-xs:flex-col">
        <div className="flex w-[40%] max-xs:hidden">
          <Filter lang={lang} />
        </div>

        <div className="flex flex-wrap gap-[2.5vw] max-xs:flex-col max-xs:gap-[6.26vw]">
          {PRODUCTS.map(({ imgSrc, alt, cost, title, volume, slug }, index) => (
            <CatalogCard
              key={index}
              imgSrc={imgSrc}
              alt={alt}
              cost={cost}
              title={title}
              volume={volume}
              lang={lang}
              slug={slug}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
