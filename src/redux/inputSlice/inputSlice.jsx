import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  userDetails: {
    name: "",
    email: "",
    phone: "",
  },
  selectedPlan: "",
  selectedAddOns: {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  },
};

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    setSelectedPlan: (state, action) => {
      state.selectedPlan = action.payload;
    },
    setSelectedAddOns: (state, action) => {
      state.selectedAddOns = action.payload;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const { setUserDetails, setSelectedPlan, setSelectedAddOns, setStep } =
  inputSlice.actions;
export default inputSlice.reducer;
