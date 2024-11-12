/* eslint-disable no-unused-vars */
import React from "react";
import ElectricCategoryCard from "./ElectricCategoryCard";

const ElectricCategory = () => {
  return (
    <div className="flex flex-wrap justify-between py-5 lg:px-20 border-b">
      {[1, 1, 1, 1, 1, 1].map((item, index) => (
        <ElectricCategoryCard key={index} />
      ))}
    </div>
  );
};

export default ElectricCategory;
