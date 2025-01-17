import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const steps = [
  { name: "Order Placed", description: "on Thu, 11 Jul", value: "PLACED" },
  {
    name: "Packed",
    description: "Item Packed in Dispatch Warehouse",
    value: "CONFIRMED",
  },
  { name: "Shipped", description: "by Mon, 15 Jul", value: "SHIPPED" },
  { name: "Arriving", description: "by 16 Jul - 18 Jul", value: "ARRIVING" },
  { name: "Arrived", description: "by 16 Jul - 18 Jul", value: "DELIVERED" },
];

const canceledStep = [
  { name: "Order Placed", description: "on Thu, 11 Jul", value: "PLACED" },
  { name: "Order Canceled", description: "on Thu, 11 Jul", value: "CANCELLED" },
];

const OrderStepper = ({ orderStatus }) => {
  const [statusStep, setStatusStep] = useState(steps);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (orderStatus === "CANCELLED") {
      setStatusStep(canceledStep);
    } else {
      setStatusStep(steps);
    }

    const stepIndex = steps.findIndex((step) => step.value === orderStatus);
    setCurrentStep(stepIndex >= 0 ? stepIndex : 0);
  }, [orderStatus]);

  return (
    <Box className="my-10">
      {statusStep.map((step, index) => (
        <div key={index} className="flex px-4">
          <div className="flex flex-col items-center">
            <Box
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index <= currentStep
                  ? "bg-teal-500 text-white" // Teal for completed steps
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {step.value === orderStatus ? (
                <CheckCircleIcon />
              ) : (
                <FiberManualRecordIcon sx={{ zIndex: -1 }} />
              )}
            </Box>

            {index < statusStep.length - 1 && (
              <div
                className={`border h-20 w-[2px] ${
                  index < currentStep ? "bg-teal-500" : "bg-gray-300"
                }`}
              />
            )}
          </div>

          <div className="ml-2 w-full">
            <div
              className={`p-2 font-medium rounded-md translate-y-3 ${
                step.value === orderStatus
                  ? orderStatus === "CANCELLED"
                    ? "bg-red-500 text-white"
                    : "bg-primary-color text-white"
                  : ""
              } w-full`}
            >
              <p className={step.value === orderStatus ? "text-white" : ""}>
                {step.name}
              </p>
              <p
                className={`${
                  step.value === orderStatus ? "text-gray-200" : "text-gray-500"
                } text-xs`}
              >
                {step.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Box>
  );
};

export default OrderStepper;
