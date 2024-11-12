import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Modal,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import AddressCard from "./AddressCard";
import { AddLocation, AddLocationAlt } from "@mui/icons-material";
import AddressForm from "./AddressForm";
import PricingCard from "../Cart/PricingCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};
const paymentGatewayList = [
  {
    value: "ESEWA",
    image: "/Pictures/esewa.png",
    label: "",
  },
  {
    value: "STRIPE",
    image: "/Pictures/stripe.png",
    label: "",
  },
];
const Checkout = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [paymentGateway, setPaymentGateway] = React.useState("ESEWA");
  const handlePaymentChange = (event: any) => {
    setPaymentGateway(event.target.value);
  };
  return (
    <>
      <div className="pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen">
        <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
          <div className="col-span-2 space-y-2">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">Select Address</h1>
              <Button onClick={handleOpen}>
                <AddLocation /> Add New Address
              </Button>
            </div>
            <div className="text-xs font-medium space-y-2">
              <p>Saved Address</p>
              <div className="space-y-1">
                {[1, 1, 1].map((item) => (
                  <AddressCard />
                ))}
              </div>
            </div>
            <div className="px-2 py-1 rounded-md border">
              <Button onClick={handleOpen}>
                <AddLocationAlt /> Add New Address
              </Button>
            </div>
          </div>
          <div>
            <div className="">
              <div className="space-y-3 border p-5 rounded-md">
                <h1 className="text-primary-color font-medium pb-2 text-center">
                  Choose Payment Gateway
                </h1>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  className="flex justify-between pr-0"
                  row
                  onChange={handlePaymentChange}
                  value={paymentGateway}
                >
                  {paymentGatewayList.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      className="border w-[45%] pr-2 rounded-md flex justify-center"
                      value={item.value}
                      control={<Radio />}
                      label={
                        <img
                          src={item.image}
                          className={`${
                            item.value == "stripe" ? "w-14" : ""
                          }object-cover`}
                          alt={item.label}
                        />
                      }
                    />
                  ))}
                </RadioGroup>
              </div>
            </div>
            <div className="border rounded-md">
              <PricingCard />
              <div className="p-5">
                <Button variant="contained" fullWidth sx={{ py: "11px" }}>
                  Check Out
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddressForm />
        </Box>
      </Modal>
    </>
  );
};

export default Checkout;
