/* eslint-disable no-unused-vars */
import React from "react";
import "./ShopByCategory.css";
const ShopByCategoryCard = () => {
  return (
    <div className="flex gap-3 flex-col justify-center items-center group cursor-pointer">
      <div className="custome-border w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-full bg-primary-color">
        <img
          className="rounded-full group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full"
          src="https://cdn.pixabay.com/photo/2016/11/29/05/32/rooster-1867562_1280.jpg"
          alt=""
        />
      </div>
      <h1>Poultry Farm</h1>
    </div>
  );
};

export default ShopByCategoryCard;
