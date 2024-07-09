import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

const ProductSwiper = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={20}
      pagination={{ clickable: true }}
      navigation
      modules={[Navigation]}
      className="mySwiper bottom-8 w-[90vw] h-[25vw]"
    >
      <SwiperSlide className="flex items-center justify-between flex-col text-center text-lg ">
        <div className="w-[250px] h-[250px] ml-10 rounded-full border-4 border-[#ea9534] shadow-2xl cursor-pointer">
          <img
            className="[w-100%] h-[100%] rounded-full"
            src="\images\Screenshot 2024-07-09 180551.png"
            alt=""
          />
        </div>
        <div className="w-[300px] h-[100px] ml-4 mt-2 ">
          <p className="text-2xl text-[#ea9534] font-thin mt-4">
            CINNAMON HONEY
          </p>
          <p className="text-sm text-white mt-3 ">
            <strike>$12.00</strike> $9.00
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-between flex-col text-center text-lg ">
        <div className="w-[250px] h-[250px] ml-10 rounded-full border-4 border-[#ea9534] shadow-2xl cursor-pointer">
          <img
            className="[w-100%] h-[100%] rounded-full"
            src="\images\Screenshot 2024-07-09 181520.png"
            alt=""
          />
        </div>
        <div className="w-[300px] h-[100px] ml-4 mt-2 ">
          <p className="text-2xl text-[#ea9534] mt-4">COCONUT OIL</p>
          <p className="text-sm text-white mt-3 ">
            <strike>$20.00</strike> $15.00
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-between flex-col text-center text-lg ">
        <div className="w-[250px] h-[250px] ml-10 rounded-full border-4 border-[#ea9534] shadow-2xl cursor-pointer">
          <img
            className="[w-100%] h-[100%] rounded-full"
            src="\images\Screenshot 2024-07-09 215610.png"
            alt=""
          />
        </div>
        <div className="w-[300px] h-[100px] ml-4 mt-2 ">
          <p className="text-2xl text-[#ea9534] mt-4">MANGO HONEY</p>
          <p className="text-sm text-white mt-3 ">
            <strike>$12.00</strike> $9.00
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-between flex-col  text-center text-lg ">
        <div className="w-[15.4rem] h-[15.4rem] ml-10 rounded-full border-4 border-[#ea9534] shadow-2xl cursor-pointer">
          <img
            className="[w-100%] h-[100%] rounded-full"
            src="\images\Screenshot 2024-07-09 220239.png"
            alt="img"
          />
        </div>
        <div className="w-[300px] h-[100px] ml-4 mt-2 ">
          <p className="text-2xl text-[#ea9534] mt-4">HONEY HABANERO</p>
          <p className="text-sm text-white mt-3 ">
            <strike>$12.00</strike> $9.00
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-between flex-col text-center text-lg ">
        <div className="w-[250px] h-[250px] ml-10 rounded-full border-4 border-[#ea9534] shadow-2xl cursor-pointer">
          <img
            className="[w-100%] h-[100%] rounded-full"
            src="\images\Screenshot 2024-07-09 180551.png"
            alt=""
          />
        </div>
        <div className="w-[300px] h-[100px] ml-4 mt-2 ">
          <p className="text-2xl text-[#ea9534] font-thin mt-4">
            CINNAMON HONEY
          </p>
          <p className="text-sm text-white mt-3 ">
            <strike>$12.00</strike> $9.00
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-between flex-col text-center text-lg ">
        <div className="w-[250px] h-[250px] ml-10 rounded-full border-4 border-[#ea9534] shadow-2xl cursor-pointer">
          <img
            className="[w-100%] h-[100%] rounded-full"
            src="\images\Screenshot 2024-07-09 181520.png"
            alt=""
          />
        </div>
        <div className="w-[300px] h-[100px] ml-4 mt-2 ">
          <p className="text-2xl text-[#ea9534] mt-4">COCONUT OIL</p>
          <p className="text-sm text-white mt-3 ">
            <strike>$20.00</strike> $15.00
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-between flex-col text-center text-lg ">
        <div className="w-[250px] h-[250px] ml-10 rounded-full border-4 border-[#ea9534] shadow-2xl cursor-pointer">
          <img
            className="[w-100%] h-[100%] rounded-full"
            src="\images\Screenshot 2024-07-09 215610.png"
            alt=""
          />
        </div>
        <div className="w-[300px] h-[100px] ml-4 mt-2 ">
          <p className="text-2xl text-[#ea9534] mt-4">MANGO HONEY</p>
          <p className="text-sm text-white mt-3 ">
            <strike>$12.00</strike> $9.00
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-between flex-col  text-center text-lg ">
        <div className="w-[15.4rem] h-[15.4rem] ml-10 rounded-full border-4 border-[#ea9534] shadow-2xl cursor-pointer">
          <img
            className="[w-100%] h-[100%] rounded-full"
            src="\images\Screenshot 2024-07-09 220239.png"
            alt="img"
          />
        </div>
        <div className="w-[300px] h-[100px] ml-4 mt-2 ">
          <p className="text-2xl text-[#ea9534] mt-4">HONEY HABANERO</p>
          <p className="text-sm text-white mt-3 ">
            <strike>$12.00</strike> $9.00
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-between flex-col text-center text-lg ">
        <div className="w-[250px] h-[250px] ml-10 rounded-full border-4 border-[#ea9534] shadow-2xl cursor-pointer">
          <img
            className="[w-100%] h-[100%] rounded-full"
            src="\images\Screenshot 2024-07-09 215610.png"
            alt=""
          />
        </div>
        <div className="w-[300px] h-[100px] ml-4 mt-2 ">
          <p className="text-2xl text-[#ea9534] mt-4">MANGO HONEY</p>
          <p className="text-sm text-white mt-3 ">
            <strike>$12.00</strike> $9.00
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductSwiper;
