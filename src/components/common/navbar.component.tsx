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

export default async function Navbar() {
  // const [scrolling, setScrolling] = useState(false);

  const { t } = await useTranslation("ru");

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
      className={`flex items-center container pt-[1.67vw] absolute top-0 left-0 text-white`}
    >
      <div className="flex flex-1 justify-start gap-[7vw]">
        <span className="base-semibold cursor-pointer uppercase">ru | uz</span>
        <ul className="flex gap-[2.5vw] base-normal uppercase cursor-pointer">
          {NAVBAR_LEFT.map(({ name, link }, i) => (
            <li key={i}>
              <Link href={link}>{t(name)}</Link>
            </li>
          ))}
        </ul>
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
          style={{ width: `${DEFAULT_LOGO_SIZE}vw`, height: "auto" }}
        />
      </div>
      <div className="flex flex-1 justify-end gap-[14.4vw]">
        <ul className="flex gap-[1.67vw]">
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
            style={{
              width: `${DEFAULT_ICON_SIZE}vw`,
              height: `${DEFAULT_ICON_SIZE}vw`,
            }}
          />
        </span>
      </div>
    </nav>
  );
}
