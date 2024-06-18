import { Button } from "@/components/ui/button";

import CatalogCard from "../catalog-card/catalog-card";

import { CATALOG_CARDS } from "@/constants/site";

import { useTranslation } from "@/lib/i18n";

export default async function () {
  const { t } = await useTranslation("ru");

  return (
    <section className="bg-gradient-linear bg-top bg-cover w-[100%] h-[auto] aspect-[1200/1932] text-white">
      <section className="flex flex-col items-center justify-center mb-[20px] gap-[20px]">
        <div className="flex flex-col items-center gap-[5px]">
          <h2 className="base-normal uppercase">{t("catalog")}</h2>
          <h3 className="h3">{t("Выберите свой формат")}</h3>
        </div>
        <p className="w-[35.75vw] base-light text-center">
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
