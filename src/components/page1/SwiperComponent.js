import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Button from "./Button";

const SwiperComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-slate-600">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={5}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-screen "
      >
        <SwiperSlide className="bg-blue-500 flex items-center justify-center text-white h-full">
          <img className="w-[100%] h-[100%] bg-cover bg-center" src="https://img.freepik.com/free-psd/web-banner-template-japanese-restaurant_23-2148203251.jpg?t=st=1720525296~exp=1720528896~hmac=0e5d063756ed967b234acb5e66b8844391a245669e3a3139b5de10258cd0f296&w=1060" alt="img" />
        </SwiperSlide>
        <SwiperSlide className="bg-red-500 flex items-center justify-center text-white h-full">
          <img  className="w-[100%] h-[100%] bg-cover bg-center" src="https://img.freepik.com/premium-photo/food-prehistoric-era-what-our-ancestors-ate_164008-7948.jpg?w=1060" alt="" />
        </SwiperSlide>
        <SwiperSlide className="bg-green-500 flex items-center justify-center text-white h-full">
        <img className="w-[100%] h-[100%] bg-cover bg-center" src="https://img.freepik.com/premium-photo/close-up-chef-plating-gourmet-meal-professional-kitchen_14117-701440.jpg?w=1060" alt="img" />
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-500 flex items-center justify-center text-white h-full">
        <img className="w-[100%] h-[100%] bg-cover bg-center" src="https://img.freepik.com/free-photo/close-up-male-s-hand-presenting-his-tasty-food-plate_23-2147863799.jpg?t=st=1720525240~exp=1720528840~hmac=17b9306fb2a2fdfd636a0b97049d23a7784338311f08cc8626abb1c14b5ab47b&w=996" alt="img" />
        </SwiperSlide>
        <SwiperSlide className="bg-purple-500 flex items-center justify-center text-white h-full">
        <img className="w-[100%] h-[100%] bg-cover bg-center" src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141351.jpg?t=st=1720525179~exp=1720528779~hmac=a83039c0102a62dff9fad7919d0cd9caabc1b3f52c3c9b240d45da3bfccff072&w=996" alt="img" />
        </SwiperSlide>
      </Swiper>
      <div className="absolute z-50 flex items-center justify-center">
        <Button />
      </div>
    </div>
  );
};

export default SwiperComponent;
