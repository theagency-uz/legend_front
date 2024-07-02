"use client";

import React, { useState } from "react";

import { Minus, Plus } from "lucide-react";

import { useTranslation } from "@/lib/i18n/client";

export default function ProductCount({ lang }: { lang: string }) {
  const { i18n } = useTranslation(lang);

  const [count, setCount] = useState(1);

  function handleInputChange(value: number) {
    if (value > 1) {
      setCount(value);
    } else {
      setCount(1);
    }
  }

  return (
    <div className="flex items-center rounded-[200px] border border-white w-fit	py-[5px] px-[10px] base-semibold gap-[50px] h-fit max-xs:gap-[15px]">
      <div className="">
        <button
          className="flex items-center"
          onClick={() =>
            setCount((curCount) => (curCount !== 1 ? curCount - 1 : 1))
          }
        >
          <Minus />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <div
          style={{
            width: `${String(count).length}ch`,
            minWidth: `${String(count).length}ch`,
          }}
          className="small-semibold"
        >
          <input
            id="count"
            className="w-full text-center "
            min="1"
            name="quantity"
            value={count}
            type="number"
            onChange={(e) => handleInputChange(Number(e.target.value))}
          />
        </div>
        <label className="small-semibold" htmlFor="count">
          {i18n.t("шт.")}
        </label>
      </div>
      <div className="">
        <button
          className="flex items-center"
          onClick={() => setCount((curCount) => curCount + 1)}
        >
          <Plus />
        </button>
      </div>
    </div>
  );
}
