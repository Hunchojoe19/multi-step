import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setStep,
  setSelectedPlan,
  setSelectedTypes,
  setPrice,
} from "../redux/inputSlice/inputSlice";

const StepTwo = () => {
  const { selectedPlan, selectedTypes } = useSelector((state) => state.input);
  const dispatch = useDispatch();
  // console.log(selectedPlan, "selectedPlan");
  // console.log(selectedTypes, "selectedTypes");

  const handleChange = (e) => {
    dispatch(setSelectedTypes(e.target.value));
    dispatch(setPrice(selectedTypes));
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <div className="mt-8">
        <FormControl
          sx={{
            minWidth: 200,
          }}
        >
          <InputLabel id="demo-simple-select-label">Plan</InputLabel>
          <Select
            labelId="selected-plan"
            id="plan"
            value={selectedPlan}
            label="Plan"
            onChange={(e) => dispatch(setSelectedPlan(e.target.value))}
          >
            <MenuItem value={"monthly"}>Monthly</MenuItem>
            <MenuItem value={"yearly"}>Yearly</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="mt-12">
        <FormControl
          sx={{
            minWidth: 200,
          }}
        >
          <InputLabel id="demo-simple-select-label">Select Type</InputLabel>
          <Select
            labelId="selected-types"
            id="types"
            value={selectedTypes}
            label="Types"
            onChange={handleChange}
          >
            <MenuItem value={"arcade"}>Arcade $9/month</MenuItem>
            <MenuItem value={"advanced"}>Advanced $12/month</MenuItem>
            <MenuItem value={"pro"}>Pro $15/month</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-8">
        <button
          className="text-center mt-6 p-2 w-[200px] bg-green-500 text-white text-sm rounded-lg"
          onClick={() => dispatch(setStep(1))}
        >
          Back
        </button>
        <button
          className="text-center mt-6 p-2 w-[200px] bg-blue-500 text-white text-sm rounded-lg disabled:opacity-25"
          disabled={!selectedPlan || !selectedTypes}
          type="submit"
          onClick={() => dispatch(setStep(3))}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
