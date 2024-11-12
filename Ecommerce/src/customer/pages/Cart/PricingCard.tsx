import { Divider } from "@mui/material";
import React from "react";

const PricingCard = () => {
  return (
    <>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="pl-3">Subtotal</span>
          <span className="pr-3">$899</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="pl-3">Discount</span>
          <span className="pr-3">$699</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="pl-3">Shipping</span>
          <span className="pr-3">$69</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="pl-3">Platform</span>
          <span className="pr-3">Free</span>
        </div>
        <Divider />
        <div className="flex justify-between items-center">
          <span className="pl-3">Total</span>
          <span className="pr-3">$799</span>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
