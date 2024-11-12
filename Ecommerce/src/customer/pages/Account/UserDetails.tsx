import React from "react";
import ProfileFieldCard from "../../components/Navbar/ProfileFieldCard";
import { Divider } from "@mui/material";

const UserDetails = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Personal Details</h1>
        </div>
        <div className="">
          <ProfileFieldCard keys="Name" value={"Sachin"} />
          <Divider />
          <ProfileFieldCard keys="Mobile" value={"98000000001"} />
          <Divider />
          <ProfileFieldCard keys="Email" value={"sachin.mhto.321@gmail.com"} />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
