import Image from "next/image";

import {
  Swiper,
  SwiperSlide,
  Navigation,
  Thumbs,
  FreeMode,
} from "@/components/site/common/slider/slider.component";

export default function ProductImage({ gallery, thumbsSwiper }) {
  return (
    <Swiper
      modules={[FreeMode, Navigation, Thumbs]}
      thumbs={{ swiper: thumbsSwiper }}
      className="mySwiper2"
      grabCursor={true}
    >
      {gallery?.map((item) => (
        <SwiperSlide key={`product-gallery-${item.id}`} className="">
          <Image
            src={item.imgUrl}
            alt={`Product gallery ${item.id}`}
            width={1200}
            height={1200}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
