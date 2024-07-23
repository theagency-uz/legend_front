import { useTranslation } from "@/lib/i18n";

export default async function StepsCard({
  name,
  src,
  width,
  height,
  alt,
  text,
  lang,
}: {
  name: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  text: string;
  lang: string;
}) {
  const { t } = await useTranslation(lang);

  return (
    <div className="">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="mb-[14px]"
      />
      <div className="flex flex-col gap-[3px]">
        <h4 className="small-normal">{t(name)}</h4>
        <p className="small-light">{t(text)}</p>
      </div>
    </div>
  );
}
