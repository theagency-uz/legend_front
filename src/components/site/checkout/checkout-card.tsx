"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { useTranslation } from "@/lib/i18n/client";
import { formatCost } from "@/lib/utils";

import { Language } from "@/types/language";

import { useCart } from "@/context/cart.context";

export default function CheckoutCard({ lang }: { lang: keyof Language }) {
  const { t } = useTranslation(lang);

  const { getCartTotal, getTotalItems } = useCart();

  return (
    <div className="w-full rounded-[10px] bg-white bg-opacity-20 sticky top-40 right-0">
      <div className="w-full h-full base-normal-nospacing rounded-[10px] backdrop-blur-[5px]">
        <div className="py-[28px] px-[20px]">
          <h3 className="large-semibold mb-[30px]">{t("Ваш заказ:")}</h3>
          <p className="flex justify-between items-center mb-[20px] max-xs:mb-[20px] large-semibold">
            <span>
              {t("Товары")} ({getTotalItems()}):
            </span>{" "}
            <span>
              {formatCost(getCartTotal())} {t("сум")}
            </span>
          </p>
          <p className="flex justify-between items-center large-semibold">
            <span>{t("Доставка")}</span> <span>{t("бесплатно")}</span>
          </p>
        </div>

        <div className="max-xs:px-[20px]">
          <Separator className="m-0" />
        </div>

        <div className="py-[28px] px-[20px] flex justify-between flex-wrap gap-[20px] items-end max-xs:py-0 large-semibold">
          <h3>{t("Итого")}</h3>
          <span>
            {formatCost(getCartTotal())} {t("сум")}
          </span>
        </div>

        <div className="flex flex-col gap-[20px] py-[28px] px-[20px]">
          <p className="max-xs:text-center max-xs:w-[20ch] max-xs:m-auto">
            {t("Доступна только онлайн оплата Click или Payme")}
          </p>
          <div className="flex flex-col items-center justify-center gap-[20px] max-xs:gap-[10px]">
            <Button
              type="submit"
              className="flex justify-between w-fit gap-5 max-xs:gap-[20px] max-xs:justify-center"
            >
              <span className="small-semibold">{t("Оплатить Payme")}</span>
              <img
                alt="payme icon"
                src="/assets/payme.svg"
                width={20}
                className="w-[29px] h-auto max-xs:w-[20px]"
              />
            </Button>
            <Button
              type="submit"
              className="flex justify-between w-fit gap-5 max-xs:gap-[20px] max-xs:justify-center"
            >
              <span className="small-semibold">{t("Оплатить Click")}</span>
              <img
                alt="click icon"
                src="/assets/click.svg"
                width={20}
                className="w-[29px] h-auto max-xs:w-[20px]"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
