"use client";

import { MapPin } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import CheckoutCard from "./checkout-card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import CartItemsList from "./cart-items-list";

import { Language } from "@/types/language";
import { useTranslation } from "@/lib/i18n/client";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";

import { FormData } from "@/types/user-order";

import FormField from "./form-field";

export default function Form({ lang }: { lang: keyof Language }) {
  const { t } = useTranslation(lang);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>();

  return (
    <div className="flex gap-[80px] justify-between max-xs:flex-col max-xs:gap-0">
      <div className="w-[75%] max-xs:w-full">
        <div className="max-xs:px-[10px]">
          <Separator className="mt-0 max-xs:mt-0 max-xs:px-[10px]" />
        </div>

        <CartItemsList lang={lang} />

        <div className="max-xs:px-[10px]">
          <Separator />
        </div>

        <div className="px-[20px] max-xs:px-[10px]">
          <h3 className="h3 mb-[46px] max-xs:mb-[23px]">
            {t("Данные получателя:")}
          </h3>

          <div className="flex flex-wrap w-full gap-7 max-xs:gap-[20px]">
            <FormField
              required
              name="surname"
              label={t("Фамилия")}
              type="text"
              error={errors.surname}
              placeholder=""
              register={register}
            />
            <FormField
              required
              name="name"
              label={t("Имя")}
              type="text"
              error={errors.name}
              placeholder=""
              register={register}
            />
            <FormField
              required
              name="phone"
              label={t("Номер телефона")}
              type="tel"
              error={errors.phone}
              placeholder=""
              register={register}
              pattern="+ [0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
            />
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
              {t("Напишите точный адрес доставки или укажите его на карте:")}
            </p>

            <Button className="rounded-[5px] small-semibold leading-[130%] flex gap-[15px] items-center w-fit">
              <MapPin />
              <span>{t("Указать адрес на карте")}</span>
            </Button>
          </div>

          <div className="flex flex-col gap-[40px] w-full max-xs:px-[10px]">
            <div className="flex flex-wrap w-full justify-between max-xs:gap-[20px]">
              <FormField
                required
                name="city"
                label={t("Город")}
                type="text"
                error={errors.city}
                placeholder=""
                register={register}
              />
              <FormField
                required
                name="street"
                label={t("Улица")}
                type="text"
                error={errors.street}
                placeholder=""
                register={register}
              />
            </div>

            <div className="flex flex-wrap w-full justify-between gap-[40px] max-xs:gap-[30px]">
              <FormField
                required
                name="house"
                label={t("Дом")}
                type="text"
                error={errors.house}
                placeholder=""
                register={register}
              />
              <FormField
                required
                name="entrance"
                label={t("Подъезд")}
                type="text"
                error={errors.entrance}
                placeholder=""
                register={register}
              />
              <FormField
                required
                name="floor"
                label={t("Этаж")}
                type="text"
                error={errors.floor}
                placeholder=""
                register={register}
              />
              <FormField
                required
                name="flat"
                label={t("Квартира")}
                type="text"
                error={errors.flat}
                placeholder=""
                register={register}
              />
            </div>

            <div className="w-full">
              <FormField
                textarea
                name="comment"
                label={t("Комментарий")}
                error={errors.comment}
                placeholder=""
                register={register}
              />
            </div>
          </div>
        </div>
        <Separator className="max-xs:opacity-0" />
      </div>

      <div className="w-[25%] max-xs:w-full max-xs:px-[10px]">
        <CheckoutCard lang={lang} />
      </div>
    </div>
  );
}
