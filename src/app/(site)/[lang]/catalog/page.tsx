import { ReadonlyURLSearchParams } from "next/navigation";

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

import ProductsRow from "@/components/site/catalog/products-row/products-row";

async function getData() {
  try {
    const url: string = process.env.NEXT_PUBLIC_BASE_URL + "products/public";

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    console.log(err);
  }
}

export default async function Catalog({
  params: { lang },
  searchParams,
}: {
  params: { lang: string };
  searchParams: ReadonlyURLSearchParams;
}) {
  const { t } = await useTranslation(lang);

  const products = await getData();

  console.log(searchParams);

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
          <ProductsRow products={products} lang={lang} />
        </div>
      </div>
    </main>
  );
}
