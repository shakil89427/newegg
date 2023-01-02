import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const BannerSlider = () => {
  const [swiper, setSwiper] = useState({});
  const images = [
    "https://thumbs.dreamstime.com/z/electronics-promotional-sales-banner-shopping-cart-electronics-devices-promotional-sale-banner-full-shopping-cart-168812806.jpg",
    "https://sharvielectronics.com/wp-content/uploads/slider/cache/fcc16b7957419685dd33dcb84dcd65ef/Power-Supply-Banner-scaled.jpg",
    "https://st.depositphotos.com/3226429/4232/i/950/depositphotos_42324875-stock-photo-electronics-banner.jpg",
  ];
  return (
    <div className="relative">
      <Swiper
        speed={600}
        onInit={(e) => setSwiper(e)}
        autoplay={{ delay: 6000 }}
        pagination={true}
        modules={[Pagination, Autoplay, Navigation]}
      >
        {images.map((item) => (
          <SwiperSlide key={item}>
            <div className="pb-10 w-full max-h-[500px] aspect-[6/4]">
              <img
                src={item}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        onClick={() => swiper?.slidePrev()}
        className="absolute bg-[#cac9c985] top-1/2 left-0 -translate-y-full z-10 text-5xl cursor-pointer select-none text-white"
      >
        <MdNavigateBefore />
      </div>
      <div
        onClick={() => swiper?.slideNext()}
        className="absolute bg-[#cac9c985] top-1/2 right-0 -translate-y-full z-10 text-5xl cursor-pointer select-none text-white"
      >
        <MdNavigateNext />
      </div>
    </div>
  );
};

export default BannerSlider;
