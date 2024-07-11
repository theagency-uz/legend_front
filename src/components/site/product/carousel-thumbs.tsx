import Image from "next/image";

import {
  Swiper,
  SwiperSlide,
} from "@/components/site/common/slider/slider.component";

import useWindowSize from "@/hooks/useWindowSize";
import { MOBILE_SIZE } from "@/constants/site";

export default function CarouselThumbs({ gallery, setThumbsSwiper }: any) {
  const windowSize = useWindowSize();

  return windowSize.width > MOBILE_SIZE ? (
    <Swiper
      freeMode={true}
      onSwiper={setThumbsSwiper}
      slidesPerView={2}
      watchSlidesProgress={true}
      observer={true}
      observeParents={true}
      className="mySwiper"
    >
      {gallery?.map((item: any) => (
        <SwiperSlide key={`product-thumb-gallery-${item.id}`} className="">
          <Image
            src={process.env.NEXT_PUBLIC_IMAGE_UPLOAD_URL + item.imgUrl}
            alt={`Product thumb gallery ${item.id}`}
            width={300}
            height={300}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : null;
}
