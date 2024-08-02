import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import ProductInfo from "@/components/site/product/product-info";

import { useTranslation } from "@/lib/i18n";
import { Language } from "@/types/language";
import Image from "next/image";

export default async function Product({
  params: { lang, slug },
}: {
  params: { lang: keyof Language; slug: string };
}) {
  const { t } = await useTranslation(lang);

  return (
    <main className="px-[11.75vw] py-[11.83vw] max-md:py-[60px] w-full text-white max-md:px-[10px] max-md:pt-[100px]">
      <div className="w-full h-screen fixed top-0 left-0 z-[-1] bg-product">
        <Image quality={100} fill src="/assets/bg.webp" alt="bg" />
      </div>
      <ProductInfo lang={lang} slug={slug} />

      <section>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-t">
            <AccordionTrigger className="base-bold">
              {t("Состав и характеристики")}
            </AccordionTrigger>
            <AccordionContent className="w-2/4 max-md:w-full">
              <div className="row-span-1 flex flex-col gap-[14px]">
                <p className="small-normal-nospacing">
                  {t("Основной состав, мг/л:")}
                </p>
                <img src={`/assets/chemical-table-${lang}.svg`} alt="12" />
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
            <AccordionTrigger className="base-bold">
              {t("Оплата и доставка")}
            </AccordionTrigger>
            <AccordionContent className="w-[50%] max-md:w-full leading-snug">
              {t("Оплата и доставка (текст)")}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
