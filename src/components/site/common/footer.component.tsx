import Link from "next/link";

import LangSwitcher from "./lang-switcher";

import { useTranslation } from "@/lib/i18n";

import { FOOTER_CATALOG_LINKS, FOOTER_MENU_LINKS } from "@/constants/site";

export default async function Footer({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang);

  return (
    <footer className="px-[100px] py-[50px] max-xs:px-[10px] bg-white max-sm:px-[10px] max-md:px-[20px]">
      <div className="flex justify-between mb-[4.67vw] max-xs:flex-col max-xs:gap-[40px] max-sm:flex-col max-sm:gap-[40px]">
        <div className="flex flex-col gap-[41px] justify-between">
          <img
            src="/assets/footer-logo.svg"
            width={149}
            height="auto"
            alt="Лого в футере"
            className="cursor-pointer w-[12.42vw] max-xs:w-[40%] max-sm:w-[40%]"
          />

          <div className="flex gap-[20px]">
            <img
              src="/assets/footer-insta.svg"
              alt="лого instagram"
              width={22}
              height="auto"
              className="cursor-pointer w-[22px] max-xs:w-[8%]"
            />
            <img
              src="/assets/footer-tg.svg"
              alt="лого telegram"
              width={22}
              height="auto"
              className="cursor-pointer w-[22px] max-xs:w-[8%]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[41px] max-xs:gap-[20px]">
          <h3 className="small-semibold uppercase text-primary-100">
            {t("catalog")}
          </h3>

          <ul className="flex flex-col gap-[5px]">
            {FOOTER_CATALOG_LINKS.map(({ text, href }, index) => {
              return (
                <li key={index}>
                  <Link className="small-semibold text-primary-100" href={href}>
                    {t(text)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-[41px] max-xs:gap-[20px]">
          <h3 className="small-semibold uppercase text-primary-100">
            {t("меню")}
          </h3>

          <ul className="flex flex-col gap-[5px]">
            {FOOTER_MENU_LINKS.map(({ text, href }, index) => {
              return (
                <li key={index}>
                  <Link className="small-semibold text-primary-100" href={href}>
                    {t(text)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-[41px] max-xs:gap-[20px]">
          <LangSwitcher lang={lang} variant="footer" />
        </div>
      </div>

      <div className="flex justify-between max-xs:flex-col max-xs:gap-[30px]">
        <div className="flex flex-col gap-[22px] max-xs:gap-[10px] text-primary-100 small-semibold">
          <div className="flex flex-col gap-[5px] max-xs:gap-[2px]">
            <span>{t("Тел")} +998 (71) 200 20-23</span>
            <div className="flex flex-col gap-[5px] max-xs:gap-[2px]">
              <span>E-mail: info@legendwater.uz</span>
              <span>E-mail ({t("отдел продаж")}): sales@legendwater.uz </span>
            </div>
          </div>

          <span>{t("address")}</span>
        </div>

        <Link
          href=""
          className="underline text-primary-100 small-semibold self-end max-xs:self-start"
        >
          {t("Разработка сайта")}
        </Link>
      </div>
    </footer>
  );
}
