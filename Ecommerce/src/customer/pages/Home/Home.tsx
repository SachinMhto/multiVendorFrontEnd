import React from "react";
import ElectricCategory from "./CategoryGrid/ElectricCategory/ElectricCategory";
import CategoryGrid from "./CategoryGrid/CategoryGrid";
import Deal from "./Deal/Deal";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import { Button } from "@mui/material";
import { Storefront } from "@mui/icons-material";
const Home = () => {
  return (
    <>
      <div className="space-y-5 lg:space-y-10 relative pb-20 pt-[5px]">
        <ElectricCategory />
        <CategoryGrid />
        <div className="mt-20px">
          <h1 className="text-lg lg:text-4xl w-full text-center pb-[50px] uppercase font-bold text-primary-color">
            Todays Deal
          </h1>
          <Deal />
        </div>

        <section className="py-20">
          <h1 className="text-lg lg:text-4xl w-full text-center pb-[50px] uppercase font-bold text-primary-color">
            Shop By Category
          </h1>
          <ShopByCategory />
        </section>
        <section className="lg:px-20 relative h-[200px] lg:h-[450px] object-cover">
          <img
            className="h-full w-full"
            src="https://cdn.pixabay.com/photo/2015/08/03/10/27/banner-873111_1280.jpg"
            alt=""
          />
          <div className="absolute top-1/2 right-4 lg:right-[15rem] transform -translate-y-1/2 font-semibold lg:text-4xl space-y-3">
            <h1>Sell Your Product</h1>
            <p>With</p>
            <p className="logo">Well Hope</p>
            <div>
              <Button
                startIcon={<Storefront />}
                variant="contained"
                size="large"
              >
                Become Seller
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
