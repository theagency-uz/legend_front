import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import CatalogCard from "@/components/site/catalog/card/card";
import { Filter } from "@/components/site/catalog/filter/filter";

import { useTranslation } from "@/lib/i18n";

const products = [
  {
    title: "Вода в пластиковой бутылке ",
    imgSrc: "/assets/cat-1.png",
    alt: "Вода в пластиковой бутылке ",
    volume: "0.33 л",
    cost: "500 000",
    material: "plastic",
  },
  {
    title: "Вода в пластиковой бутылке ",
    imgSrc: "/assets/cat-2.png",
    alt: "Вода в пластиковой бутылке ",
    volume: "0.33 л",
    cost: "500 000",
    material: "plastic",
  },
  {
    title: "Вода в пластиковой бутылке ",
    imgSrc: "/assets/cat-3.png",
    alt: "Вода в пластиковой бутылке ",
    volume: "0.33 л",
    cost: "500 000",
    material: "plastic",
  },
  {
    title: "Вода в пластиковой бутылке ",
    imgSrc: "/assets/cat-1.png",
    alt: "Вода в пластиковой бутылке ",
    volume: "0.33 л",
    cost: "500 000",
    material: "plastic",
  },
  {
    title: "Вода в пластиковой бутылке ",
    imgSrc: "/assets/cat-2.png",
    alt: "Вода в пластиковой бутылке ",
    volume: "0.33 л",
    cost: "500 000",
    material: "glass",
  },
  {
    title: "Вода в пластиковой бутылке ",
    imgSrc: "/assets/cat-3.png",
    alt: "Вода в пластиковой бутылке ",
    volume: "0.33 л",
    cost: "500 000",
    material: "glass",
  },
  {
    title: "Вода в пластиковой бутылке ",
    imgSrc: "/assets/cat-1.png",
    alt: "Вода в пластиковой бутылке ",
    volume: "0.33 л",
    cost: "500 000",
    material: "glass",
  },
  {
    title: "Вода в пластиковой бутылке ",
    imgSrc: "/assets/cat-2.png",
    alt: "Вода в пластиковой бутылке ",
    volume: "0.33 л",
    cost: "500 000",
    material: "glass",
  },
];

export default async function Catalog({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang);

  return (
    <main className="px-[100px] py-[11.83vw] max-xs:py-[28vw] w-full h-auto bg-catalog bg-center bg-cover aspect-[1200/1942] text-white max-xs:px-[10px] max-xs:bg-catalog-mob max-xs:aspect-[442/1878] max-xs:bg-top max-xs:bg-fixed">
      <div className="flex flex-col gap-[50px] mb-[3.92vw] max-xs:mb-[19vw]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="uppercase medium-normal-nospacing"
                href="/"
              >
                {t("main")}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
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
          <h3 className="flex items-center gap-[1.08vw] xs:hidden">
            <img src="/assets/filter.svg" width={16} height={16} />{" "}
            <span>{t("Фильтры")}</span>
          </h3>
        </div>
      </div>

      <div className="flex gap-[1vw] max-xs:flex-col">
        <div className="flex w-[40%] max-xs:hidden">
          <Filter lang={lang} />
        </div>

        <div className="flex flex-wrap gap-[2.5vw] max-xs:flex-col max-xs:gap-[6.26vw]">
          {products.map(({ imgSrc, alt, cost, title, volume }) => (
            <CatalogCard
              imgSrc={imgSrc}
              alt={alt}
              cost={cost}
              title={title}
              volume={volume}
              lang={lang}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
