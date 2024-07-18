import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import ProductInfo from "@/components/site/product/product-info";

import { useTranslation } from "@/lib/i18n";
import { Language } from "@/types/language";

export default async function Product({
  params: { lang, slug },
}: {
  params: { lang: keyof Language; slug: string };
}) {
  const { t } = await useTranslation(lang);

  return (
    <main className="px-[11.75vw] py-[11.83vw] max-xs:py-[60px] w-full h-auto bg-product bg-cover text-white max-xs:px-[10px] max-xs:bg-catalog-mob bg-top bg-fixed max-xs:pt-[100px]">
      <ProductInfo lang={lang} slug={slug} />

      <section>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-t">
            <AccordionTrigger className="base-bold">
              {t("Состав и характеристики")}
            </AccordionTrigger>
            <AccordionContent className="w-2/4 max-xs:w-full">
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
            <AccordionContent className="w-[50%] max-xs:w-full leading-snug">
              {t("Оплата и доставка (текст)")}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
