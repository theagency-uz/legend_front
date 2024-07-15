"use client";

import { Language } from "@/types/language";

import CatalogCard from "../card/card";

import useFetchProducts from "@/hooks/useFetchProducts";

import CatalogCardPlaceholder from "../catalog-card-skelet";
import { IProductVariation } from "@/types/product";

export default function ProductsRow({ lang }: { lang: keyof Language }) {
  const { data, loading } = useFetchProducts();

  const products: IProductVariation[] = data;

  if (loading) {
    return (
      <>
        {Array.from({ length: 6 }).map((_, i) => (
          <CatalogCardPlaceholder key={i} />
        ))}
      </>
    );
  }

  if (products) {
    return (
      <>
        {products?.map((product: IProductVariation) => (
          <CatalogCard key={product.id} product={product} lang={lang} />
        ))}
      </>
    );
  }
}
