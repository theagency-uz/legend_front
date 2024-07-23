import { useTranslation } from "@/lib/i18n";

export default async function PropertiesBlock({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang);

  return (
    <section className="text-white grid grid-cols-2 grid-rows-2 max-md:grid-cols-1 max-md:grid-rows-1 gap-y-5 gap-x-24 px-[100px] max-md:px-[10px] mb-[138px] max-md:gap-0 max-md:mb-[60px] max-lg:px-[50px] max-lg:flex max-lg:flex-col">
      <div className="row-span-1 flex flex-col gap-[20px] max-md:mb-[30px]">
        <h3 className="h3">{t("Главное отличие - живая вода")}</h3>
        <p className="base-light">
          {t(
            "Наш принцип - сохранять лучшее, что дает природа. Для нас недостаточно использовать воду с водохранилищ, мы добываем её с нетронутых артезианских источников с самородной минерализацией. Мы не используем обработку, меняющую живой состав воды или искусственные добавки."
          )}
        </p>
      </div>
      <div className="row-span-1 flex flex-col gap-[14px] max-md:pb-[60px]">
        <p className="medium-normal tracking-normal">
          {t("Основной состав, мг/л:")}
        </p>
        <img src={`/assets/chemical-table-${lang}.svg`} alt="12" />
        <div className="flex justify-between">
          <p className="medium-normal tracking-normal">
            {t("Общая минерализация: 80-160")}
          </p>
          <p className="medium-normal tracking-normal">
            {t("PH воды 6,5-8,5")}
          </p>
        </div>
      </div>
      <div className="row-span-1 flex flex-col gap-[20px] max-md:mb-[40px]">
        <h3 className="h3">{t("Источник")}</h3>

        <p className="base-light">{t("Источник-текст")}</p>
      </div>
      <div className="row-span-1 flex max-md:flex-col max-md:items-start max-md:gap-[20px] gap-20 items-end justify-center max-lg:justify-between">
        <div className="flex flex-col gap-5 max-md:gap-[10px] max-md:w-[60%]">
          <h3 className="h3">{t("3 пробы")}</h3>
          <p className="base-light w-[25ch]">
            {t("Было сделано для отбора источника с полезной водой")}
          </p>
        </div>
        <div className="flex max-md:w-[60%] flex-col gap-5 max-md:gap-[10px]">
          <h3 className="h3">{t("60 метров")}</h3>
          <p className="base-light w-[30ch]">
            {t("Глубина источника с наилучшим составом")}
          </p>
        </div>
      </div>
    </section>
  );
}
