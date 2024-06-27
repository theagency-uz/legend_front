import Image from "next/image";

import {
  Swiper,
  SwiperSlide,
} from "@/components/site/common/slider/slider.component";

export default function CarouselThumbs({ gallery, setThumbsSwiper }) {
  return (
    <Swiper
      freeMode={true}
      onSwiper={setThumbsSwiper}
      slidesPerView={2}
      watchSlidesProgress={true}
      observer={true}
      observeParents={true}
      className="mySwiper"
    >
      {gallery?.map((item) => (
        <SwiperSlide key={`product-thumb-gallery-${item.id}`} className="">
          <Image
            src={item.imgUrl}
            alt={`Product thumb gallery ${item.id}`}
            width={300}
            height={300}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
