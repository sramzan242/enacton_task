import React, { useState } from 'react';
import './index.css';
import Navbar from './components/page1/Navbar';
import SwiperComponent from './components/page1/SwiperComponent';
import Heading from './components/page2/Heading';
import SwiperComp from './components/page3/SwiperComp';
import Footer from './components/page3/Footer';
import SmoothCursor from './components/SmoothCursor';

const App = () => {
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    };

    return (
        <>
        <SmoothCursor/>
            <div className="flex h-screen w-screen bg-[#130f0c]">
                <Navbar isOpen={isNavOpen} toggleNav={toggleNav} />
                <div className="flex flex-col flex-grow">
                    {!isNavOpen && (
                        <div className="w-[8vw] h-screen p-10 absolute z-10 bg-black opacity-80 border-r-4 border-[#ea9534]">
                            <button className="text-3xl ml-2 mt-5 text-white" onClick={toggleNav}>
                                &#9776;
                            </button>
                            <div className='flex items-center justify-center flex-col mt-80'>
                                <div className='-rotate-90 w-60'>
                                    <img className='h-[100%] w-[100%]' src="\images\WhatsApp_Image_2024-07-09_at_16.23.39_d59e32f2-removebg-preview.png" alt="" />
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="flex-grow">
                        <SwiperComponent />
                    </div>
                </div>
            </div>
            <Heading />
            <SwiperComp />
            <Footer />
        </>
    );
};

export default App;
