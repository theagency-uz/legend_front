import Image from "next/image";

import { STEPS_CARDS } from "@/constants/site";

import { useTranslation } from "@/lib/i18n";

import StepsCard from "../steps-card/steps-card";

export default async function StepsBlock({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang);

  return (
    <section className="text-white flex justify-between gap-y-5 gap-x-24 px-[100px] max-xs:px-0 mb-[141px] max-xs:flex-col-reverse max-xs:mb-[60px]">
      <div className="w-[47.9vw] flex flex-col gap-[50px] max-xs:px-[10px] max-xs:w-[100%] max-xs:gap-[30px]">
        <div className="flex flex-col gap-[20px]">
          <h3 className="h3">{t("5 этапов водоподготовки:")}</h3>
          <p className="base-light">
            {t(
              "Для сохранения полезных свойств воды в производстве мы используем бережную фильтрацию исключительно на европейском оборудовании:"
            )}
          </p>
        </div>

        <div className="gap-[40px] grid grid-cols-3 max-xs:grid-cols-2">
          {STEPS_CARDS.map(({ name, src, width, height, alt, text }, index) => (
            <StepsCard
              key={index}
              name={name}
              src={src}
              width={width}
              height={height}
              alt={alt}
              text={text}
            />
          ))}
        </div>
      </div>

      <Image
        src="/assets/steps.png"
        alt="связка из бутолок воды"
        width={345}
        height={450}
        className={`w-[28.8vw] h-[37.5vw] max-xs:w-screen max-xs:h-auto`}
      />
    </section>
  );
}
