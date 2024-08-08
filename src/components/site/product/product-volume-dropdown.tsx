import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";

import useFetchProductsByVariations from "@/hooks/useFetchProductsByVariation";
import { useTranslation } from "@/lib/i18n/client";

import { Language } from "@/types/language";
import Link from "next/link";

export default function ProductVolumeDropdown({
  productId,
  lang,
}: {
  productId: number;
  lang: keyof Language;
}) {
  const { t } = useTranslation(lang);

  const { data, error, loading } = useFetchProductsByVariations(productId);

  if (loading) {
    return <p>Loading ...</p>;
  }

  const productVars: any[] = data;

  if (productVars) {
    return (
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button className="w-fit py-[1px] px-[20px] text-primary-300 flex justify-between items-center gap-[15px]">
            <span className="small-semibold tracking-tighter">
              {
                productVars?.find((pv) => +pv.id === +productId)
                  ?.product_variation?.value
              }{" "}
              {t("л")}
            </span>
            <ChevronDown width={20} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white border-white p-2 text-primary-300">
          <DropdownMenuRadioGroup>
            {productVars
              .filter((pv) => +pv.id !== +productId)
              .map((pv) => {
                return (
                  <Link href={`/${lang}/catalog/${pv.slug}`}>
                    <DropdownMenuRadioItem
                      key={pv.id}
                      className="hover:bg-slate-100 cursor-pointer small-semibold"
                      value="ru"
                    >
                      {pv?.product_variation?.value} {t("л")}
                    </DropdownMenuRadioItem>
                  </Link>
                );
              })}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
}
