"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LangSwitcher({ lang }: { lang: string }) {
  const [langVal, setLang] = useState(lang);
  const path = usePathname();

  const router = useRouter();

  const onToggleLanguage = async (langVal: string) => {
    setLang(langVal);

    router.push(path.replace(/ru|uz/, langVal));
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <span className="small-semibold cursor-pointer uppercase text-primary-100">
          ru | uz
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white border-white p-2 text-black">
        <DropdownMenuRadioGroup
          value={langVal}
          onValueChange={onToggleLanguage}
        >
          <DropdownMenuRadioItem
            className="hover:bg-slate-100 cursor-pointer"
            value="ru"
          >
            RU
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className="hover:bg-slate-100 cursor-pointer"
            value="uz"
          >
            UZ
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
