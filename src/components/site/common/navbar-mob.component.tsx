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
              className={`w-screen flex items-center container pt-[1.67vw] pb-[40px] max-xs:pt-[15px] max-xs:pl-[20px] max-xs:pr-[20px] fixed z-50 top-0 left-0 text-white`}
            >
              <div className="flex-1 flex justify-start lg:flex-[2]">
                <SheetClose>
                  <X className="h-[25px] w-[25px]" />
                </SheetClose>
              </div>
              <div className="flex-1 justify-center cursor-pointer">
                <SheetTrigger asChild>
                  <Link className="flex justify-center" href={`/${lang}`}>
                    <img
                      src={`${"/assets/legend-logo.svg"}`}
                      alt="Legend logo"
                      className={`max-xs:w-[150px] h-auto max-sm:w-[150px] max-md:w-[150px] max-lg:w-[150px] w-[7.92vw]`}
                    />
                  </Link>
                </SheetTrigger>
              </div>
              <div className="flex-1 flex justify-end cursor-pointer lg:flex-[2]">
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
          <div className="h-[90vh] flex flex-col items-center justify-between pt-[90px] pb-[50px] md:pt-[150px]">
            <ul className="flex flex-col justify-center gap-[30px] h3 cursor-pointer md:h2">
              {NAVBAR_LEFT.map(({ name, link }, i) => (
                <li key={i}>
                  <SheetTrigger asChild>
                    <Link href={`/${lang}${link}`}>{t(name)}</Link>
                  </SheetTrigger>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-[40px] md:gap-[50px]">
              <ul className="flex gap-[20px] md:gap-[40px]">
                {NAVBAR_RIGHT.map(({ src, alt }, i) => (
                  <li className="cursor-pointer" key={i}>
                    <img
                      src={src}
                      alt={alt}
                      className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
                    />
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
