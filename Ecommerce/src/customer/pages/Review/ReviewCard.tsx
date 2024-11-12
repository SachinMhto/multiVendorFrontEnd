import { Delete } from "@mui/icons-material";
import { Avatar, Box, Grid, Grid2, IconButton, Rating } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

const ReviewCard = () => {
  return (
    <div className="flex justify-between">
      <Grid2 container spacing={10}>
        <Grid2 size={{ xs: 1 }}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
            >
              N
            </Avatar>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 9 }}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Nepal WellHope</p>
              <p className="opacity-70">kjhfkjgaskjhgkahs</p>
            </div>
          </div>
          <Rating readOnly value={4} precision={0.5} />
          <p>Value For Money Product,Great Product</p>
          <div>
            <img
              className="w-24 h-24 object-cover"
              src="https://cdn.pixabay.com/photo/2015/08/04/10/12/chickens-874512_1280.jpg"
              alt=""
            />
          </div>
        </Grid2>
      </Grid2>
      <div>
        <IconButton className="">
          <Delete sx={{ color: red[700] }} />
        </IconButton>
      </div>
    </div>
  );
};

export default ReviewCard;
