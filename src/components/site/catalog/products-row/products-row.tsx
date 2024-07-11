"use client";

import CatalogCard from "../card/card";
import useFetch from "@/hooks/useFetch";

export default function ProductsRow({ lang }: { lang: string }) {
  const {
    data: products,
    error,
    loading,
  } = useFetch({ url: "/products/public" });

  if (loading) {
    return <p>Loading ...</p>;
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
            />
          )
        )}
      </>
    );
  }
}
