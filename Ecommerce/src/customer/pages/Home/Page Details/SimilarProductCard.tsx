import React from "react";

const SimilarProductCard = () => {
  return (
    <div>
      <div className="group px-4 relative">
        <div className="card">
          <img
            className="card-media object-top"
            src="https://cdn.pixabay.com/photo/2020/12/08/15/11/rooster-5814683_1280.jpg"
            alt=""
          />
        </div>
        <div className="details pt-3 space-y-1 space-x-1 group-hover-effect rounded-md">
          <div className="name">
            <h1>Chicken</h1>
            <p>Red Chicken</p>
          </div>
          <div className="price flex items-center gap-1">
            <span className="font-sans text-gray-800">₹4000</span>
            <span className="thin-line-though text-gray-400">₹9000</span>
            <span className="text-primary-color font-semibold">60%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProductCard;
