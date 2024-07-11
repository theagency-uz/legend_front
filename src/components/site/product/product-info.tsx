"use client";

import { ChangeEvent, useState } from "react";
import Link from "next/link";

import { formatCost } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n/client";

import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ProductCount from "../common/product-count";
import ProductVolumeDropdown from "./product-volume-dropdown";
import ProductGallery from "./product-gallery";

import { Slash } from "lucide-react";

import useFetch from "@/hooks/useFetch";

import { useCart } from "@/context/cart.context";

import { IProduct } from "@/types/product";
import { Language } from "@/types/language";

export default function ProductInfo({
  slug,
  lang,
}: {
  slug: string;
  lang: keyof Language;
}) {
  const { t } = useTranslation(lang);

  const { data, error, loading } = useFetch({
    url: `/products/public/${slug}`,
  });

  const product: IProduct = data;

  const [count, setCount] = useState(1);
  const { addToCart, removeFromCart, cartItems } = useCart();

  function handleInputCount(e: ChangeEvent<HTMLInputElement>) {
    if (+e.target.value <= 1) return setCount(1);

    setCount(+e.target.value);
  }

  function handlePlusCount() {
    setCount((count) => count + 1);
    addToCart({
      id: product.id,
      imageUrl: product.previewImage,
      price: product.price,
      title: product.name,
      quantity: count + 1,
    });
  }

  function handleMinusCount() {
    if (count <= 1) return setCount(1);

    setCount((count) => count - 1);
    removeFromCart({
      id: product.id,
      imageUrl: product.previewImage,
      price: product.price,
      title: product.name,
      quantity: count - 1,
    });
  }

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
                <ProductCount
                  lang={lang}
                  count={count}
                  handleInputCount={handleInputCount}
                  handlePlusCount={handlePlusCount}
                  handleMinusCount={handleMinusCount}
                />
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
                  {t(product?.productCategoryId ? "сум / блок" : "сум / штука")}
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
