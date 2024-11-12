import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { teal, yellow } from "@mui/material/colors";
import { Button, Divider } from "@mui/material";
import {
  Add,
  AddShoppingCart,
  FavoriteBorder,
  LocalShipping,
  Remove,
  Shield,
  Wallet,
  WorkspacePremium,
} from "@mui/icons-material";
import SimilarProduct from "./SimilarProduct";
import ReviewCard from "../../Review/ReviewCard";

const ProductDetails = () => {
  const [quantity, setQuantity] = React.useState(1);
  return (
    <div className="px-5 lg:px-20 pt-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {[1, 1, 1, 1].map((item) => (
              <img
                className="w-[50px] lg:w-full cursor-pointer rounded-md"
                src="https://cdn.pixabay.com/photo/2024/04/08/20/20/bird-8684420_1280.jpg"
                alt=""
              />
            ))}
          </div>
          <div className="w-full lg:w-[85%]">
            <img
              className="w-full rounded-md"
              src="https://cdn.pixabay.com/photo/2024/04/08/20/20/bird-8684420_1280.jpg"
              alt=""
            />
          </div>
        </section>
        <section>
          <h1 className="font-bold text-lg text-primary-color">Ram Farm</h1>
          <p className="text-gray-500 font-semibold">Broilar</p>
          <div className="flex justify-between items-center py-2 border w-[180px] px-3 mt-2">
            <div className="flex gap-1 items-center">
              <span>4</span>
              <StarIcon sx={{ color: yellow[700] }} />
            </div>
            <Divider orientation="vertical" flexItem />
            <span>100 Rating</span>
          </div>
          <div>
            <div className="price flex items-center gap-3 mt-2">
              <span className="font-sans text-gray-800">$400</span>
              <span className="line-through text-red-500">$999</span>
              <span className="text-primary-color font-semibold">60%</span>
            </div>
            <p className="text-sm mt-1">
              Inclusive of all taxes. Free Shipping above $1500
            </p>
          </div>
          <div className="mt-2 space-y-3">
            <div className="flex items-center gap-3">
              <Shield sx={{ color: teal[500] }} />
              <p>Authentic And quality Assured</p>
            </div>

            <div className="flex items-center gap-3">
              <WorkspacePremium sx={{ color: teal[500] }} />
              <p>100% money back gurantee</p>
            </div>
            <div className="flex items-center gap-3">
              <LocalShipping sx={{ color: teal[500] }} />
              <p>Free Shipping And Returns</p>
            </div>
            <div className="flex items-center gap-3">
              <Wallet sx={{ color: teal[500] }} />
              <p>Pay On Delivery Might be available</p>
            </div>
          </div>
          <div className="mt-5 space-y-2">
            <h1>QUANTITY</h1>
            <div className="flex items-center gap-2 w-[140px] justify-between bg-slate-400 rounded-full text-white">
              <Button
                className="rounded-full"
                disabled={quantity == 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                <Remove className="text-red-700" />
              </Button>
              <span>{quantity}</span>
              <Button
                className="rounded-full"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Add />
              </Button>
            </div>
          </div>
          <div className="mt-1 flex items-center gap-5">
            <Button
              fullWidth
              variant="contained"
              startIcon={<AddShoppingCart />}
              sx={{ py: "1rem" }}
            >
              Add To Cart
            </Button>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<FavoriteBorder />}
              sx={{ py: "1rem" }}
            >
              Wishlist
            </Button>
          </div>
        </section>
        <div className="">
          <h1 className="text-2xl uppercase font-bold text-primary-color">
            About The Product
          </h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores, distinctio nobis autem recusandae provident sed. At,
            porro eos, incidunt necessitatibus exercitationem eaque iure et modi
            odit enim, veritatis quia accusantium?
          </p>
        </div>
      </div>
      <div className="mt-5 space-y-5">
        <h1 className="text-[30px] text-primary-color mb-5  text-center font-semibold">
          REVIEWS
        </h1>
        <ReviewCard />
        <Divider />
      </div>
      <div className="mt-5 w-full">
        <h1 className="text-center font-bold text-2xl text-primary-color">
          Similar Product
        </h1>
        <div className="mt-5">
          <SimilarProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
