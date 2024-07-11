"use client";

import { Language } from "@/types/language";

import CatalogCard from "../card/card";

import useFetch from "@/hooks/useFetch";

import CatalogCardPlaceholder from "../catalog-card-skelet";

export default function ProductsRow({ lang }: { lang: keyof Language }) {
  const {
    data: products,
    error,
    loading,
  } = useFetch({ url: "/products/public" });

  console.log(loading);

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
        {products?.map(
          ({ previewImage, name, price, product_variation, slug, id }: any) => (
            <CatalogCard
              key={id}
              imgSrc={previewImage}
              alt={name}
              cost={price}
              title={name}
              volume={product_variation.value}
              lang={lang}
              slug={slug}
              id={id}
            />
          )
        )}
      </>
    );
  }
}
