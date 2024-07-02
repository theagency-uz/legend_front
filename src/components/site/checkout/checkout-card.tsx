import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from "@/lib/i18n";

export default async function CheckoutCard({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang);

  return (
    <div className="w-full small-normal-nospacing rounded-[10px] bg-white bg-opacity-20">
      <div className="py-[28px] px-[20px]">
        <h3 className="base-medium mb-[30px]">{t("Ваш заказ:")}</h3>
        <p className="flex justify-between items-center mb-[20px]">
          <span>{t("Товары")} (5):</span> <span>100 000 сум</span>
        </p>
        <p className="flex justify-between items-center">
          <span>{t("Доставка")}</span> <span>{t("бесплатно")}</span>
        </p>
      </div>

      <div className="max-xs:px-[20px]">
        <Separator className="m-0" />
      </div>

      <div className="py-[28px] px-[20px] flex justify-between items-end max-xs:py-0">
        <h3 className="base-medium">{t("Итого")}</h3>
        <span className="small-medium">100 000 сум</span>
      </div>

      <div className="flex flex-col gap-[20px] py-[28px] px-[20px]">
        <p>{t("Доступна только онлайн оплата Click или Payme")}</p>
        <Button className="flex gap-[20px]">
          <span className="small-semibold">{t("Оплатить Payme")}</span>{" "}
          <img src="/assets/payme.svg" alt="payme icon" width={33} />
        </Button>
        <Button className="flex gap-[20px]">
          <span className="small-semibold">{t("Оплатить Click")}</span>
          <img src="/assets/click.svg" alt="click icon" width={33} />
        </Button>
      </div>
    </div>
  );
}
