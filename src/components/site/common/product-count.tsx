"use client";

import React, { Dispatch, SetStateAction } from "react";

import { Minus, Plus } from "lucide-react";

import { useTranslation } from "@/lib/i18n/client";

import { useCart } from "@/context/cart.context";
import { IItemInCart } from "@/types/itemInCart";

export default function ProductCount({
  lang,
  isCheckout,
  product,
  count,
  setCount,
}: {
  lang: string;
  isCheckout?: boolean;
  product?: IItemInCart;
  count?: number;
  setCount?: Dispatch<SetStateAction<number>>;
}) {
  const { i18n } = useTranslation(lang);

  const { addToCart, removeFromCart } = useCart();

  function handlePlusCount() {
    setCount && setCount((count) => count + 1);
    isCheckout && product && addToCart(product);
  }

  function handleMinusCount() {
    if ((count ?? product?.quantity ?? 1) <= 1) {
      setCount && setCount(1);
      isCheckout && product && removeFromCart({ ...product, quantity: 1 });
      return;
    }
    setCount && setCount((count) => count - 1);
    isCheckout && product && removeFromCart(product);
  }

  return (
    <div className="flex items-center rounded-[200px] border border-white w-fit	py-[5px] px-[10px] base-semibold gap-[17px] h-fit max-xs:gap-[15px]">
      <div>
        <button
          className="flex items-center"
          type="button"
          onClick={() => handleMinusCount()}
        >
          <Minus />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <div
          className="small-semibold w-[1ch] min-w-[1ch] max-w-[3ch]"
          style={{
            width: `${String(count ?? product?.quantity).length}ch`,
          }}
        >
          <span className="w-full text-end">{count ?? product?.quantity}</span>
        </div>
        <span className="small-semibold">{i18n.t("шт.")}</span>
      </div>
      <div className="">
        <button
          className="flex items-center"
          type="button"
          onClick={() => {
            handlePlusCount();
          }}
        >
          <Plus />
        </button>
      </div>
    </div>
  );
}
