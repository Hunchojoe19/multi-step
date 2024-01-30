import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserDetails, setStep } from "../redux/inputSlice/inputSlice";

const StepOne = () => {
  const { userDetails, step } = useSelector((state) => state.input);
  console.log(userDetails, "userDetails");
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setStep(2));
  };
  return (
    <div>
      <div>
        <TextField
          label="Full Name"
          name="fullName"
          variant="outlined"
          placeholder="Full Name"
          margin="normal"
          color="primary"
          required
          value={userDetails.name}
          onChange={(e) =>
            dispatch(setUserDetails({ ...userDetails, name: e.target.value }))
          }
        />
      </div>
      <div>
        <TextField
          label="Email Address"
          name="email"
          variant="outlined"
          placeholder="Email Address"
          margin="normal"
          color="primary"
          required
          value={userDetails.email}
          onChange={(e) =>
            dispatch(setUserDetails({ ...userDetails, email: e.target.value }))
          }
        />
      </div>
      <div>
        <TextField
          label="Phone number"
          name="phone"
          variant="outlined"
          required
          placeholder="+1 234 567 890"
          margin="normal"
          color="primary"
          value={userDetails.phone}
          onChange={(e) =>
            dispatch(setUserDetails({ ...userDetails, phone: e.target.value }))
          }
        />
      </div>
      <div>
        <button
          className="text-center mt-6 p-2 w-[200px] bg-blue-500 text-white text-sm rounded-lg"
          onClick={onClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepOne;
