import Image from "next/image";

import { useTranslation } from "@/lib/i18n";

import { DEFAULT_VIEWPORT_WIDTH } from "@/constants/site";

export default async function CatalogCard({
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
  const { t } = await useTranslation(lang);

  return (
    <div
      className={`flex-1 flex flex-col items-center justify-between h-[500px] ${
        !isMain ? "max-xs:hidden" : ""
      }`}
    >
      <div className={`relative w-full flex justify-center h-[75%]`}>
        <Image
          alt={alt}
          src={src}
          width={width}
          height={height}
          className="z-30 lg:hover:animate-moveupdown"
        />
        {isEmpty ? (
          <span className="uppercase large-normal absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            {t("Скоро")}
          </span>
        ) : null}

        {/* {isMain ? <video autoPlay muted src="/assets/video.mp4" /> : null} */}

        <Image
          alt="тень от бутылки"
          src={`/assets/bottle-shadow-${index + 1}.svg`}
          width={width}
          height={width}
          className={`absolute bottom-[0] left-[50%] translate-x-[-50%] ${
            index + 1 === 3 || index + 1 === 1 ? "w-[85px]" : ""
          }`}
        />
      </div>
      <div className="flex flex-col items-center gap-[3px] max-xs:gap-[15px]">
        <span className="medium-normal uppercase">{volume}</span>
        <p className="base-medium">{name}</p>
      </div>
    </div>
  );
}
