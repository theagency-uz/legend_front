import { Button } from "@/components/ui/button";

import CatalogCard from "../catalog-card/catalog-card";

import { CATALOG_CARDS } from "@/constants/site";

import { useTranslation } from "@/lib/i18n";

export default async function ({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang);

  //aspect-[1200/1932]
  return (
    <section className="text-white pb-[130px]">
      <section className="flex flex-col items-center justify-center mb-[20px] gap-[20px]">
        <div className="flex flex-col items-center gap-[5px]">
          <h2 className="base-normal uppercase">{t("catalog")}</h2>
          <h3 className="h3">{t("Выберите свой формат")}</h3>
        </div>
        <p className="w-[35.75vw] max-xs:w-[90%] base-light text-center">
          {t(
            "Мы производим артезианскую воду с газом и без в мелкой, средней и крупной таре для заказа на дом или в компании"
          )}
        </p>
      </section>

      <section className="flex justify-between items-center mb-[50px]">
        {CATALOG_CARDS.map(
          (
            { name, volume, alt, src, width, height, isEmpty, isMain },
            index
          ) => (
            <CatalogCard
              key={index}
              name={name}
              volume={volume}
              alt={alt}
              src={src}
              width={width}
              height={height}
              isEmpty={isEmpty}
              isMain={isMain}
              lang={lang}
            />
          )
        )}
      </section>

      <div className="flex justify-center">
        <Button>{t("Весь каталог")}</Button>
      </div>
    </section>
  );
}
