import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setStep,
  setSelectedAddOns,
  toggleAddOn,
} from "./../redux/inputSlice/inputSlice";

const StepThree = () => {
  const dispatch = useDispatch();
  const { selectedAddOns } = useSelector((state) => state.input);
  // console.log("selected ", selectedAddOns);
  const handleAddOnToggle = (addOn) => {
    dispatch(toggleAddOn({ addOn }));
  };
  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <div className="mt-8">
        <FormGroup
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            alignItems: "start",
            justifyContent: "center",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                checked={selectedAddOns.onlineService.selected}
                onChange={() => handleAddOnToggle("onlineService")}
              />
            }
            label="Online service Access to multiplayer games ($1/month)"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                checked={selectedAddOns.largerStorage.selected}
                onChange={() => handleAddOnToggle("largerStorage")}
              />
            }
            label="Larger storage Extra 1TB of cloud save ($2/month)"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                checked={selectedAddOns.customizableProfile.selected}
                onChange={() => handleAddOnToggle("customizableProfile")}
              />
            }
            label="Customizable Profile Custom theme on your profile ($2/month)"
          />
        </FormGroup>
      </div>

      <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-8">
        <button
          className="text-center mt-6 p-2 w-[200px] bg-green-500 text-white text-sm rounded-lg"
          onClick={() => dispatch(setStep(2))}
        >
          Back
        </button>
        <button
          className="text-center mt-6 p-2 w-[200px] bg-blue-500 text-white text-sm rounded-lg disabled:opacity-25"
          onClick={() => dispatch(setStep(4))}
          disabled={
            !selectedAddOns.onlineService.selected &&
            !selectedAddOns.largerStorage.selected &&
            !selectedAddOns.customizableProfile.selected
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepThree;
