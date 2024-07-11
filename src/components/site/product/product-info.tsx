"use client";

import Link from "next/link";

import { formatCost } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

import ProductCount from "../common/product-count";
import ProductVolumeDropdown from "./product-volume-dropdown";
import ProductGallery from "./product-gallery";
import useFetch from "@/hooks/useFetch";
import { useTranslation } from "@/lib/i18n/client";

export default function ProductInfo({
  slug,
  lang,
}: {
  slug: string;
  lang: string;
}) {
  const { t } = useTranslation(lang);

  const {
    data: product,
    error,
    loading,
  } = useFetch({ url: `/products/public/${slug}` });

  const gallery = product?.images?.map((imgUrl: string, id: number) => ({
    id,
    imgUrl,
  }));

  if (loading) {
    return <p>Loading ...</p>;
  }

  if (product) {
    return (
      <>
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
              {product?.productCategoryId ? <ProductVolumeDropdown /> : null}
            </div>

            <div className="flex flex-col gap-[1.08vw] max-xs:gap-[31px] max-xs:mb-[21px]">
              <p className="medium-normal-nospacing leading-normal">
                {t("product-description", {
                  isGaz:
                    product?.productTypeId === 1 ? t("c газом") : t("без газа"),
                })}
              </p>
              <div className="flex items-center gap-[34px] max-xs:gap-[17px]">
                <ProductCount lang={lang} />
                <span className="medium-normal uppercase tracking-[1px]">
                  {product?.productCategoryId
                    ? t("в блоке", { number: product?.itemsPerBlock })
                    : ""}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-[5px]">
                <span className="large-medium-90">
                  {formatCost(product?.price)}
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
      </>
    );
  }
}
