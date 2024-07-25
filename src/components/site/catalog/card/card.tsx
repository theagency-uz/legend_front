import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useTranslation } from "@/lib/i18n/client";
import { formatCost } from "@/lib/utils";

import { useCart } from "@/context/cart.context";

import { Language } from "@/types/language";
import { IProductVariation } from "@/types/product";

export default function CatalogCard({
  product,
  lang,
}: {
  lang: keyof Language;
  product: IProductVariation;
}) {
  const { i18n } = useTranslation(lang);
  const path = usePathname();

  const url = process.env.NEXT_PUBLIC_IMAGE_UPLOAD_URL + product.previewImage;

  const { addToCartQuantity } = useCart();

  return (
    <Link
      href={`${path}/${product.slug}`}
      className="cursor-pointer bg-catalog-card w-[21.67vw] h-[42vw] rounded-[10px] max-sm:h-auto max-md:h-[80vw] max-lg:w-full max-lg:h-[80vw] max-xl:w-[48%] max-xl:h-[50vw]"
    >
      <div className="rounded-[10px] text-white w-full h-full backdrop-blur-[5px]">
        <div className="flex flex-col h-full gap-[10px]">
          <div className="flex-[2] flex justify-center items-center pt-[26px]">
            <Image
              src={url}
              alt={product.name[lang]}
              width={1600}
              height={1400}
              className="self-center w-full h-auto"
            />
          </div>

          <div className="flex h-[300px] justify-between flex-col gap-[35px] p-[26px]">
            <div className="flex flex-col gap-[5px] justify-between">
              <span className="normal-medium tracking-normal">
                {product.product_variation.value} {i18n.t("Л")}
              </span>
              <h3 className="large-medium leading-tight">
                {product.name[lang]}
              </h3>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col justify-between">
                <span className="large-medium-90">
                  {formatCost(product.price)}
                </span>
                <span className="base-normal-nospacing uppercase">
                  {i18n.t("сум / блок")}
                </span>
              </div>

              <div
                onClick={(e) => {
                  e.preventDefault();
                  addToCartQuantity({ ...product, quantity: 1 });
                }}
              >
                <div className="flex flex-col items-center justify-between cursor-pointer gap-[5px]">
                  <img
                    alt="cart icon"
                    src="/assets/cart.svg"
                    className={`w-[25px] h-[25px]`}
                  />
                  <span className="base-normal-nospacing uppercase">
                    {i18n.t("в корзину")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
