"use client";

import { useState } from "react";

import { Minus, Plus } from "lucide-react";
import { useTranslation } from "@/lib/i18n/client";

export default function ProductCount({ lang }: { lang: string }) {
  const { i18n } = useTranslation(lang);

  const [count, setCount] = useState(1);

  function handleInputChange(value: number) {
    setCount(value);
  }

  return (
    <div className="flex items-center rounded-[200px] border border-white w-fit	py-[5px] px-[10px] small-semibold gap-[0.5vw]">
      <div className="">
        <button
          className="flex items-center"
          onClick={() => setCount((curCount) => curCount - 1)}
        >
          <Minus />
        </button>
      </div>
      <div>
        <input
          className="w-[45px] text-center"
          min="1"
          name="quantity"
          value={count}
          type="number"
          onChange={(e) => handleInputChange(Number(e.target.value))}
        />
        <span>{i18n.t("шт.")}</span>
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
