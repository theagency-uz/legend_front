"use client";

import CatalogCard from "../card/card";

export default function ProductsRow({
  products,
  lang,
}: {
  products: any;
  lang: string;
}) {
  return (
    <>
      {products.map(({ previewImage, name, price, volume, slug, id }) => (
        <CatalogCard
          key={id}
          imgSrc={previewImage}
          alt={name}
          cost={price}
          title={name}
          volume={volume}
          lang={lang}
          slug={slug}
        />
      ))}
    </>
  );
}
