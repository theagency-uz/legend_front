import Link from "next/link";

import { useTranslation } from "@/lib/i18n";

import { FOOTER_CATALOG_LINKS, FOOTER_MENU_LINKS } from "@/constants/site";

export default async function Footer() {
  const { t } = await useTranslation("ru");

  return (
    <footer className="px-[100px] py-[50px]">
      <div className="flex justify-between mb-[4.67vw]">
        <div className="flex flex-col gap-[41px] justify-between">
          <img
            src="/assets/footer-logo.svg"
            width={149}
            height="auto"
            alt="Лого в футере"
            className="cursor-pointer w-[12.42vw]"
          />

          <div className="flex gap-[20px]">
            <img
              src="/assets/footer-insta.svg"
              alt="лого instagram"
              width={22}
              height="auto"
              className="cursor-pointer w-[1.83vw]"
            />
            <img
              src="/assets/footer-tg.svg"
              alt="лого telegram"
              width={22}
              height="auto"
              className="cursor-pointer w-[1.83vw]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[41px]">
          <h3 className="small-semibold uppercase text-primary-100">
            {t("catalog")}
          </h3>

          <ul className="flex flex-col gap-[10px]">
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

        <div className="flex flex-col gap-[41px]">
          <h3 className="small-semibold uppercase text-primary-100">
            {t("меню")}
          </h3>

          <ul className="flex flex-col gap-[10px]">
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

        <div className="flex flex-col gap-[41px]">
          <span className="small-semibold cursor-pointer uppercase">
            ru | uz
          </span>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col gap-[22px] text-primary-100 medium-normal-nospacing">
          <div className="flex flex-col gap-[10px]">
            <span>Тел.: +998 (71) 200 20-23</span>
            <div className="flex flex-col gap-[5px]">
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
          className="underline text-primary-100 medium-normal-nospacing self-end"
        >
          {t("Разработка сайта")}
        </Link>
      </div>
    </footer>
  );
}
