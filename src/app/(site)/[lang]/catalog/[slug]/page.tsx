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

import { PRODUCTS } from "@/constants/site";
import Link from "next/link";

export default async function Product({
  params: { lang, slug },
}: {
  params: { lang: string; slug: string };
}) {
  const { t } = await useTranslation(lang);

  const product = PRODUCTS.find((p) => p.slug === slug);

  return (
    <main className="px-[11.75vw] py-[11.83vw] max-xs:py-[28vw] w-full h-auto bg-product bg-cover text-white max-xs:px-[10px] max-xs:bg-catalog-mob bg-top bg-fixed">
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
                {product?.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <section className="flex justify-end gap-[18vw] items-center mb-[4.5vw] max-xs:flex-col">
        <div className="w-[40%] max-xs:w-full">
          <ProductGallery />
        </div>

        <div className="flex flex-col w-[50%] gap-[4vw] max-xs:w-full">
          <div className="flex flex-col gap-[1.42vw] max-xs:gap-[20px]">
            <h2 className="h3">{product?.title}</h2>
            <ProductVolumeDropdown />
          </div>

          <div className="flex flex-col gap-[1.08vw] max-xs:gap-[31px] max-xs:mb-[41px]">
            <p className="h1 leading-[110%] tracking-[-1px]">
              {product?.description}
            </p>
            <ProductCount lang={lang} />
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-[5px]">
              <span className="large-medium-90">{product?.cost}</span>
              <span className="base-normal-nospacing uppercase">
                {t("сум / штука")}
              </span>
            </div>
            <Button className="px-[2.75vw] py-[0.083vw] base-normal-nospacing">
              <Link href={`/${lang}/checkout`}>{t("Заказать")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section>
        <Accordion defaultValue="item-1" type="single" collapsible>
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

        <Accordion defaultValue="item-2" type="single" collapsible>
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
