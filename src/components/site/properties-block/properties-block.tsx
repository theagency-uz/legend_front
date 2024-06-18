import { useTranslation } from "@/lib/i18n";

export default async function PropertiesBlock() {
  const { t } = await useTranslation("ru");

  return (
    <section className="text-white grid grid-cols-2 grid-rows-2 gap-y-5 gap-x-24 px-[100px]">
      <div className="row-span-1 flex flex-col gap-[20px]">
        <h3 className="h3">{t("Главное отличие - живая вода")}</h3>
        <p className="base-light">
          {t(
            "Наш принцип - сохранять лучшее, что дает природа. Для нас недостаточно использовать воду с водохранилищ, мы добываем её с нетронутых артезианских источников с самородной минерализацией. Мы не используем обработку, меняющую живой состав воды или искусственные добавки."
          )}
        </p>
      </div>
      <div className="row-span-1 flex flex-col gap-[14px]">
        <p className="medium-normal">{t("Основной состав, мг/л:")}</p>
        <img src="/assets/chemical-table.svg" alt="12" />
        <div className="flex justify-between">
          <p className="medium-normal">{t("Общая минерализация: 80-160")}</p>
          <p className="medium-normal">{t("PH воды 6,5-8,5")}</p>
        </div>
      </div>
      <div className="row-span-1 flex flex-col gap-[20px]">
        <h3 className="h3">{t("Источник")}</h3>

        <p className="base-light">{t("Источник-текст")}</p>
      </div>
      <div className="row-span-1 flex gap-20 items-end justify-center">
        <div className="flex flex-col gap-5">
          <h3 className="h3">{t("3 пробы")}</h3>
          <p className="base-light">
            {t("Было сделано для отбора источника с полезной водой")}
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="h3">{t("60 метров")}</h3>
          <p className="base-light">
            {t("Глубина источника с наилучшим составом")}
          </p>
        </div>
      </div>
    </section>
  );
}
