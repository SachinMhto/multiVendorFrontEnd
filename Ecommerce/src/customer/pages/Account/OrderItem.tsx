import { ElectricBolt } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { teal } from "@mui/material/colors";
import React from "react";

const OrderItem = () => {
  return (
    <div className="text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer">
      <div className="flex items-center gap-5">
        <div>
          <Avatar sizes="small" sx={{ bgcolor: teal[500] }}>
            <ElectricBolt />
          </Avatar>
        </div>
        <div>
          <h1 className="font-bold text-primary-color">PENDING</h1>
          <p>Arriving By Mon,15 Nov</p>
        </div>
      </div>
      <div className="p-5 bg-teal-50 flex gap-3">
        <div>
          <img
            className="w-[70px]"
            src="https://cdn.pixabay.com/photo/2024/03/26/11/57/e-commerce-8656646_1280.jpg"
            alt=""
          />
        </div>
        <div>
          <h1 className="font-bold">Nepal Wellhope</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            Soluta recusandae, obcaecati eos aut fuga reiciendis voluptas optio,
            impedit, sint tempora illum?
          </p>
          <p>
            <strong>size :</strong>
            FREE
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
