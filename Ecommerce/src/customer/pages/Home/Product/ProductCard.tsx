import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import { Button } from "@mui/material";
import { Favorite, ModeComment } from "@mui/icons-material";
import { teal } from "@mui/material/colors";

const images = [
  "https://cdn.pixabay.com/photo/2023/11/21/04/12/chicken-8402334_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/04/16/21/11/ai-generated-8700785_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/11/21/04/12/chicken-8402334_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/04/16/21/11/ai-generated-8700785_1280.jpg",
];
const ProductCard = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    let interval: any;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
      interval = null;
    }
    return () => clearInterval(interval);
  }, [isHovered]);
  return (
    <>
      <div className="group px-4 relative">
        <div
          className="card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {images.map((item, index) => (
            <img
              key={index}
              className="card-media object-top"
              src={item}
              alt=""
              style={{
                transform: `translateX(${(index - currentImage) * 100}%)`,
              }}
            />
          ))}
          {
            <div className="indicator flex flex-col item-center space-x-2">
              <div className="flex gap-3">
                <Button variant="contained" color="secondary">
                  <Favorite sx={{ color: teal[500] }} />
                </Button>
                <Button variant="contained" color="secondary">
                  <ModeComment sx={{ color: teal[500] }} />
                </Button>
              </div>
            </div>
          }
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
    </>
  );
};

export default ProductCard;
