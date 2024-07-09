import React from 'react';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";

const Navbar = ({ isOpen, toggleNav }) => {
    return (
        <div className={`z-50 flex flex-col justify-between  absolute top-0 left-0 w-60 h-full  bg-black opacity-80 text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <ul className="">
            <button className="text-4xl p-4 mt-8 ml-10" onClick={toggleNav}>&times;</button>
                <li className='p-4'><img src="\images\WhatsApp_Image_2024-07-09_at_16.23.39_d59e32f2-removebg-preview.png" alt="" /></li>
                <li className="p-4 text-2xl"><a href="#home">Home</a></li>
                <li className="p-4 text-2xl"><a href="#menu">Menu</a></li>
                <li className="p-4 text-2xl"><a href="#about">About Us</a></li>
                <li className="p-4 text-2xl"><a href="#contact">Contact</a></li>
            </ul>
            <div className='w-[100%] h-24 bg-red relative'>
               <p className='text-xs flex justify-around p-4 text-white'>TEXT SUPPORT 24/7 <p className='text-[#ea9534] underline underline-offset-2'>070-7782-9137</p> </p>
               <hr className='h-[1.5px] bg-white'/>
               <div className='flex justify-around mt-3'>
                <p className='flex items-center justify-between'><IoBagOutline />&nbsp;CART</p> <p className='flex items-center justify-between'><IoMdHeartEmpty />&nbsp;WISHLIST</p>
               </div>
            </div>
        </div>
    );
};

export default Navbar;
