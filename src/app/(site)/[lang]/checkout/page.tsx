import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Form from "@/components/site/checkout/form";

import { Slash } from "lucide-react";

import { useTranslation } from "@/lib/i18n";

import { Language } from "@/types/language";

export default async function Checkout({
  params: { lang },
}: {
  params: { lang: keyof Language; slug: string };
}) {
  const { t } = await useTranslation(lang);

  return (
    <main className="px-[8vw] py-[11.83vw] max-xs:py-[28vw] pb-[60px] w-full h-auto bg-checkout-mob bg-cover text-white max-xs:bg-checkout-mob bg-top bg-fixed max-xs:px-0">
      <div className="flex flex-col gap-[50px] mb-[32px] max-xs:mb-[16px] max-xs:px-[10px]">
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
                asChild
                className="uppercase medium-normal-nospacing"
              >
                <Link href={`/${lang}/catalog`}>{t("catalog")}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <section className="flex flex-col">
        <div className="flex flex-col gap-[40px] mb-[80px] max-xs:mb-[30px] max-xs:px-[10px] max-xs:gap-[20px]">
          <h2 className="h2">{t("Оформление заказа")}</h2>
          <p className="small-normal-nospacing">
            {t("Минимальная сумма заказа - 100 тысяч сум.")}
          </p>
        </div>

        <Form lang={lang} />
      </section>
    </main>
  );
}
