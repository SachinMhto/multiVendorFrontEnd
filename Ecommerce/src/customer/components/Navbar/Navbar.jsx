/* eslint-disable no-unused-vars */
import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CategorySheet from "./CategorySheet";
import { mainCategory } from "../../../data/category/mainCategory";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [selectedCategory, setSelectedCategory] = useState("men");
  const [showCategorySheet, setShowCategorySet] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Box className="sticky top-0 left-0 right-0 bg-white" sx={{ zIndex: 2 }}>
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              {!isLarge && (
                <IconButton>
                  <MenuIcon />
                </IconButton>
              )}

              <h1
                onClick={() => navigate("/")}
                className="logo cursor-pointer text-lg md:text-2xl text-[#00927c] pr-5"
              >
                Nepal WellHope
              </h1>
              <ul className="flex items-center font-medium">
                {mainCategory.map((item, index) => (
                  <li
                    onMouseLeave={() => setShowCategorySet(false)}
                    onMouseEnter={() => {
                      setShowCategorySet(true);
                      setSelectedCategory(item.categoryId);
                    }}
                    key={index}
                    className="mainCategory hover:text-primary-color hover:border-b-2 h-[70px] border-primary-color px-2 flex items-center"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex gap-1 lg:gap-2 items-center">
            <IconButton>
              <SearchIcon />
            </IconButton>
            {isLoggedIn ? (
              <Button
                onClick={() => navigate("/account/orders")}
                className="flex items-center gap-2"
              >
                <Avatar
                  sx={{ width: 29, height: 29 }}
                  src="https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519_1280.jpg"
                />
                <h1 className="font-semibold hidden lg:block text-[#00927c]">
                  Sachin
                </h1>
              </Button>
            ) : (
              <Button>Login</Button>
            )}
            <IconButton>
              <FavoriteBorderIcon
                className="text-red-600"
                sx={{ fontSize: 30 }}
              />
            </IconButton>
            <IconButton onClick={() => navigate("/cart")}>
              <AddShoppingCartIcon
                className="text-green-500"
                sx={{ fontSize: 30 }}
              />
            </IconButton>
            {isLarge && (
              <Button startIcon={<StorefrontIcon />} variant="outlined">
                Become Seller
              </Button>
            )}
          </div>
        </div>

        {showCategorySheet && (
          <div
            onMouseLeave={() => setShowCategorySet(false)}
            onMouseEnter={() => setShowCategorySet(true)}
            className="categorySheet absolute top-[4.41rem] left-20 right-20 border bg-slate-500"
          >
            <CategorySheet selectedCategory={selectedCategory} />
          </div>
        )}
      </Box>
    </>
  );
};
export default Navbar;
