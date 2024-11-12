import React from "react";
import ReviewCard from "./ReviewCard";
import { Divider } from "@mui/material";

const Review = () => {
  return (
    <div className="p-5 lg:px-20 flex flex-col lg:flex-row gap-20">
      <section className="w-full md:w-1/2 lg:w-[30%] space-y-1">
        <img
          className="h-[380px]"
          src="https://cdn.pixabay.com/photo/2021/03/08/06/25/chickens-6078279_1280.jpg"
          alt=""
        />
        <div>
          <div>
            <p className="font-bold text-xl">Ram Farm</p>
            <p className="text-lg text-gray-600">Red Chicken</p>
          </div>
          <div>
            <div className="price flex items-center gap-3 mt-1">
              <span className="font-sans text-gray-800">$400</span>
              <span className="line-through text-red-500">$999</span>
              <span className="text-primary-color font-semibold">60%</span>
            </div>
            <p className="text-sm mt-1">
              Inclusive of all taxes. Free Shipping above $1500
            </p>
          </div>
        </div>
      </section>
      <section>
        {[1, 1, 1, 1, 1, 1].map((item) => (
          <div className="space-y-5 mt-3 w-full">
            <ReviewCard />
            <Divider />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Review;
