import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStep, setSelectedPlan } from "../redux/inputSlice/inputSlice";

const StepTwo = () => {
  const { step, selectedPlan } = useSelector((state) => state.input);
  const dispatch = useDispatch();
  console.log(selectedPlan, "selectedPlan");

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10 md:flex-row md:justify-between md:items-center md:w-[450px] md:mx-auto md:gap-4">
        <FormControl
          sx={{
            minWidth: 200,
            // display: "flex",
            // flexDirection: "column",
            // gap: "10px",
            // mt: 2,
            // justifyItems: "center",
            // alignItems: "center",
          }}
        >
          <InputLabel id="demo-simple-select-label">Plan</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedPlan}
            label="Plan"
            onChange={(e) => dispatch(setSelectedPlan(e.target.value))}
          >
            <MenuItem value={"monthly"}>Monthly</MenuItem>
            <MenuItem value={"yearly"}>Yearly</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="container mx-auto w-[450px] flex flex-col justify-between items-center md:flex">
        <button
          className="text-center mt-6 p-2 w-[200px] bg-green-500 text-white text-sm rounded-lg"
          onClick={() => dispatch(setStep(1))}
        >
          Back
        </button>
        <button
          className="text-center mt-6 p-2 w-[200px] bg-blue-500 text-white text-sm rounded-lg"
          onClick={() => dispatch(setStep(3))}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
