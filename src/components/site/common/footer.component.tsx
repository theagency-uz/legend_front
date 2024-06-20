import Link from "next/link";

import LangSwitcher from "./lang-switcher";

import { useTranslation } from "@/lib/i18n";

import { FOOTER_CATALOG_LINKS, FOOTER_MENU_LINKS } from "@/constants/site";

export default async function Footer({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang);

  return (
    <footer className="px-[100px] py-[50px] max-xs:px-[10px]">
      <div className="flex justify-between mb-[4.67vw] max-xs:flex-col max-xs:gap-[40px]">
        <div className="flex flex-col gap-[41px] justify-between">
          <img
            src="/assets/footer-logo.svg"
            width={149}
            height="auto"
            alt="Лого в футере"
            className="cursor-pointer w-[12.42vw] max-xs:w-[40%]"
          />

          <div className="flex gap-[20px]">
            <img
              src="/assets/footer-insta.svg"
              alt="лого instagram"
              width={22}
              height="auto"
              className="cursor-pointer w-[1.83vw] max-xs:w-[8%]"
            />
            <img
              src="/assets/footer-tg.svg"
              alt="лого telegram"
              width={22}
              height="auto"
              className="cursor-pointer w-[1.83vw] max-xs:w-[8%]"
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
                  <Link
                    className="medium-normal-nospacing text-primary-100"
                    href={href}
                  >
                    {text}
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
                  <Link
                    className="medium-normal-nospacing text-primary-100"
                    href={href}
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-[41px] max-xs:gap-[20px]">
          <LangSwitcher lang={lang}>
            <span className="small-semibold cursor-pointer uppercase text-primary-100">
              ru | uz
            </span>
          </LangSwitcher>
        </div>
      </div>

      <div className="flex justify-between max-xs:flex-col max-xs:gap-[30px]">
        <div className="flex flex-col gap-[22px] max-xs:gap-[10px] text-primary-100 medium-normal-nospacing">
          <div className="flex flex-col gap-[5px] max-xs:gap-[2px]">
            <span>Тел.: +998 (71) 200 20-23</span>
            <div className="flex flex-col gap-[5px] max-xs:gap-[2px]">
              <span>E-mail: info@legendwater.uz</span>
              <span>E-mail (отдел продаж): sales@legendwater.uz </span>
            </div>
          </div>

          <span>
            Ташкентская область, <br />
            н.п. Юкориюз <br /> Ниёзбек Йули, 30
          </span>
        </div>

        <Link
          href=""
          className="underline text-primary-100 medium-normal-nospacing self-end max-xs:self-start"
        >
          {t("Разработка сайта")}
        </Link>
      </div>
    </footer>
  );
}
