/* eslint-disable no-unused-vars */
import React from "react";
import ShopByCategoryCard from "./ShopByCategoryCard";

const ShopByCategory = () => {
  return (
    <div className="flex justify-between gap-7 flex-wrap lg:px-[20px]">
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
        <ShopByCategoryCard key={index} />
      ))}
    </div>
  );
};

export default ShopByCategory;
