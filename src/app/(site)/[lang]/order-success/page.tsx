import Image from "next/image";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";

import { useTranslation } from "@/lib/i18n";

export default async function OrderSuccess({
  params: { lang },
}: {
  params: { lang: string; slug: string };
}) {
  const { t } = await useTranslation(lang);

  return (
    <main className="px-[11.75vw] py-[11.83vw] max-xs:py-[28vw] w-full h-auto bg-product bg-cover text-white max-xs:bg-catalog-mob bg-top bg-fixed max-xs:px-0">
      <div className="flex flex-col gap-[50px] mb-[32px] max-xs:mb-[16px] max-xs:px-[10px]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="uppercase medium-normal-nospacing"
                asChild
              >
                <Link href={`/${lang}`}>{t("вернуться на главную")}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <section className="flex justify-between w-full items-center max-xs:flex-col-reverse max-xs:justify-center max-xs:items-center max-xs:gap-[40px]">
        <div className="flex flex-col gap-[36px] max-xs:px-[20px]">
          <h1 className="h2">{t("Cпасибо за заказ!")}</h1>
          <p className="small-normal-nospacing leading-[130%] w-[50%] max-xs:w-full">
            {t("order-success-message")}
          </p>
        </div>

        <div>
          <Image
            alt="Вода Legend"
            src="/assets/order-success.webp"
            width={392}
            height={380}
          />
        </div>
      </section>
    </main>
  );
}
