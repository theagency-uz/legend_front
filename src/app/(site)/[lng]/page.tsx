import HeroBlock from "@/components/site/hero-block/hero.block";
import CatalogBlock from "@/components/site/catalog-block/catalog-block";
import PropertiesBlock from "@/components/site/properties-block/properties-block";
import StepsBlock from "@/components/site/steps-block/steps-block";
import CampanyBlock from "@/components/site/campany-block/campany-block";

import { useTranslation } from "@/lib/i18n";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);

  return (
    <main>
      <HeroBlock />
      <section className="bg-gradient-linear bg-top bg-cover w-[100%] aspect-[1200/1932]">
        <CatalogBlock />
        <PropertiesBlock />
        <StepsBlock />
        <CampanyBlock />
      </section>
    </main>
  );
}
