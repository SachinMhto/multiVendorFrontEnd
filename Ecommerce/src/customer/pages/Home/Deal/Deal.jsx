/* eslint-disable no-unused-vars */
import React from "react";
import DealCard from "./DealCard";
import Slider from "react-slick/lib/slider";

const Deal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="py-5 lg:px-5 ">
      <div className="flex justify-between items-center gap-2">
        {[1, 1, 1, 1, 1, 1, 1].map((item, index) => (
          <DealCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Deal;
