/* eslint-disable no-unused-vars */
import React from "react";

const CategoryGrid = () => {
  return (
    <div className="grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20]">
      <div className="col-span-3 row-span-12 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://cdn.pixabay.com/photo/2023/08/19/23/47/ai-generated-8201394_1280.png"
          alt=""
        />
      </div>
      <div className="col-span-2 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://cdn.pixabay.com/photo/2020/10/10/12/28/hen-5642953_1280.jpg"
          alt=""
        />
      </div>
      <div className="col-span-4 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://cdn.pixabay.com/photo/2019/12/29/15/37/duck-4727363_1280.jpg"
          alt=""
        />
      </div>
      <div className="col-span-3 row-span-12 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://cdn.pixabay.com/photo/2024/05/20/08/34/ai-generated-8774158_1280.jpg"
          alt=""
        />
      </div>
      <div className="col-span-4 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://cdn.pixabay.com/photo/2022/11/02/11/56/fish-7564701_1280.jpg"
          alt=""
        />
      </div>
      <div className="col-span-2 row-span-6 text-white">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://cdn.pixabay.com/photo/2019/08/24/00/04/stable-4426781_1280.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default CategoryGrid;
