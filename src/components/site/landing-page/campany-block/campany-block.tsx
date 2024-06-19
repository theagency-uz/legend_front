import Image from "next/image";

import { useTranslation } from "@/lib/i18n";

import { NEWS_CARDS } from "@/constants/site";

import CampanyCard from "../campany-card/campany-card";

export default async function CampanyBlock({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang);

  return (
    <section className="text-white relative">
      <Image
        src="/assets/campany.jpg"
        width={1200}
        height={362}
        alt="капля падает в море"
        className="w-[100vw] h-auto"
      />

      <div className="flex px-[100px] mt-[4.5vw] mb-[150px]">
        <div className="flex flex-col w-[50%] gap-14">
          <div className="flex flex-col gap-[20px]">
            <h3 className="h3">{t("О компании")}</h3>
            <p className="base-light">{t("О компании-текст")}</p>
          </div>

          <div className="flex items-center justify-between gap-[31px]">
            <div className="flex flex-col gap-[20px] flex-1">
              <h3 className="h3">{t("11 000 м")}</h3>
              <p className="base-light">
                {t("Занимает здание производства без учета территории")}
              </p>
            </div>

            <div className="flex flex-col gap-[20px] flex-1">
              <h3 className="h3">{t("2 этажа")}</h3>
              <p className="base-light">
                {t("Где расположены производство и склад")}
              </p>
            </div>
          </div>
        </div>

        <div>
          <Image
            src="/assets/campany-bottle.png"
            width={402}
            height={632}
            alt="Буталка воды Legend"
            className="w-[33.5vw] h-auto aspect-custom2 absolute top-[5%] right-[5%]"
          />
        </div>
      </div>

      <div className="w-full flex justify-center items-center mb-[150px]">
        <img
          src="/assets/campany-legend.svg"
          alt="Лого Legend"
          width={968}
          height={196}
          className="w-[80.67vw] h-[16.33vw]"
        />
      </div>

      <div className="px-[100px] pb-[100px]">
        <h3 className="h3 mb-[40px]">{t("Новости")}</h3>

        <div className="flex justify-between">
          {NEWS_CARDS.map(({ src, alt, width, height }, index) => {
            return (
              <CampanyCard
                key={index}
                src={src}
                alt={alt}
                width={width}
                height={height}
                lang={lang}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
