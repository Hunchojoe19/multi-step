import React, { useEffect } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { useSelector, useDispatch } from "react-redux";
import StepLabel from "@mui/material/StepLabel";
import PreviewPage from "./PreviewPage";

const steps = ["Personal Information", "Select Plan", "Add-ons"];

const Holder = () => {
  const { step } = useSelector((state) => state.input);
  const stepper = (step) => {
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
    }
  };

  return (
    <div className="font-roboto text-3xl font-bold">
      <h2 className="text-3xl font-bold text-center mt-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-700">
        Registration Form
      </h2>
      <div className="mt-10">
        <Stepper activeStep={step - 1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>
                <span className="text-gray-400 text-lg">{label}</span>
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        {stepper(step)}
      </div>
    </div>
  );
};

export default Holder;
