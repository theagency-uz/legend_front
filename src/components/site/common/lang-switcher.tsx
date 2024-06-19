"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LangSwitcher() {
  const [lang, setLang] = useState("ru");

  const router = useRouter();

  const onToggleLanguage = async (lang: string) => {
    setLang(lang);

    router.push(`/${lang}`);
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <span className="base-semibold cursor-pointer uppercase">ru | uz</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white border-white p-2 text-black">
        <DropdownMenuRadioGroup value={lang} onValueChange={onToggleLanguage}>
          <DropdownMenuRadioItem value="ru">RU</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="uz">UZ</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
