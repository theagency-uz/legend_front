import { useTranslation } from "@/lib/i18n";
import Image from "next/image";

export default async function HeroBlock() {
  const { t } = await useTranslation("ru");

  return (
    <section className="bg-hero bg-bottom bg-cover w-[100%] h-[auto] aspect-[1200/744] flex flex-col gap-[3.08vw] items-center justify-start">
      <h1 className="mt-[8.83vw] h1 text-white uppercase max-w-[28vw] text-center">
        {t("headingText")}
      </h1>

      <Image
        alt="Legend water"
        width={121}
        height={431}
        src="/assets/hero-water.webp"
        priority
        className="w-[10.08vw] h-[35.92vw]"
      />
    </section>
  );
}
