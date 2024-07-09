import React from 'react';

const Button = () => {
  return (
    <div className="relative w-80 h-[5vw] flex items-center justify-center border-4 p-2 cursor-pointer group">
      <h1 className='text-3xl text-white z-10'>Meet Chef Matt</h1>
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
    </div>
  );
}

export default Button;
