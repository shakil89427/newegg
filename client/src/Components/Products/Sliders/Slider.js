import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";

const ProductsSlider = ({
  type,
  data,
  loading,
  activeIndex,
  setActiveIndex,
  seeAllPath,
}) => {
  const [swiper, setSwiper] = useState({});
  const navigate = useNavigate();

  if (loading)
    return (
      <div className="w-fit mx-auto">
        <PulseLoader color="#FE5900" size={30} />
      </div>
    );
  if (!data?.length) return null;

  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-lg md:text-xl lg:text-2xl font-bold">{type}</p>
        <p
          className="text-sm md:text-md  font-bold text-gray-500 cursor-pointer select-none"
          onClick={() => navigate(seeAllPath)}
        >
          See all
        </p>
      </div>
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          onInit={(e) => setSwiper(e)}
          slidesPerView={1.3}
          initialSlide={activeIndex}
          onSlideChange={(e) => setActiveIndex(e.realIndex)}
          spaceBetween={20}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {data.slice(0, 10).map((item) => (
            <SwiperSlide key={item?._id}>
              <div
                onClick={() => navigate(`/details/${item?._id}`)}
                className="shadow-sm my-5 rounded-lg overflow-hidden cursor-pointer"
              >
                <div className="w-full aspect-[7/5]">
                  <img
                    src={`https://source.unsplash.com/random/300x200?sig=${item?._id}`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <p className="font-bold text-md md:text-lg lg:text-xl break-words py-3">
                    {item.name}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm md:text-md font-bold">
                      ₹{item.inPrice}
                    </p>
                    <del className="text-sm text-[#848484] hidden lg:inline">
                      ₹{item.inStrikeThroughPrice}
                    </del>
                    <p className="text-xs md:text-sm text-[#0A8200]">
                      (30% off)
                    </p>
                  </div>
                  <del className="text-xs md:text-sm text-[#848484] lg:hidden">
                    ₹{item.inStrikeThroughPrice}
                  </del>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          onClick={() => swiper?.slidePrev()}
          className="hidden md:block absolute bg-[#cac9c985] top-[30%] left-0 z-10 text-5xl rounded-tr-3xl rounded-br-3xl cursor-pointer select-none text-white"
        >
          <MdNavigateBefore />
        </div>
        <div
          onClick={() => swiper?.slideNext()}
          className="hidden md:block absolute bg-[#cac9c985] top-[30%] right-0 z-10  text-5xl rounded-tl-3xl rounded-bl-3xl cursor-pointer select-none text-white"
        >
          <MdNavigateNext />
        </div>
      </div>
    </>
  );
};

export default ProductsSlider;
