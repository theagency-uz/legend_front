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
  key,
  isMain,
}: {
  width: number;
  height: number;
  volume: string;
  name: string;
  src: string;
  alt: string;
  isEmpty: boolean;
  key?: number | string;
  isMain?: boolean;
}) {
  const { t } = await useTranslation("ru");

  return (
    <div
      key={key}
      className={`flex-1 flex flex-col items-center justify-between h-[500px]`}
    >
      <div className={`relative w-full flex justify-center`}>
        <Image
          alt={alt}
          src={src}
          width={width}
          height={height}
          className={`w-[${((width / DEFAULT_VIEWPORT_WIDTH) * 100).toFixed(
            2
          )}vw] h-[${((height / DEFAULT_VIEWPORT_WIDTH) * 100).toFixed(2)}vw] ${
            isMain ? "animate-moveupdown" : ""
          }`}
        />
        {isEmpty ? (
          <span className="uppercase large-normal absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            {t("Скоро")}
          </span>
        ) : null}
        {isMain ? (
          <>
            <Image
              alt="тень от бутылки"
              src="/assets/bottle-shadow.svg"
              width={166}
              height={19}
              className={`w-[${((166 / DEFAULT_VIEWPORT_WIDTH) * 100).toFixed(
                2
              )}vw] h-[${((19 / DEFAULT_VIEWPORT_WIDTH) * 100).toFixed(
                2
              )}vw] absolute bottom-[0] left-[50%] translate-x-[-50%]`}
            />
            <img
              width={620}
              height="auto"
              alt="water splash animation"
              src="/assets/water-splash.gif"
              className="w-[620px] h-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            />
            {/* <video
              width="320"
              height="240"
              autoPlay
              loop
              muted
              playsInline
              preload="none"
            >
              <source src="/assets/water-splash.gif" type="video/gif" />
              Your browser does not support the video tag.
            </video> */}
          </>
        ) : null}
      </div>
      <div className="flex flex-col items-center gap-[3px]">
        <span className="medium-normal uppercase">{volume}</span>
        <p className="base-medium">{name}</p>
      </div>
    </div>
  );
}
