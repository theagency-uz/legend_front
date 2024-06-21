import Link from "next/link";

import { X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { NAVBAR_LEFT, NAVBAR_RIGHT } from "@/constants/site";

import { useTranslation } from "@/lib/i18n";

import LangSwitcher from "./lang-switcher";

export default async function NavbarMob({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <img
          src="/assets/hamburger.svg"
          height={20}
          width={20}
          alt="Иконка навигации"
          className="xs:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="text-white w-full border-none bg-nav-mob"
      >
        <SheetHeader>
          <SheetTitle>
            <nav
              className={`w-screen flex items-center container pt-[15px] pl-[20px] pr-[20px] z-50 text-white bg-nav-gradient`}
            >
              <div className="flex-1 flex justify-start">
                <SheetClose>
                  <X className="h-[20px] w-[20px]" />
                </SheetClose>
              </div>
              <div className="flex-1 justify-center cursor-pointer">
                <img
                  src={`${"/assets/legend-logo.svg"}`}
                  alt="Legend logo"
                  className={`w-[150px] h-auto`}
                />
              </div>
              <div className="flex-1 flex justify-end cursor-pointer">
                <img
                  alt="cart icon"
                  src="/assets/cart.svg"
                  className={`w-[20px] h-[20px]`}
                />
              </div>
            </nav>
          </SheetTitle>
          <SheetDescription className="h-[90vh] flex flex-col items-center justify-evenly">
            <ul className="flex flex-col justify-center gap-[30px] h3 uppercase cursor-pointer">
              {NAVBAR_LEFT.map(({ name, link }, i) => (
                <li key={i}>
                  <Link href={`${lang}${link}`}>{t(name)}</Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-[40px]">
              <ul className="flex gap-[20px]">
                {NAVBAR_RIGHT.map(({ src, alt }, i) => (
                  <li className="cursor-pointer" key={i}>
                    <img src={src} alt={alt} className="w-[20px] h-[20px]" />
                  </li>
                ))}
              </ul>

              <LangSwitcher lang={lang} variant="nav-mob" />
            </div>
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4"></div>
      </SheetContent>
    </Sheet>
  );
}
