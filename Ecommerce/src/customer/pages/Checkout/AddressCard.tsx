import { Radio } from "@mui/material";
import React from "react";

const AddressCard = () => {
  const handleChange = (event) => {
    console.log(event.target.checked);
  };
  return (
    <div className="p-3 border rounded-md flex">
      <div>
        <Radio checked={true} onChange={handleChange} name="radio-button" />
      </div>
      <div className="space-y-3 pt-3">
        <h1>Nepal WellHope</h1>
        <p className="w-[320px]">Bharatpur 5,kalyanpur -3306</p>
        <p>
          <strong>Mobile: </strong>9800000001
        </p>
      </div>
    </div>
  );
};

export default AddressCard;
