"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { MapPin } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import CheckoutCard from "./checkout-card";
import CartItemsList from "./cart-items-list";
import FormField from "./form-field";
import { Button } from "@/components/ui/button";

import { FormData, UserSchema } from "@/types/user-order";
import { Language } from "@/types/language";

import { useTranslation } from "@/lib/i18n/client";

export default function Form({ lang }: { lang: keyof Language }) {
  const { t } = useTranslation(lang);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(UserSchema) });

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-20 flex-wrap max-md:flex-col max-md:gap-0"
    >
      <div className="w-full lg:w-[500px] lg:flex-1 2xl:w-[60%] 2xl:flex-none">
        <Separator className="mt-0 max-md:mt-0 max-md:px-[10px]" />
        <CartItemsList lang={lang} />
        <Separator />

        <div className="flex flex-col gap-[40px] px-[20px] max-md:px-[10px]">
          <h3 className="h3 mb-[46px] max-md:mb-[23px]">
            {t("Данные получателя:")}
          </h3>

          <div className="flex flex-wrap w-full gap-7 max-md:gap-[20px]">
            <FormField
              name="surname"
              label={t("Фамилия")}
              type="text"
              error={errors.surname}
              placeholder=""
              register={register}
              lang={lang}
              className="w-full md:w-[43%]"
            />
            <FormField
              name="name"
              label={t("Имя")}
              type="text"
              error={errors.name}
              placeholder=""
              register={register}
              lang={lang}
              className="w-full md:w-[43%]"
            />
            <FormField
              name="phone"
              label={t("Номер телефона")}
              type="tel"
              error={errors.phone}
              placeholder=""
              register={register}
              lang={lang}
              pattern="+ [0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
              className="w-full md:w-[43%]"
            />
          </div>
        </div>

        <Separator className="max-md:opacity-0" />

        <div className="px-[20px] w-full max-md:w-full max-md:px-0">
          <h3 className="h3 mb-[46px] max-md:mb-[23px] max-md:px-[10px]">
            {t("Адрес доставки:")}
          </h3>

          <Separator className="max-md:h-[1px] p-0 m-0 h-0" />

          <p className="py-[17px] px-[25px] border-white rounded-[5px] border-2 w-full small-normal-nospacing leading-[130%] mb-[60px] max-md:border-0 max-md:px-[10px] max-md:mb-0">
            {t("address-description")}
          </p>

          <Separator className="max-md:h-[1px] p-0 m-0 h-0" />

          <div className="flex flex-col gap-[40px] mb-[40px] max-md:px-[10px] max-md:gap-[20px]">
            <p className="small-normal-nospacing leading-[130%] max-md:w-[30ch]">
              {t("Напишите точный адрес доставки или укажите его на карте:")}
            </p>

            <Button className="rounded-[5px] leading-[130%] flex gap-[15px] items-center w-fit">
              <MapPin />
              <span className="xsmall-medium">{t("Указать адрес на карте")}</span>
            </Button>
          </div>

          <div className="flex flex-col gap-[40px] w-full max-md:px-[10px]">
            <div className="flex flex-1 flex-wrap gap-[20px] max-md:gap-[20px] w-full">
              <FormField
                name="city"
                label={t("Город")}
                type="text"
                error={errors.city}
                placeholder=""
                register={register}
                lang={lang}
                className="w-full lg:flex-1"
              />
              <FormField
                name="street"
                label={t("Улица")}
                type="text"
                error={errors.street}
                placeholder=""
                register={register}
                lang={lang}
                className="w-full lg:flex-1"
              />
            </div>

            <div className="flex flex-col xl:flex-row w-full justify-between gap-[20px] max-md:gap-[20px]">
              <div className="flex gap-[20px]">
                <FormField
                  name="house"
                  label={t("Дом")}
                  type="text"
                  error={errors.house}
                  placeholder=""
                  register={register}
                  lang={lang}
                  className="flex-1"
                />
                <FormField
                  name="entrance"
                  label={t("Подъезд")}
                  type="text"
                  error={errors.entrance}
                  placeholder=""
                  register={register}
                  lang={lang}
                  className="flex-1"
                />
              </div>

              <div className="flex gap-[20px]">
                <FormField
                  name="floor"
                  label={t("Этаж")}
                  type="text"
                  error={errors.floor}
                  placeholder=""
                  register={register}
                  lang={lang}
                  className="flex-1"
                />
                <FormField
                  name="flat"
                  label={t("Квартира")}
                  type="text"
                  error={errors.flat}
                  placeholder=""
                  register={register}
                  lang={lang}
                  className="flex-1"
                />
              </div>
            </div>

            <div className="w-full">
              <FormField
                textarea
                name="comment"
                label={t("Комментарий")}
                error={errors.comment}
                placeholder=""
                register={register}
                lang={lang}
              />
            </div>
          </div>
        </div>
        <Separator className="max-md:opacity-0 max-lg:mb-0" />
      </div>

      <div className="max-md:w-full mx-auto max-md:px-[10px] lg:w-fit relative 2xl:w-[30%]">
        <CheckoutCard lang={lang} />
      </div>
    </form>
  );
}
