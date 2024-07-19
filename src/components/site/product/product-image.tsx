import Image from "next/image";

import {
  Swiper,
  SwiperSlide,
  Navigation,
  Thumbs,
  FreeMode,
  Pagination,
} from "@/components/site/common/slider/slider.component";

export default function ProductImage({ gallery, thumbsSwiper }: any) {
  return (
    <Swiper
      modules={[FreeMode, Navigation, Thumbs, Pagination]}
      thumbs={{
        swiper: thumbsSwiper,
      }}
      className="mySwiper2"
      grabCursor={true}
      pagination
    >
      {gallery?.map((item: any) => (
        <SwiperSlide key={`product-gallery-${item.id}`} className="">
          <Image
            src={process.env.NEXT_PUBLIC_IMAGE_UPLOAD_URL + item.imgUrl}
            alt={`Product gallery ${item.id}`}
            width={1600}
            height={1400}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
