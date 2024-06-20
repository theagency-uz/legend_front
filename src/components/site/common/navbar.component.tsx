// "use client";

// import { useState, useEffect } from "react";
import Link from "next/link";

import {
  NAVBAR_RIGHT,
  NAVBAR_LEFT,
  DEFAULT_ICON_SIZE,
  DEFAULT_LOGO_SIZE,
} from "@/constants/site";

import { useTranslation } from "@/lib/i18n";

import LangSwitcher from "./lang-switcher";

export default async function Navbar({ lang }: { lang: string }) {
  // const [scrolling, setScrolling] = useState(false);

  const { t } = await useTranslation(lang);

  // const handleScroll = function () {
  //   if (window.scrollY > 20) {
  //     setScrolling(true);
  //   } else {
  //     setScrolling(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    // <nav
    //   className={`flex items-center container pt-[1.67vw] fixed top-0 left-0 text-white ${
    //     scrolling ? "text-primary-100 bg-white pb-[3.25vw]" : ""
    //   }`}
    // >
    <nav
      className={`w-screen flex items-center container pt-[1.67vw] max-xs:pt-[15px] max-xs:pl-[20px] max-xs:pr-[20px] fixed z-50 top-0 left-0 text-white bg-nav-gradient`}
    >
      <div className="flex-1">
        <div className="flex justify-start gap-[7vw] max-xs:hidden">
          <LangSwitcher lang={lang}>
            <span className="base-semibold cursor-pointer uppercase">
              ru | uz
            </span>
          </LangSwitcher>
          <ul className="flex gap-[2.5vw] base-normal uppercase cursor-pointer">
            {NAVBAR_LEFT.map(({ name, link }, i) => (
              <li key={i}>
                <Link href={`${lang}${link}`}>{t(name)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <img
          src="/assets/hamburger.svg"
          height={16}
          width={16}
          alt="Иконка навигации"
          className="xs:hidden"
        />
      </div>
      <div className="flex-1 flex justify-center cursor-pointer">
        <img
          // src={`${
          //   scrolling
          //     ? "/assets/legend-logo-blue.svg"
          //     : "/assets/legend-logo.svg"
          // }`}
          src={`${"/assets/legend-logo.svg"}`}
          alt="Legend logo"
          className={`max-xs:w-[100px] max-xs:h-auto w-[${DEFAULT_LOGO_SIZE.toString()}vw] h-auto`}
        />
      </div>
      <div className="flex flex-1 justify-end gap-[14.4vw]">
        <ul className="flex gap-[1.67vw] max-xs:hidden">
          {NAVBAR_RIGHT.map(({ src, alt }, i) => (
            <li className="cursor-pointer" key={i}>
              <img
                src={src}
                alt={alt}
                style={{
                  width: `${DEFAULT_ICON_SIZE}vw`,
                  height: `${DEFAULT_ICON_SIZE}vw`,
                }}
              />
            </li>
          ))}
        </ul>
        <span className="cursor-pointer">
          <img
            alt="cart icon"
            src="/assets/cart.svg"
            className={`max-xs:w-[16px] max-xs:h-[16px] w-[${DEFAULT_ICON_SIZE.toString()}vw] h-[${DEFAULT_ICON_SIZE.toString()}vw]`}
          />
        </span>
      </div>
    </nav>
  );
}
