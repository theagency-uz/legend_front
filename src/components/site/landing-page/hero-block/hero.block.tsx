import { useTranslation } from "@/lib/i18n";

export default async function HeroBlock({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang);

  return (
    <section className="bg-hero bg-bottom bg-cover w-[100%] h-auto aspect-[1200/744] flex flex-col gap-[3.08vw] items-center justify-start max-md:aspect-custom3 max-md:bg-hero-mob max-md:h-screen max-md:w-screen max-md:bg-center">
      <h1 className="mt-[8.83vw] h1 text-white uppercase text-center max-w-[28vw] max-md:max-w-[90%] max-md:mt-[100px]">
        {t("headingText")}
      </h1>
    </section>
  );
}
