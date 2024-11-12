import { Radio } from "@mui/material";
import React from "react";

const UserAddressCard = () => {
  return (
    <div className="p-5 border rounded-md flex">
      <div>
        {/* <Radio
          checked={true}
          onChange={handleChange}
          value=""
          name="radio-button"
        /> */}
      </div>
      <div className="space-y-3">
        <h1>Sachin</h1>
        <p className="w-[320px]">Nepal Chitwan Bharatpur 5, Kalyanpur</p>
        <p>
          <strong>Mobile :</strong> 9801111111111
        </p>
      </div>
    </div>
  );
};

export default UserAddressCard;
