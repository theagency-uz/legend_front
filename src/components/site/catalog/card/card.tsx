import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useTranslation } from "@/lib/i18n/client";
import { formatCost } from "@/lib/utils";

import { useCart } from "@/context/cart.context";

import { Language } from "@/types/language";
import { IProductVariation } from "@/types/product";
import { IItemInCart } from "@/types/itemInCart";

import { useToast } from "@/components/ui/use-toast";

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

  const { addToCartQuantity, cartItems, deleteFromCart } = useCart();

  const { toast } = useToast();

  const cartItemIndex = cartItems.findIndex(
    (cartItem: IItemInCart) => cartItem.id === product.id
  );

  return (
    <Link
      href={`${path}/${product.slug}`}
      className="cursor-pointer bg-catalog-card w-[21.67vw] h-[42vw] rounded-[10px] max-sm:h-auto max-md:h-[80vw] max-lg:w-full max-lg:h-[80vw] max-xl:w-[48%] max-xl:h-[50vw]"
    >
      <div className="rounded-[10px] text-white w-full h-full backdrop-blur-[5px]">
        <div className="flex flex-col h-full gap-[10px]">
          <div className="flex-1 flex justify-center items-center pt-[26px]">
            <Image
              src={url}
              alt={product.name[lang]}
              width={1600}
              height={1400}
              className="self-center w-full h-auto"
            />
          </div>

          <div className="flex h-[270px] max-sm:h-auto justify-between flex-col gap-[35px] p-[26px]">
            <div className="flex flex-col gap-[5px] justify-between">
              <span className="normal-medium font-light tracking-normal">
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
                <span className="base-normal-nospacing font-normal uppercase">
                  {i18n.t("сум / блок")}
                </span>
              </div>

              <div
                onClick={(e) => {
                  e.preventDefault();
                  if (cartItemIndex === -1) {
                    addToCartQuantity({ ...product, quantity: 1 });
                    toast({
                      title: i18n.t("Товар добавлен в корзину"),
                      description: product.name[lang],
                      link: `${path}/${product.slug}`,
                    });
                  } else {
                    deleteFromCart(product.id);
                    toast({
                      title: i18n.t("Товар удален из корзины"),
                      description: product.name[lang],
                      link: `${path}/${product.slug}`,
                    });
                  }
                }}
              >
                <div className="flex flex-col items-center justify-between cursor-pointer gap-[5px]">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <g transform="scale(1.5625 1.78571429)">
                      <path
                        d="M14.7692 0H1.23077C0.904349 0 0.591298 0.13409 0.360484 0.372773C0.12967 0.611456 0 0.935179 0 1.27273V12.7273C0 13.0648 0.12967 13.3885 0.360484 13.6272C0.591298 13.8659 0.904349 14 1.23077 14H14.7692C15.0957 14 15.4087 13.8659 15.6395 13.6272C15.8703 13.3885 16 13.0648 16 12.7273V1.27273C16 0.935179 15.8703 0.611456 15.6395 0.372773C15.4087 0.13409 15.0957 0 14.7692 0ZM8 7.63636C7.02105 7.63531 6.08249 7.2327 5.39027 6.51688C4.69805 5.80106 4.30871 4.8305 4.30769 3.81818C4.30769 3.64941 4.37253 3.48755 4.48793 3.3682C4.60334 3.24886 4.75987 3.18182 4.92308 3.18182C5.08629 3.18182 5.24281 3.24886 5.35822 3.3682C5.47363 3.48755 5.53846 3.64941 5.53846 3.81818C5.53846 4.49328 5.7978 5.14072 6.25943 5.61809C6.72106 6.09546 7.34716 6.36364 8 6.36364C8.65284 6.36364 9.27894 6.09546 9.74057 5.61809C10.2022 5.14072 10.4615 4.49328 10.4615 3.81818C10.4615 3.64941 10.5264 3.48755 10.6418 3.3682C10.7572 3.24886 10.9137 3.18182 11.0769 3.18182C11.2401 3.18182 11.3967 3.24886 11.5121 3.3682C11.6275 3.48755 11.6923 3.64941 11.6923 3.81818C11.6913 4.8305 11.302 5.80106 10.6097 6.51688C9.91751 7.2327 8.97895 7.63531 8 7.63636Z"
                        fill={cartItemIndex !== -1 ? "#66C3D0" : "#fff"}
                      />
                    </g>
                  </svg>

                  <span
                    className={`base-normal-nospacing font-normal uppercase ${
                      cartItemIndex !== -1 ? "text-[#66C3D0]" : "#fff"
                    }`}
                  >
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
