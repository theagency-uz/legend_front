import { useTranslation } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";

export default async function CampanyCard({
  src,
  alt,
  width,
  height,
  key,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  key?: number | string;
}) {
  const { t } = await useTranslation("ru");

  return (
    <div key={key} className="flex flex-col gap-[20px] w-[25%]">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full"
      />

      <div className="flex flex-col">
        <span className="small-semibold mb-[10px]">20.02.2024</span>
        <p className="base-light mb-[24px]">
          Каталонские ученые разработали теплицу с солнечными панелями
        </p>
        <Link className="small-semibold" href="#">
          {t("Подробнее")}
        </Link>
      </div>
    </div>
  );
}
