import { useTranslation } from "@/lib/i18n";

export default async function HeroBlock({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang);

  return (
    <section className="bg-hero bg-bottom bg-cover w-[100%] h-[auto] aspect-[1200/744] flex flex-col gap-[3.08vw] items-center justify-start">
      <h1 className="mt-[8.83vw] h1 text-white uppercase max-w-[28vw] text-center">
        {t("headingText")}
      </h1>
    </section>
  );
}
