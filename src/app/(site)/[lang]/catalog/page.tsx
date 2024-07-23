import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Filter from "@/components/site/catalog/filter/filter";
import { FilterMob } from "@/components/site/catalog/filter/filter-mob";
import ProductsRow from "@/components/site/catalog/products-row/products-row";

import { Slash } from "lucide-react";

import { useTranslation } from "@/lib/i18n";

import { Language } from "@/types/language";
import Link from "next/link";

export default async function Catalog({
  params: { lang },
}: {
  params: { lang: keyof Language };
}) {
  const { t } = await useTranslation(lang);

  return (
    <main className="px-[80px] py-[11.83vw] max-md:py-[28vw] w-full h-auto bg-catalog bg-cover aspect-[1200/1942] text-white max-xs:px-[10px] max-xs:bg-catalog-mob max-xs:aspect-[442/1878] bg-top bg-fixed max-sm:px-[10px] max-lg:px-[50px]">
      <div className="flex flex-col gap-[50px] mb-[3.92vw] max-xs:mb-[19vw]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="uppercase medium-normal-nospacing"
                asChild
              >
                <Link href={`/${lang}`}>{t("main")}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="rotate-[-15deg]" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="uppercase medium-normal-nospacing"
                asChild
              >
                <Link href={`catalog`}>{t("catalog")}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex justify-between">
          <h2 className="capitalize h2">{t("Вода")}</h2>
          <FilterMob lang={lang} />
        </div>
      </div>

      <div className="flex w-full justify-between max-xs:flex-col max-xl:gap-10 relative">
        <div className="flex w-[15%] max-md:hidden relative">
          <Filter lang={lang} />
        </div>

        <div className="flex w-[80%] justify-start flex-wrap gap-[2.5vw] max-sm:flex-col max-xs:gap-[6.26vw] max-sm:flex max-sm:flex-wrap max-lg:w-full max-lg:grid max-lg:grid-cols-2">
          <ProductsRow lang={lang} />
        </div>
      </div>
    </main>
  );
}
