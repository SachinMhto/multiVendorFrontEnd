import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import React, { useState } from "react";
import { colors } from "../../../../data/Filter/colors";
import { useSearchParams } from "react-router-dom";
import { price } from "../../../../data/Filter/price";
import { discount } from "../../../../data/Filter/discount";

const FilterSection = () => {
  const [expendColor, setExpendColor] = useState(false);
  const [expendPrice, setExpendPrice] = useState(false);

  const handleColorToggle = () => {
    setExpendColor(!expendColor);
  };

  const handlePriceToggle = () => {
    setExpendPrice(!expendPrice);
  };

  const [searchParams, setSearchParams] = useSearchParams();

  const updateFilterParams = (e: any) => {
    const { value, name } = e.target;
    if (value) {
      searchParams.set(name, value);
    } else {
      searchParams.delete(name);
    }
    setSearchParams(searchParams);
  };
  const clearAllFilters = () => {
    searchParams.forEach((value: any, key: any) => {
      searchParams.delete(key);
    });
    setSearchParams(searchParams);
  };

  return (
    <div className="-z-50 space-y-5 bg-white">
      <div className="flex items-center justify-between h-[40px] px-9 lg:border-r">
        <p className="text-lg font-semibold">Filters</p>
        <Button
          size="small"
          onClick={clearAllFilters}
          className="text-teal-600 cursor-pointer font-semibold"
        >
          Clear All
        </Button>
      </div>
      <Divider />
      <div className="px-9 space-y-6">
        {/* Color Section */}
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: teal[500],
                pb: "14px",
              }}
              className="text-2xl font-semibold"
            >
              Color
            </FormLabel>
            <RadioGroup
              aria-labelledby="color"
              defaultValue=""
              name="color"
              onChange={updateFilterParams}
            >
              {colors.slice(0, expendColor ? colors.length : 5).map((item) => (
                <FormControlLabel
                  key={item.hex}
                  value={item.name}
                  control={<Radio />}
                  label={
                    <div className="flex items-center gap-3">
                      <p>{item.name}</p>
                      <p
                        style={{ backgroundColor: item.hex }}
                        className={`h-5 w-5 rounded-full ${
                          item.name === "White" ? "border" : ""
                        }`}
                      ></p>
                    </div>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
          <div>
            <button
              onClick={handleColorToggle}
              className="text-primary-color cursor-pointer hover:text-purple-600 flex items-center"
            >
              {expendColor ? "hide" : `+${colors.length - 5} more`}
            </button>
          </div>
        </section>

        {/* Price Section */}
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: teal[600],
                pb: "14px",
              }}
              className="text-2xl font-semibold"
              id="price"
            >
              Price
            </FormLabel>
            <RadioGroup
              onChange={updateFilterParams}
              aria-labelledby="price"
              defaultValue=""
              name="price"
            >
              {price.slice(0, expendPrice ? price.length : 5).map((item) => (
                <FormControlLabel
                  key={item.value}
                  value={item.value}
                  control={<Radio />}
                  label={
                    <div className="flex items-center gap-3">
                      <p>{item.name}</p>
                    </div>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
          <div>
            <button
              onClick={handlePriceToggle}
              className="text-primary-color cursor-pointer hover:text-purple-600 flex items-center"
            >
              {expendPrice ? "hide" : `+${price.length - 5} more`}
            </button>
          </div>
        </section>
        {/* Discount Section */}
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: teal[600],
                pb: "14px",
              }}
              className="text-2xl font-semibold"
              id="discount"
            >
              Discount
            </FormLabel>
            <RadioGroup
              onChange={updateFilterParams}
              aria-labelledby="discount"
              defaultValue=""
              name="discount"
            >
              {/* Adjust the array to be mapped based on the required length */}
              {discount.slice(0, expendPrice ? price.length : 5).map((item) => (
                <FormControlLabel
                  key={item.value}
                  value={item.value}
                  control={<Radio />}
                  label={
                    <div className="flex items-center gap-3">
                      <p>{item.name}</p>
                    </div>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
          <div>
            <button
              onClick={handlePriceToggle}
              className="text-primary-color cursor-pointer hover:text-purple-600 flex items-center"
            >
              {expendPrice ? "hide" : `+${discount.length - 4} more`}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FilterSection;
