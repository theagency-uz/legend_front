"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { NAVBAR_RIGHT, NAVBAR_LEFT, DEFAULT_ICON_SIZE } from "@/constants/site";

import LangSwitcher from "./lang-switcher";
import NavbarMob from "./navbar-mob.component";

import { useTranslation } from "@/lib/i18n/client";
import { useCart } from "@/context/cart.context";

export default function Navbar({ lang }: { lang: string }) {
  const { t } = useTranslation(lang);

  const [scrolling, setScrolling] = useState(false);
  const [numItems, setNumItems] = useState(0);

  const { cartItems } = useCart();

  const handleScroll = function () {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setNumItems(cartItems.length);
  }, [cartItems]);

  return (
    <nav
      className={`w-screen flex items-center container pt-[1.67vw] pb-[40px] max-xs:pt-[15px] max-xs:pl-[20px] max-xs:pr-[20px] fixed z-50 top-0 left-0 text-white ${
        scrolling ? "bg-nav-gradient-scrolling" : "bg-nav-gradient"
      }`}
    >
      <div className="flex-1 lg:flex-[2]">
        <div className="flex justify-start gap-[7vw] max-xs:hidden max-sm:hidden max-md:hidden max-lg:hidden">
          <LangSwitcher lang={lang} variant="header" />
          <ul className="flex gap-[2.5vw] items-center base-semibold tracking-widest uppercase cursor-pointer">
            {NAVBAR_LEFT.map(({ name, link }, i) => (
              <li key={i}>
                <Link href={`/${lang}${link}`}>{t(name)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <NavbarMob lang={lang} />
      </div>
      <div className="flex-1 flex justify-center cursor-pointer">
        <Link href={`/${lang}`}>
          <img
            src={`${"/assets/legend-logo.svg"}`}
            alt="Legend logo"
            className={`max-xs:w-[150px] h-auto max-sm:w-[150px] max-md:w-[150px] max-lg:w-[150px] w-[7.92vw]`}
          />
        </Link>
      </div>
      <div className="flex flex-1 lg:flex-[2] justify-end gap-[14.4vw]">
        <ul className="flex gap-[1.67vw] max-xs:hidden max-sm:hidden max-md:hidden max-lg:hidden">
          {NAVBAR_RIGHT.map(({ src, alt }, i) => (
            <li className="cursor-pointer" key={i}>
              <img
                src={src}
                alt={alt}
                className="lg:w-[2vw] lg:h-[2vw]"
                // style={{
                //   width: `${DEFAULT_ICON_SIZE}vw`,
                //   height: `${DEFAULT_ICON_SIZE}vw`,
                // }}
              />
            </li>
          ))}
        </ul>
        <Link href={`/${lang}/checkout`} className="relative cursor-pointer">
          <img
            alt="cart icon"
            src="/assets/cart.svg"
            className={`max-xs:w-[25px] max-xs:h-[25px] max-sm:w-[25px] max-sm:h-[25px] max-md:w-[25px] max-md:h-[25px] max-lg:w-[25px] max-lg:h-[25px] lg:w-[2vw] lg:h-[2vw]`}
          />

          {numItems ? (
            <div className="text-xs w-[20px] rounded-full border-white border-2 flex items-center justify-center absolute bottom-[-40%] right-[-55%] bg-[#488493] max-xs:bottom-[-40%] max-xs:right-[-55%] max-xs:w-[20px] xl:-bottom-3 xl:-right-3">
              {numItems}
            </div>
          ) : null}
        </Link>
      </div>
    </nav>
  );
}
