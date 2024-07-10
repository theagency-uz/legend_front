import Image from "next/image";
import Link from "next/link";

import { useTranslation } from "@/lib/i18n/client";

import { usePathname } from "next/navigation";
import { formatCost } from "@/lib/utils";

export default function CatalogCard({
  imgSrc,
  alt,
  title,
  volume,
  cost,
  lang,
  slug,
}: {
  imgSrc: string;
  alt: string;
  title: string;
  volume: string | number;
  cost: number;
  lang: string;
  slug: string;
}) {
  const { i18n } = useTranslation(lang);
  const path = usePathname();

  const url = process.env.NEXT_PUBLIC_IMAGE_UPLOAD_URL + imgSrc;

  return (
    <Link
      href={`${path}/${slug}`}
      className="bg-catalog-card w-[21.67vw] h-[40.83vw] rounded-[10px] max-xs:w-full max-xs:h-auto cursor-pointer"
    >
      <div className="rounded-[10px] text-white p-[26px] w-full h-full backdrop-blur-[5px]">
        <div className="flex flex-col h-full gap-[10px]">
          <div className="h-[70%] flex justify-center items-center">
            <Image
              src={url}
              alt={alt[lang]}
              width={1200}
              height={1200}
              className="self-center w-full h-auto"
            />
          </div>

          <div className="flex flex-col gap-[35px]">
            <div className="flex flex-col gap-[5px]">
              <span className="medium-normal tracking-normal">
                {volume} {i18n.t("Л")}
              </span>
              <h3 className="large-medium">{title[lang]}</h3>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col gap-[5px]">
                <span className="large-medium-90">{formatCost(cost)}</span>
                <span className="base-normal-nospacing uppercase">
                  {i18n.t("сум / блок")}
                </span>
              </div>

              <div className="flex flex-col items-center gap-[5px] justify-between cursor-pointer">
                <img
                  alt="cart icon"
                  src="/assets/cart.svg"
                  className={`w-[25px] h-[25px]`}
                />
                <span className="base-normal-nospacing uppercase">
                  {i18n.t("в корзину")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
