"use client";

import React, { ChangeEvent, useState } from "react";

import { Minus, Plus } from "lucide-react";

import { useTranslation } from "@/lib/i18n/client";

import { useCart } from "@/context/cart.context";

import { IItemInCart } from "@/types/itemInCart";

export default function ProductCount({
  lang,
  product,
}: {
  lang: string;
  product: IItemInCart;
}) {
  const { i18n } = useTranslation(lang);
  const [count, setCount] = useState(product.quantity);

  const { addToCart, removeFromCart } = useCart();

  function handleInputCount(e: ChangeEvent<HTMLInputElement>) {
    if (+e.target.value <= 1) return setCount(1);

    setCount(+e.target.value);
    addToCart({
      id: product.id,
      imageUrl: product.imageUrl,
      price: product.price,
      title: product.title,
      quantity: +e.target.value,
    });
  }

  function handlePlusCount() {
    setCount((count) => count + 1);
    addToCart({
      id: product.id,
      imageUrl: product.imageUrl,
      price: product.price,
      title: product.title,
      quantity: count + 1,
    });
  }

  function handleMinusCount() {
    if (count <= 1) {
      setCount(1);
      removeFromCart({
        id: product.id,
        imageUrl: product.imageUrl,
        price: product.price,
        title: product.title,
        quantity: 1,
      });

      return;
    }

    setCount((count) => count - 1);
    removeFromCart({
      id: product.id,
      imageUrl: product.imageUrl,
      price: product.price,
      title: product.title,
      quantity: count - 1,
    });
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
          style={{ width: `${String(count).length}ch` }}
        >
          <input
            id="count"
            className="w-full text-end"
            min="1"
            name="quantity"
            value={count}
            type="number"
            onChange={handleInputCount}
          />
        </div>
        <label className="small-semibold" htmlFor="count">
          {i18n.t("шт.")}
        </label>
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
