import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";

import { MapPin, Slash } from "lucide-react";

import { useTranslation } from "@/lib/i18n";
import Image from "next/image";
import ProductCount from "@/components/site/common/product-count";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import CheckoutCard from "@/components/site/checkout/checkout-card";

const productsInCart = [
  {
    id: 1,
    name: "Вода в пластиковой бутылке 19 л",
    imgSrc: "/assets/product-cart.webp",
    alt: "Вода в пластиковой бутылке 19 л",
    cost: 100000,
  },
  {
    id: 2,
    name: "Вода в пластиковой бутылке 19 л",
    imgSrc: "/assets/product-cart.webp",
    alt: "Вода в пластиковой бутылке 19 л",
    cost: 300000,
  },
];

export default async function Checkout({
  params: { lang },
}: {
  params: { lang: string; slug: string };
}) {
  const { t } = await useTranslation(lang);

  return (
    <main className="px-[8vw] py-[11.83vw] max-xs:py-[28vw] pb-[60px] w-full h-auto bg-checkout-mob bg-cover text-white max-xs:bg-checkout-mob bg-top bg-fixed max-xs:px-0">
      <div className="flex flex-col gap-[50px] mb-[32px] max-xs:mb-[16px] max-xs:px-[10px]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="uppercase medium-normal-nospacing"
                href={`/${lang}`}
              >
                {t("main")}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="rotate-[-15deg]" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="uppercase medium-normal-nospacing"
                href={`/${lang}/catalog`}
              >
                {t("catalog")}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <section className="flex flex-col">
        <div className="flex flex-col gap-[40px] mb-[80px] max-xs:mb-[30px] max-xs:px-[10px] max-xs:gap-[20px]">
          <h2 className="h2">{t("Оформление заказа")}</h2>
          <p className="small-normal-nospacing">
            {t("Минимальная сумма заказа - 100 тысяч сум.")}
          </p>
        </div>

        <div className="flex gap-[80px] justify-between max-xs:flex-col max-xs:gap-0">
          <div className="w-[75%] max-xs:w-full">
            <div className="max-xs:px-[10px]">
              <Separator className="mt-0 max-xs:mt-0 max-xs:px-[10px]" />
            </div>

            <div className="px-[20px] max-xs:px-[10px]">
              <h3 className="h3 mb-[46px] max-xs:mb-[23px]">
                {t("Товары в корзине:")}
              </h3>

              {productsInCart.map(({ id, imgSrc, name, alt, cost }) => (
                <div
                  key={id}
                  className="flex w-full items-center gap-[40px] justify-between max-xs:px-[10px]"
                >
                  <div className="flex items-center">
                    <Image
                      src={imgSrc}
                      width={1000}
                      height={2000}
                      alt={alt}
                      className="w-[100px] h-auto"
                    />
                  </div>

                  <div className="flex justify-between flex-1 items-center max-xs:flex-col max-xs:items-start max-xs:gap-[20px]">
                    <p className="base-medium w-[20ch] max-xs:w-full">{name}</p>
                    <ProductCount lang={lang} />
                    <div className="flex flex-col gap-[5px]">
                      <span className="large-medium-90">{cost}</span>
                      <span className="base-normal-nospacing uppercase">
                        {t("сум / блок")}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-xs:px-[10px]">
              <Separator />
            </div>

            <div className="px-[20px] max-xs:px-[10px]">
              <h3 className="h3 mb-[46px] max-xs:mb-[23px]">
                {t("Данные получателя:")}
              </h3>

              <div className="flex flex-wrap w-full gap-7 max-xs:gap-[20px]">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label className="max-xs:small-medium" htmlFor="surname">
                    {t("Фамилия")}
                  </Label>
                  <Input type="text" id="surname" required />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label className="max-xs:small-medium" htmlFor="name">
                    {t("Имя")}
                  </Label>
                  <Input type="text" id="name" required />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label className="max-xs:small-medium" htmlFor="phone">
                    {t("Номер телефона")}
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    placeholder="+ 998 (  )"
                    required
                    pattern="+ [0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                  />
                </div>
              </div>
            </div>

            <Separator className="max-xs:opacity-0" />

            <div className="px-[20px] w-[850px] max-xs:w-full max-xs:px-0">
              <h3 className="h3 mb-[46px] max-xs:mb-[23px] max-xs:px-[10px]">
                {t("Адрес доставки:")}
              </h3>

              <Separator className="max-xs:h-[1px] p-0 m-0 h-0" />

              <p className="py-[17px] px-[25px] border-white rounded-[5px] border-2 w-full small-normal-nospacing leading-[130%] mb-[60px] max-xs:border-0 max-xs:px-[10px] max-xs:mb-0">
                {t("address-description")}
              </p>

              <Separator className="max-xs:h-[1px] p-0 m-0 h-0" />

              <div className="flex flex-col gap-[40px] mb-[40px] max-xs:px-[10px] max-xs:gap-[20px]">
                <p className="small-normal-nospacing leading-[130%] max-xs:w-[30ch]">
                  {t(
                    "Напишите точный адрес доставки или укажите его на карте:"
                  )}
                </p>

                <Button className="rounded-[5px] small-semibold leading-[130%] flex gap-[15px] items-center w-fit">
                  <MapPin />
                  <span>{t("Указать адрес на карте")}</span>
                </Button>
              </div>

              <div className="flex flex-col gap-[40px] w-full max-xs:px-[10px]">
                <div className="flex flex-wrap w-full justify-between max-xs:gap-[20px]">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label className="max-xs:small-medium" htmlFor="city">
                      {t("Город")}
                    </Label>
                    <Input type="text" id="city" required />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label className="max-xs:small-medium" htmlFor="street">
                      {t("Улица")}
                    </Label>
                    <Input type="text" id="street" required />
                  </div>
                </div>

                <div className="flex flex-wrap w-full justify-between gap-[40px] max-xs:gap-[30px]">
                  <div className="grid w-full items-center gap-1.5 flex-1 max-xs:w-[45%] max-xs:flex-none">
                    <Label className="max-xs:small-medium" htmlFor="house">
                      {t("Дом")}
                    </Label>
                    <Input type="text" id="house" required />
                  </div>
                  <div className="grid w-full items-center gap-1.5 flex-1 max-xs:w-[45%] max-xs:flex-none">
                    <Label className="max-xs:small-medium" htmlFor="entrance">
                      {t("Подъезд")}
                    </Label>
                    <Input type="text" id="entrance" required />
                  </div>
                  <div className="grid w-full items-center gap-1.5 flex-1 max-xs:w-[45%] max-xs:flex-none">
                    <Label className="max-xs:small-medium" htmlFor="floor">
                      {t("Этаж")}
                    </Label>
                    <Input type="text" id="floor" required />
                  </div>
                  <div className="grid w-full items-center gap-1.5 flex-1 max-xs:w-[45%] max-xs:flex-none">
                    <Label className="max-xs:small-medium" htmlFor="flat">
                      {t("Квартира")}
                    </Label>
                    <Input type="text" id="flat" required />
                  </div>
                </div>

                <div className="w-full">
                  <div className="grid w-full items-center gap-1.5 flex-1">
                    <Label className="max-xs:small-medium" htmlFor="comment">
                      {t("Комментарий")}
                    </Label>
                    <Textarea id="comment" className="resize-none w-full" />
                  </div>
                </div>
              </div>
            </div>
            <Separator className="max-xs:opacity-0" />
          </div>

          <div className="w-[25%] max-xs:w-full max-xs:px-[10px]">
            <CheckoutCard lang={lang} />
          </div>
        </div>
      </section>
    </main>
  );
}
