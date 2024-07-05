"use client";

import { useState } from "react";

import ProductImage from "./product-image";
import CarouselThumbs from "./carousel-thumbs";

const gallery = [
  { id: 1, imgUrl: "/assets/p2-front.webp" },
  { id: 2, imgUrl: "/assets/p2-back.webp" },
];

export default function ProductGallery({ gallery }: { gallery: any[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState();

  return (
    <div className="w-full flex">
      <CarouselThumbs gallery={gallery} setThumbsSwiper={setThumbsSwiper} />
      <ProductImage gallery={gallery} thumbsSwiper={thumbsSwiper} />
    </div>
  );
}
