import React from "react";
import ProductSwiper from "./ProductSwiper";

const Heading = () => {
  return (
    <div className="w-screen  h-auto">
        <img className="absolute left-4 top-[40vw]" src="\images\png-clipart-green-leaves-removebg-preview.png" alt="" />
      <div className="p-24">
       <div className="w-[600px] ">
       <h1 className=" text-5xl font-medium text-[#ea9534]">CHEF MATT PRODUCTS</h1>
       <div className="w-[600px] h-1 mt-1 bg-[#ea9534]"></div>
        <p className="mt-2 text-lg text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
          mollitia, omnis sed inventore eos ea nxbcx jxhckx mq.
        </p>
       </div>
      </div>
    <ProductSwiper/>
    </div>
  );
};

export default Heading;
