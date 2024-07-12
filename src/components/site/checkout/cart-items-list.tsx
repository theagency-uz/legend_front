"use client";

import Image from "next/image";

import { formatCost } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n/client";

import ProductCount from "../common/product-count";

import { Language } from "@/types/language";

import { useCart } from "@/context/cart.context";
import { IItemInCart } from "@/types/itemInCart";

export default function CartItemsList({ lang }: { lang: keyof Language }) {
  const { t } = useTranslation(lang);

  const { cartItems } = useCart();

  return (
    <div className="px-[20px] max-xs:px-[10px]">
      <h3 className="h3 mb-[46px] max-xs:mb-[23px]">
        {t("Товары в корзине:")}
      </h3>

      <div className="flex flex-col gap-10">
        {cartItems.map((product: IItemInCart) => {
          return (
            <div
              key={product.id}
              className="flex w-full items-center gap-[40px] justify-between max-xs:px-[10px]"
            >
              <div className="flex items-center">
                <Image
                  src={
                    process.env.NEXT_PUBLIC_IMAGE_UPLOAD_URL + product.imageUrl
                  }
                  width={1000}
                  height={2000}
                  alt="товар в корзине"
                  className="w-[100px] h-auto"
                />
              </div>

              <div className="flex justify-between flex-1 items-center max-xs:flex-col max-xs:items-start max-xs:gap-[20px]">
                <p className="base-medium w-[20ch] max-xs:w-full">
                  {product.title[lang]}
                </p>
                <ProductCount product={product} lang={lang} />
                <div className="flex flex-col gap-[5px]">
                  <span className="large-medium-90">
                    {formatCost(product.price)}
                  </span>
                  <span className="base-normal-nospacing uppercase">
                    {t("сум / блок")}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
