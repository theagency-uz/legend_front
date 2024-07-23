import Image from "next/image";

import { useTranslation } from "@/lib/i18n";

import { NEWS_CARDS } from "@/constants/site";

import CampanyCard from "../campany-card/campany-card";

export default async function CampanyBlock({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang);

  return (
    <section className="text-white relative">
      <div className="w-full h-auto aspect-[1200/362] bg-campany bg-cover bg-center max-md:bg-campany-mob max-md:aspect-[320/246]"></div>

      <div className="flex px-[100px] mt-[4.5vw] mb-[150px] max-md:mb-[60px] max-md:flex-col-reverse max-md:px-[10px] max-md:mt-[-250px] max-md:gap-[20px]">
        <div className="flex flex-col w-[50%] gap-14 max-md:w-[90%]">
          <div className="flex flex-col gap-[20px]">
            <h3 className="h3">{t("О компании")}</h3>
            <p className="base-light">{t("О компании-текст")}</p>
          </div>

          <div className="flex items-center justify-between gap-[31px] max-md:flex-col max-md:items-start">
            <div className="flex flex-col gap-[20px] max-md:gap-[10px] max-md:w-[60%] flex-1">
              <h3 className="h3">{t("11 000 м")}</h3>
              <p className="base-light w-[26ch]">
                {t("Занимает здание производства без учета территории")}
              </p>
            </div>

            <div className="flex flex-col gap-[20px] max-md:gap-[10px] max-md:w-[60%] flex-1">
              <h3 className="h3">{t("2 этажа")}</h3>
              <p className="base-light w-[26ch]">
                {t("Где расположены производство и склад")}
              </p>
            </div>
          </div>
        </div>

        <div className="max-md:w-[100%] max-md:flex max-md:justify-center">
          <Image
            src="/assets/campany-bottle.webp"
            width={402}
            height={632}
            alt="Буталка воды Legend"
            className="w-[33.5vw] h-auto aspect-custom2 absolute top-[5%] right-[5%] max-md:relative max-md:self-center max-md:w-[70%]"
          />
        </div>
      </div>

      <div className="w-full flex justify-center items-center mb-[150px] max-md:mb-[60px]">
        <img
          src="/assets/campany-legend.svg"
          alt="Лого Legend"
          width={968}
          height={196}
          className="w-[80.67vw] h-[16.33vw] max-sm:w-full max-sm:h-auto"
        />
      </div>

      <div className="px-[100px] pb-[100px] max-xs:px-[0px] max-md:px-[10px] max-md:pb-[60px]">
        <h3 className="h3 mb-[40px] max-md:px-[10px]">{t("Новости")}</h3>

        <div className="flex justify-between max-xs:flex-col max-md:gap-[40px] max-md:items-center max-lg:flex-wrap max-lg:gap-10">
          {NEWS_CARDS.map(
            ({ src, alt, width, height, date, text, title }, index) => {
              return (
                <CampanyCard
                  key={index}
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  lang={lang}
                  date={date}
                  title={title}
                  text={text}
                />
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
