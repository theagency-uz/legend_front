// "use client";

// import { usePathname, useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// export default function LangSwitcher({
//   lang,
//   children,
// }: {
//   lang: string;
//   children: React.ReactNode;
// }) {
//   const [langVal, setLang] = useState(lang);

//   const path = usePathname();
//   const router = useRouter();

//   const onToggleLanguage = async (langVal: string) => {
//     setLang(langVal);

//     router.push(path.replace(/ru|uz/, langVal));
//   };

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       localStorage.setItem("lang", lang);
//     }
//   }, [langVal]);

//   return (
//     <DropdownMenu modal={false}>
//       <DropdownMenuTrigger asChild className="max-xs:max-w-fit">{children}</DropdownMenuTrigger>
//       <DropdownMenuContent className="bg-white border-white p-2 text-black">
//         <DropdownMenuRadioGroup
//           value={langVal}
//           onValueChange={onToggleLanguage}
//         >
//           <DropdownMenuRadioItem
//             className="hover:bg-slate-100 cursor-pointer"
//             value="ru"
//           >
//             RU
//           </DropdownMenuRadioItem>
//           <DropdownMenuRadioItem
//             className="hover:bg-slate-100 cursor-pointer"
//             value="uz"
//           >
//             UZ
//           </DropdownMenuRadioItem>
//         </DropdownMenuRadioGroup>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LangSwitcher({
  lang,
  variant,
}: {
  lang: string;
  variant: "header" | "footer";
}) {
  const [langVal, setLang] = useState(lang);

  const path = usePathname();
  const router = useRouter();

  const onToggleLanguage = async (langVal: string) => {
    setLang(langVal);

    router.push(path.replace(/ru|uz/, langVal));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang);
    }
  }, [langVal]);

  return (
    <div
      className={
        variant === "header"
          ? "text-white base-semibold"
          : variant === "footer"
          ? "text-primary-100 small-semibold"
          : ""
      }
    >
      <span className="cursor-pointer uppercase">ru | uz</span>
    </div>
  );
}
