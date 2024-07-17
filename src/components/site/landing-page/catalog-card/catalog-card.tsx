"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { useTranslation } from "@/lib/i18n/client";

export default function CatalogCard({
  width,
  height,
  volume,
  name,
  src,
  alt,
  isEmpty,
  isMain,
  lang,
  index,
}: {
  width: number;
  height: number;
  volume: string;
  name: string;
  src: string;
  alt: string;
  isEmpty: boolean;
  isMain?: boolean;
  lang: string;
  index: number;
}) {
  const { t } = useTranslation(lang);

  return (
    <div
      className={`flex-1 flex flex-col items-center gap-[30px] h-[500px] ${
        !isMain ? "max-xs:hidden" : ""
      }`}
    >
      <div className={`relative w-full flex justify-center h-[75%]`}>
        <motion.div
          whileHover={{ translateY: "-30px" }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <Image
            alt={alt}
            src={src}
            width={width}
            height={height}
            className="z-30 transition-all object-cover w-[200px] h-full"
          />
          {isEmpty ? (
            <span className="uppercase large-normal absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              {t("Скоро")}
            </span>
          ) : null}
        </motion.div>

        {/* {isMain ? <video autoPlay muted src="/assets/video.mp4" /> : null} */}

        <Image
          alt="тень от бутылки"
          src={`/assets/bottle-shadow-1.svg`}
          width={width}
          height={width}
          className={`absolute bottom-[-10px] ${
            index + 1 === 3 || index + 1 === 1 ? "w-[85px]" : "w-[116px]"
          }`}
        />
      </div>
      <div className="flex flex-col items-center gap-[3px] max-xs:gap-[15px]">
        <span className="medium-normal uppercase">{t(volume)}</span>
        <p className="base-medium">{t(name)}</p>
      </div>
    </div>
  );
}
