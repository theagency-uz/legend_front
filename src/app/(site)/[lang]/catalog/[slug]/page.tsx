import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Slash } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import ProductGallery from "@/components/site/product/product-gallery";
import ProductVolumeDropdown from "@/components/site/product/product-volume-dropdown";
import ProductCount from "@/components/site/common/product-count";

import { useTranslation } from "@/lib/i18n";
import { formatCost } from "@/lib/utils";

import { PRODUCTS } from "@/constants/site";

async function getData(productSlug: string) {
  const url: string =
    process.env.NEXT_PUBLIC_BASE_URL + "products/public/" + productSlug || "";

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Product({
  params: { lang, slug },
}: {
  params: { lang: string; slug: string };
}) {
  const { t } = await useTranslation(lang);

  const product = await getData(slug);

  const gallery = product?.images?.map((imgUrl: string, id: number) => ({
    id,
    imgUrl,
  }));

  console.log(gallery);

  return (
    <main className="px-[11.75vw] py-[11.83vw] max-xs:py-[60px] w-full h-auto bg-product bg-cover text-white max-xs:px-[10px] max-xs:bg-catalog-mob bg-top bg-fixed max-xs:pt-[100px]">
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
                href={`/${lang}/catalog`}
              >
                {t("catalog")}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="rotate-[-15deg]" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="uppercase medium-normal-nospacing"
                href={`/${lang}/catalog/${slug}`}
              >
                {product?.name[lang]}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <section className="flex justify-end gap-[10vw] items-center mb-[4.5vw] max-xs:flex-col max-xs:mb-[48px]">
        <div className="w-[45%] max-xs:w-full">
          <ProductGallery gallery={gallery} />
        </div>

        <div className="flex flex-col w-[55%] gap-[4vw] max-xs:w-full max-xs:gap-[20px]">
          <div className="flex flex-col gap-[1.42vw] max-xs:gap-[20px]">
            <h2 className="h3">{product?.name[lang]}</h2>
            {product?.productCategoryId === 3 ? (
              <ProductVolumeDropdown />
            ) : null}
          </div>

          <div className="flex flex-col gap-[1.08vw] max-xs:gap-[31px] max-xs:mb-[21px]">
            <p className="medium-normal-nospacing leading-normal">
              {t("product-description", {
                isGaz: product?.isGaz ? t("c газом") : t("без газа"),
              })}
            </p>
            <div className="flex items-center gap-[34px] max-xs:gap-[17px]">
              <ProductCount lang={lang} />
              <span className="medium-normal uppercase tracking-[1px]">
                {product?.productCategoryId === 3
                  ? ""
                  : t("в блоке", { number: product?.number })}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-[5px]">
              <span className="large-medium-90">
                {formatCost(lang, product?.price || 0)}
              </span>
              <span className="base-normal-nospacing uppercase">
                {t(
                  product?.productCategoryId === 3
                    ? "сум / штука"
                    : "сум / блок"
                )}
              </span>
            </div>
            <Button className="px-[2.75vw] py-[0.5vw] base-normal-nospacing max-xs:w-[142px] max-xs:py-[8px] h-fit">
              <Link href={`/${lang}/checkout`}>{t("Заказать")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-t">
            <AccordionTrigger>{t("Состав и характеристики")}</AccordionTrigger>
            <AccordionContent className="w-2/4 max-xs:w-full">
              <div className="row-span-1 flex flex-col gap-[14px]">
                <p className="small-normal-nospacing">
                  {t("Основной состав, мг/л:")}
                </p>
                <img src="/assets/chemical-table.svg" alt="12" />
                <div className="flex justify-between">
                  <p className="small-normal-nospacing">
                    {t("Общая минерализация: 80-160")}
                  </p>
                  <p className="small-normal-nospacing">
                    {t("PH воды 6,5-8,5")}
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger>{t("Оплата и доставка")}</AccordionTrigger>
            <AccordionContent className="w-[50%] max-xs:w-full">
              {t("Оплата и доставка (текст)")}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
