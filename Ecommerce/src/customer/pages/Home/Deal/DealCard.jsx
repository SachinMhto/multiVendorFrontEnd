/* eslint-disable no-unused-vars */
import React from "react";

const DealCard = () => {
  return (
    <div className="w-[15rem] h-[auto] cursor-pointer">
      <img
        className="border-x-[7px] border-t-[7px] border-purple-600 w-full h-[10rem] object-cover object-top "
        src="https://cdn.pixabay.com/photo/2024/04/28/21/56/chicken-8726388_1280.jpg"
        alt=""
      />
      <div className="border-4 border-black bg-black text-white text-center">
        <p className="text-[15px] font-semibold">Chicken</p>
        <p className="text-2xl font-bold">20% OFF</p>
        <p className="text-lg">Shop Now</p>
      </div>
    </div>
  );
};

export default DealCard;
