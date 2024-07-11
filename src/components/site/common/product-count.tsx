"use client";

import React, { ChangeEventHandler } from "react";

import { Minus, Plus } from "lucide-react";

import { useTranslation } from "@/lib/i18n/client";

export default function ProductCount({
  lang,
  count,
  handleInputCount,
  handlePlusCount,
  handleMinusCount,
}: {
  lang: string;
  count: number;
  handleInputCount: ChangeEventHandler<HTMLInputElement>;
  handlePlusCount: Function;
  handleMinusCount: Function;
}) {
  const { i18n } = useTranslation(lang);

  return (
    <div className="flex items-center rounded-[200px] border border-white w-fit	py-[5px] px-[10px] base-semibold gap-[17px] h-fit max-xs:gap-[15px]">
      <div>
        <button
          className="flex items-center"
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
