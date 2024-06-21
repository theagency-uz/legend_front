import HeroBlock from "@/components/site/landing-page/hero-block/hero.block";
import CatalogBlock from "@/components/site/landing-page/catalog-block/catalog-block";
import PropertiesBlock from "@/components/site/landing-page/properties-block/properties-block";
import StepsBlock from "@/components/site/landing-page/steps-block/steps-block";
import CampanyBlock from "@/components/site/landing-page/campany-block/campany-block";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <main>
      <HeroBlock lang={lang} />
      <section className="bg-gradient-linear bg-top bg-cover w-[100%] h-auto max-xs:bg-gradient-linear-mob max-xs:bg-contain max-xs:bg-primary-200 max-xs:aspect-[320/1878] bg-no-repeat">
        <CatalogBlock lang={lang} />
        <PropertiesBlock lang={lang} />
        <StepsBlock lang={lang} />
        <CampanyBlock lang={lang} />
      </section>
    </main>
  );
}
