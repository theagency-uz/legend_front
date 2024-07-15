import Link from "next/link";

import { X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LangSwitcher from "./lang-switcher";

import { NAVBAR_LEFT, NAVBAR_RIGHT } from "@/constants/site";

import { useTranslation } from "@/lib/i18n/client";

import { useCart } from "@/context/cart.context";

export default function NavbarMob({ lang }: { lang: string }) {
  const { t } = useTranslation(lang);

  const { cartItems } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <img
          src="/assets/hamburger.svg"
          height={25}
          width={25}
          alt="Иконка навигации"
          className="lg:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="text-white w-full border-none bg-nav-mob aspect-[320/736] bg-cover bg-center overflow-y-scroll"
      >
        <SheetHeader>
          <SheetTitle>
            <nav
              className={`w-screen flex items-center container pt-[15px] pl-[20px] pr-[20px] z-50 text-white bg-nav-gradient`}
            >
              <div className="flex-1 flex justify-start">
                <SheetClose>
                  <X className="h-[25px] w-[25px]" />
                </SheetClose>
              </div>
              <div className="flex-1 justify-center cursor-pointer">
                <SheetTrigger asChild>
                  <Link href={`/${lang}`}>
                    <img
                      src={`${"/assets/legend-logo.svg"}`}
                      alt="Legend logo"
                      className={`w-[150px] h-auto`}
                    />
                  </Link>
                </SheetTrigger>
              </div>
              <div className="flex-1 flex justify-end cursor-pointer">
                <Link href={`/${lang}/checkout`} className="relative">
                  <img
                    alt="cart icon"
                    src="/assets/cart.svg"
                    className={`w-[25px] h-[25px]`}
                  />
                  {cartItems?.length ? (
                    <div className="text-xs w-[20px] rounded-xl border-white border-2 flex items-center justify-center absolute bottom-[-40%] right-[-55%] bg-[#488493]">
                      {cartItems?.length}
                    </div>
                  ) : null}
                </Link>
              </div>
            </nav>
          </SheetTitle>
          <div className="h-[90vh] flex flex-col items-center justify-between pt-[90px] pb-[50px]">
            <ul className="flex flex-col justify-center gap-[30px] h3 cursor-pointer">
              {NAVBAR_LEFT.map(({ name, link }, i) => (
                <li key={i}>
                  <SheetTrigger asChild>
                    <Link href={`/${lang}${link}`}>{t(name)}</Link>
                  </SheetTrigger>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-[40px]">
              <ul className="flex gap-[20px]">
                {NAVBAR_RIGHT.map(({ src, alt }, i) => (
                  <li className="cursor-pointer" key={i}>
                    <img src={src} alt={alt} className="w-[30px] h-[30px]" />
                  </li>
                ))}
              </ul>

              <LangSwitcher lang={lang} variant="nav-mob" />
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
