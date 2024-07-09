import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const SwiperComp = () => {
  return (
    <div className="relative w-full">
      <div className="relative w-screen h-96">
        <div className=" flex flex-col gap-10 bg-center bg-cover absolute inset-0 z-10 flex items-center justify-center">
          <div className="flex flex-col items-center">
            {" "}
            <h1 className="text-black text-4xl font-bold">ONLINE ONLY</h1>
            <hr className="w-16 h-1 rounded bg-black mt-4" />
          </div>
          <div>
            <p className="text-2xl">GET 20% OFF YOUR ORDER OF $50 OR MORE</p>
            <p className="text-2xl text-center">
              USE CODE <strong>"Chef20"</strong>
            </p>
          </div>
          <button className="border-4 border-black p-4 w-60 font-bold">
            Shop Now
          </button>
        </div>
        <Swiper
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          className="w-[100%] h-96 max-w-[86rem]"
        >
          <SwiperSlide className="flex items-center justify-center bg-blue-500 text-white text-2xl h-full">
            <img
              className="w-full h-full object-cover"
              src="https://img.freepik.com/free-photo/top-view-salted-roasted-pistachios-white-background-with-copy-space_141793-7925.jpg?t=st=1720552057~exp=1720555657~hmac=e82387c65deea5005d909e5a7ccae6c2d8b1c88c18289f04ee2d536dca4ab8a0&w=996"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-red-500 text-white text-2xl h-full">
            <img
              className="w-full h-full object-cover"
              src="https://img.freepik.com/free-photo/different-kinds-nuts-spoon-copy-space_23-2148675527.jpg?t=st=1720551900~exp=1720555500~hmac=7a3acc59eb59b9d37b3bd78a1c1eb541d441914d2c6cdb12f391017014949098&w=1060"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-green-500 text-white text-2xl h-full">
            <img
              className="w-full h-full object-cover"
              src="https://img.freepik.com/free-photo/top-view-autumn-arrangement-with-wooden-background_23-2148233955.jpg?t=st=1720552030~exp=1720555630~hmac=34787d568f07a0bb56b742a4f81ff641fb258cbae8e2cd5d86e6ac64ef337bb3&w=996"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-yellow-500 text-white text-2xl h-full">
            <img
              className="w-full h-full object-cover"
              src="https://img.freepik.com/free-photo/top-view-delicious-nuts-concept_23-2148694020.jpg?t=st=1720551876~exp=1720555476~hmac=c47d910baa6bcc251b39cac7fc89dc7bf2174ad8454eb20be2793ff90c6ef04f&w=996"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-purple-500 text-white text-2xl h-full">
            <img
              className="w-full h-full object-cover"
              src="https://img.freepik.com/free-photo/different-kinds-nuts-spoon-copy-space_23-2148675527.jpg?t=st=1720551900~exp=1720555500~hmac=7a3acc59eb59b9d37b3bd78a1c1eb541d441914d2c6cdb12f391017014949098&w=1060"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-pink-500 text-white text-2xl h-full">
            <img
              className="w-full h-full object-cover"
              src="https://img.freepik.com/free-photo/peanut-butter-jar-peanuts-jars_114579-1296.jpg?w=996&t=st=1720551278~exp=1720551878~hmac=1d601a0a1800fd51533611fb347bfac65ea3be7be78dc380ad23dde05c6df4bc"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-teal-500 text-white text-2xl h-full">
            <img
              className="w-full h-full object-cover"
              src="https://img.freepik.com/premium-photo/peanut-paste-with-wooden-spoon-bread-peanuts-white-table_94064-10840.jpg?w=1060"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-orange-500 text-white text-2xl h-full">
            <img
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/4753649/pexels-photo-4753649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-indigo-500 text-white text-2xl h-full">
            <img
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/6659698/pexels-photo-6659698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComp;
