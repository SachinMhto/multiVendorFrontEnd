import { Add, Close, Remove } from "@mui/icons-material";
import { Button, Divider, IconButton } from "@mui/material";
import React, { useState } from "react";

const CartItem = () => {
  const handleUpdateQuantity = () => {};
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="border rounded-md relative">
      <div className="p-5 flex gap-3">
        <img
          className="w-[100px] rounded-md"
          src="https://cdn.pixabay.com/photo/2020/06/29/00/03/parrots-5350976_1280.jpg"
          alt=""
        />

        <div className="space-y-2">
          <h1 className="font-semibold text-lg">Chicken Feeds</h1>
          <p className="text-gray-400 font-medium text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus enim
          </p>
          <p className="text-gray-400 text-xs">
            <strong>Sold By: </strong>Nepal Wellhope PVT.LTD
          </p>
          <p className="text-sm">7 Days Replacement Available</p>
          <p className="text-sm text-gray-500">
            <strong>Quantity: </strong>5
          </p>
        </div>
      </div>
      <Divider />
      <div className="flex justify-between items-center">
        <div className="px-5 py-2 flex justify-between items-center">
          <div className="flex flex-center gap-2 w-[140px] justify-between items-center">
            <Button
              onClick={handleUpdateQuantity}
              className="rounded-full"
              disabled={true}
            >
              <Remove className="text-red-700" />
            </Button>
            <span>{quantity}</span>
            <Button className="rounded-full" onClick={handleUpdateQuantity}>
              <Add />
            </Button>
          </div>
        </div>
        <div className="pr-5">
          <p className="text-gray-700">$799</p>
        </div>
      </div>
      <div className="absolute top-1 right-1">
        <IconButton color="primary">
          <Close />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
