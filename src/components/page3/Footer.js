import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { AiFillCustomerService } from "react-icons/ai";
import { BiCheckCircle } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="flex items-center justify-around flex-col w-screen bg-[#130f0c] h-[120vh]">
      <div className="w-[90vw] h-[30vw] relative">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10">
          <div className="flex flex-col justify-around mt-28 ml-10">
            <h1 className="text-white text-4xl relative z-[9999]">
              SIGN UP SPECIAL PROMOTIONS
            </h1>
            <div className="w-[550px] h-[.2rem] mt-1 bg-white"></div>
            <p className="text-white text-lg mt-10">
              Get exclusive deals you won't find anywhere else straight to your
              inbox!
            </p>
            <div className="flex gap-8 mt-10">
              <input
                className="w-96 border-2 bg-transparent text-white"
                type="text"
                placeholder="Enter Email Adderess"
              />
              <button className="w-48 text-white border-2 bg-[#d29a5a]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <img
          className="bg-center bg-cover w-[100%] h-[100%]"
          src="https://img.freepik.com/free-photo/view-delicious-food-dish_23-2150777839.jpg?t=st=1720520613~exp=1720524213~hmac=c1195f01180479cd551bc2d7f711d373a8033e9b17d1157dabd350c28bdea0bd&w=1060"
          alt="img"
        />
      </div>
      <div className="w-[90vw] h-[12vw] flex items-center gap-2">
        <div className="w-[500px] h-[100%] flex flex-col items-center justify-around p-12">
          <h1 className="text-[#d29a5a] text-2xl flex items-center gap-3">
            <LiaShippingFastSolid />
            &nbsp;FREE SHIPPING WORLDWIDE
          </h1>
          <p className="text-lg text-white">Guaranteed Delivery</p>
        </div>
        <div className="w-[500px] h-[100%] flex flex-col items-center justify-around p-12">
          <h1 className="text-[#d29a5a] text-2xl flex items-center gap-3">
            <AiFillCustomerService />
            &nbsp;24/7 CUSTOMER SERVICE
          </h1>
          <p className="text-lg text-white">Text Us 24/7 at 070-7782-9137 </p>
        </div>
        <div className="w-[500px] h-[100%] flex flex-col items-center justify-around p-12">
          <h1 className="text-[#d29a5a] text-2xl flex items-center gap-3">
            <BiCheckCircle />
            &nbsp;QUALITY GUARANTEE!
          </h1>
          <p className="text-lg text-white">Send Within 30 Days</p>
        </div>
      </div>
      <footer className="w-[90vw] h-[10vw] flex items-center justify-center border-[#d29a5a] border-t-8 ">
        <div className="w-[40vw] h-[100%]">
          <img
            className="w-[100%] h-[100%] bg-cover"
            src="/images/new image.png"
            alt="img"
          />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
