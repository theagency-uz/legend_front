"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { formatCost } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n/client";

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

import useFetchProduct from "@/hooks/useFetchProduct";

import { IProduct } from "@/types/product";
import { Language } from "@/types/language";

import { useCart } from "@/context/cart.context";
import LinkButton from "../common/link-button.component";

export default function ProductInfo({
  slug,
  lang,
}: {
  slug: string;
  lang: keyof Language;
}) {
  const { t } = useTranslation(lang);

  const { data, error, loading } = useFetchProduct({
    slug,
  });

  const { addToCartQuantity, cartItems } = useCart();

  const product: IProduct = data;
  const productInCart = cartItems.find((item) => item.id === product?.id);
  const [count, setCount] = useState(productInCart?.quantity ?? 1);

  useEffect(() => {
    const productInCart = cartItems.find((item) => item.id === product?.id);
    setCount(productInCart?.quantity ?? 1);
  }, [cartItems, product]);

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
                  asChild
                  className="uppercase medium-normal-nospacing"
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
              <BreadcrumbSeparator>
                <Slash className="rotate-[-15deg]" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink
                  asChild
                  className="uppercase medium-normal-nospacing"
                >
                  <Link href={`/${lang}/catalog/${slug}`}>
                    {product?.name[lang]}
                  </Link>
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
              {product?.productCategoryId !== 1000 ? (
                <ProductVolumeDropdown productId={product.id} />
              ) : null}
            </div>

            <div className="flex flex-col gap-[1.08vw] max-xs:gap-[31px] max-xs:mb-[21px]">
              <p className="medium-normal-nospacing leading-normal">
                {t("product-description", {
                  isGaz:
                    product?.productTypeId === 1 ? t("c газом") : t("без газа"),
                })}
              </p>
              <div className="flex items-center gap-[34px] max-xs:gap-[17px]">
                <ProductCount lang={lang} setCount={setCount} count={count} />
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
                  {formatCost(product?.price * (count ?? 1))}
                </span>
                <span className="base-normal-nospacing uppercase">
                  {t(product?.productCategoryId ? "сум / блок" : "сум / штука")}
                </span>
              </div>
              <LinkButton
                onClick={() =>
                  addToCartQuantity({
                    ...product,
                    quantity: count,
                  })
                }
                href={`/${lang}/checkout`}
              >
                {t("Заказать")}
              </LinkButton>
            </div>
          </div>
        </section>
      </>
    );
  }
}
