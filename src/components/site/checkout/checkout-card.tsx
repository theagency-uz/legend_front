"use client";

import { encode } from "punycode";
import { UseFormHandleSubmit } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { useTranslation } from "@/lib/i18n/client";
import { formatCost } from "@/lib/utils";

import { Language } from "@/types/language";
import { FormData, PAYMENT_TYPE } from "@/types/user-order";
import { IItemInCart } from "@/types/itemInCart";

import { useCart } from "@/context/cart.context";
import { httpClient } from "@/server/request";

import { MIN_CART_PRICE } from "@/constants/site";

export default function CheckoutCard({
  lang,
  mapAddress,
  handleSubmit,
}: {
  lang: keyof Language;
  handleSubmit: UseFormHandleSubmit<FormData, undefined>;
  mapAddress: string;
}) {
  const { t } = useTranslation(lang);

  const { getCartTotal, getTotalItems, cartItems } = useCart();

  async function onSubmitPayme(data: FormData) {
    try {
      if (getCartTotal() === 0 || getCartTotal() < MIN_CART_PRICE) {
        return;
      }

      const { data: result } = await httpClient.post(`/orders`, {
        comment: data.comment,
        name: data.name,
        surname: data.surname,
        phone: data.phone,
        address: mapAddress
          ? JSON.stringify(mapAddress)
          : JSON.stringify({
              street: data.street,
              house: data.house,
              flat: data.flat,
              floor: data.floor,
              entrance: data.entrance,
            }),
        paymentType: PAYMENT_TYPE.PAYME,
        bag: JSON.stringify(
          cartItems.map((item: IItemInCart) => ({
            id: item.id,
            count: item.quantity,
          }))
        ),
        totalPrice: getCartTotal(),
      });

      console.log(result);

      window.open(
        `${process.env.NEXT_PUBLIC_TEST_PAYME_ENDPOINT}/${encode(
          `m=${process.env.NEXT_PUBLIC_PAYME_MERCHANT_ID};ac.order_id=${
            result.data?.id
          };a=${
            result.data?.totalPrice * 100
          };c=http://localhost:3000/order-success?from=payme&orderId=${
            result.data?.id
          };l=${lang}`
        )}`,
        "_ blank"
      );
    } catch (err) {
      console.log(err);
    }
  }

  async function onSubmitClick(data: FormData) {
    try {
      console.log(data, PAYMENT_TYPE.CLICK);
      console.log(cartItems);
      console.log(getCartTotal());

      if (getCartTotal() === 0) {
        return;
      }

      const { data: resource } = await httpClient.post(`/orders`, {
        comment: data.comment,
        name: data.name,
        surname: data.surname,
        phone: data.phone,
        address: JSON.stringify({
          street: data.street,
          house: data.house,
          flat: data.flat,
          floor: data.floor,
          entrance: data.entrance,
        }),
        paymentType: PAYMENT_TYPE.CLICK,
        bag: JSON.stringify(
          cartItems.map((item: IItemInCart) => ({
            id: item.id,
            count: item.quantity,
          }))
        ),
        totalPrice: getCartTotal(),
      });

      console.log(resource);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="w-full rounded-[10px] bg-white bg-opacity-20 sticky top-40 right-0">
      <div className="w-full h-full base-normal-nospacing rounded-[10px] backdrop-blur-[5px]">
        <div className="py-[28px] px-[20px]">
          <h3 className="large-semibold mb-[30px]">{t("Ваш заказ:")}</h3>
          <p className="flex justify-between items-center mb-[20px] max-xs:mb-[6px] base-normal-nospacing lg:xsmall-medium">
            <span>
              {t("Товары")} ({getTotalItems()}):
            </span>{" "}
            <span>
              {formatCost(getCartTotal())} {t("сум")}
            </span>
          </p>
          <p className="flex justify-between items-center base-normal-nospacing lg:xsmall-medium">
            <span>{t("Доставка")}</span> <span>{t("бесплатно")}</span>
          </p>
        </div>

        <div className="max-xs:px-[20px]">
          <Separator className="m-0" />
        </div>

        <div className="py-[28px] px-[20px] flex justify-between items-center flex-wrap gap-[20px] max-xs:py-0 large-semibold">
          <h3>{t("Итого")}</h3>
          <span className="small-medium">
            {formatCost(getCartTotal())} {t("сум")}
          </span>
        </div>

        <div className="flex flex-col gap-[20px] py-[28px] px-[20px]">
          <p className="max-xs:text-center max-xs:w-[20ch] max-xs:m-auto xsmall-medium">
            {t("Доступна только онлайн оплата Click или Payme")}
          </p>
          <div className="flex flex-col items-center justify-center gap-[20px] max-xs:gap-[10px]">
            <Button
              type="submit"
              className="flex justify-between min-w-[230px] max-w-[300px] gap-5 max-xs:gap-[20px] max-xs:justify-center"
              onClick={handleSubmit(onSubmitPayme)}
              value="payme"
            >
              <span className="xsmall-medium">{t("Оплатить Payme")}</span>
              <img
                alt="payme icon"
                src="/assets/payme.svg"
                width={20}
                className="w-[29px] h-auto max-xs:w-[20px]"
              />
            </Button>
            <Button
              type="submit"
              className="flex justify-between min-w-[230px] max-w-[300px] gap-5 max-xs:gap-[20px] max-xs:justify-center"
              onClick={handleSubmit(onSubmitClick)}
            >
              <span className="xsmall-medium">{t("Оплатить Click")}</span>
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
