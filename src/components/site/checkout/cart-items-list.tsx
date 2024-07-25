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
    <div className="px-[20px] max-md:px-[10px]">
      <h3 className="h3 mb-[46px] max-md:mb-[23px]">
        {t("Товары в корзине:")}
      </h3>

      <div className="flex flex-col gap-10">
        {cartItems.map((product: IItemInCart) => {
          return (
            <div
              key={product.id}
              className="flex w-full items-center justify-between max-md:px-[10px]"
            >
              <div className="flex max-md:flex-1 md:w-[150px] items-center">
                <Image
                  src={
                    process.env.NEXT_PUBLIC_IMAGE_UPLOAD_URL +
                    product.previewImage
                  }
                  width={1000}
                  height={2000}
                  alt="товар в корзине"
                  className="w-full h-auto"
                />
              </div>

              <div className="flex justify-between flex-1 items-center max-md:flex-col max-md:items-start max-md:gap-10">
                <p className="medium-normal-nospacing w-[20ch] max-md:w-full">
                  {product.name[lang]}
                </p>
                <div className="flex flex-col gap-5 md:flex-row items-start md:items-center md:flex-1 md:justify-around md:flex-wrap">
                  <ProductCount product={product} lang={lang} isCheckout />
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
