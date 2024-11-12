import React from "react";
import { menLevelTwo } from "../../../data/category/levelTwo/mensLevelTwo";
import { womenLevelTwo } from "../../../data/category/levelTwo/womenLevelTwo";
import { electronicsLevelTwo } from "../../../data/category/levelTwo/electronicsLevelTwo";
import { mensLevelThree } from "../../../data/category/levelThree/mensLevelThree";
import { womenLevelThree } from "../../../data/category/levelThree/womenLevelThree";
import { electronicsLevelThree } from "../../../data/category/levelThree/electronicsLevelThree";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
const categoryTwo: { [key: string]: any[] } = {
  men: menLevelTwo,
  women: womenLevelTwo,
  electronics: electronicsLevelTwo,
};
const categoryThree: { [key: string]: any[] } = {
  men: mensLevelThree,
  women: womenLevelThree,
  electronics: electronicsLevelThree,
};
const CategorySheet = ({ selectedCategory, setShowSheet }: any) => {
  const childCategory = (category: any, parentCategoryId: any) => {
    return category.filter(
      (child: any) => child.parentCategoryId == parentCategoryId
    );
  };
  const navigate = useNavigate();
  return (
    <Box className="bg-white shadow-lg lg:h-[400px] overflow-y-auto">
      <div className="flex flex-wrap text-sm">
        {categoryTwo[selectedCategory]?.map((item, index) => (
          <div
            className={`p-8 lg:w-[20%] ${
              index % 2 == 0 ? "bg-slate-300" : "bg-white"
            }`}
          >
            <p className="text-primary-color mb-5 font-semibold">{item.name}</p>
            <ul className="space-y-3">
              {childCategory(
                categoryThree[selectedCategory],
                item.categoryId
              ).map((item: any) => (
                <div>
                  <li
                    onClick={() => navigate("/products/" + item.categoryId)}
                    className="hover:text-primary-color cursor-pointer"
                  >
                    {item.name}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Box>
  );
};
export default CategorySheet;
