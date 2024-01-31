import { createSlice } from "@reduxjs/toolkit";

const calculatePrice = (selectedTypes) => {
  if (selectedTypes === "arcade") {
    return 9;
  } else if (selectedTypes === "advanced") {
    return 12;
  } else if (selectedTypes === "pro") {
    return 15;
  }
};

const calculateTotalPrice = (selectedAddOns, selectedTypes) => {
  let total = calculatePrice(selectedTypes);
  for (const addOn in selectedAddOns) {
    if (selectedAddOns[addOn].selected) {
      total += selectedAddOns[addOn].price;
    }
  }
  return total;
};

const initialState = {
  user: {},
  step: 1,
  userDetails: {
    name: "",
    email: "",
    phone: "",
  },
  selectedPlan: "",
  selectedTypes: "",
  selectedAddOns: {
    onlineService: {
      selected: false,
      price: 1,
      name: "Online service Access to multiplayer games",
    },
    largerStorage: {
      selected: false,
      price: 2,
      name: "Larger storage Extra 1TB of cloud save",
    },
    customizableProfile: {
      selected: false,
      price: 2,
      name: "Customizable Profile Custom theme on your profile",
    },
  },
  total: 0,
};

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    setSelectedPlan: (state, action) => {
      state.selectedPlan = action.payload;
    },
    setSelectedAddOns: (state, { payload }) => {
      state.selectedAddOns = payload;
      state.total = calculateTotalPrice(
        state.selectedAddOns,
        state.selectedTypes
      );
    },
    toggleAddOn: (state, action) => {
      const { addOn } = action.payload;
      state.selectedAddOns[addOn].selected =
        !state.selectedAddOns[addOn].selected;
      state.total = calculateTotalPrice(
        state.selectedAddOns,
        state.selectedTypes
      );
    },
    setSelectedTypes: (state, action) => {
      state.selectedTypes = action.payload;
      state.total = calculatePrice(state.selectedTypes);
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setPrice: (state) => {
      state.total = calculatePrice(state.selectedTypes);
    },
    setTotalPrice: (state) => {
      state.total = calculateTotalPrice(state.selectedAddOns);
    },
    clearState: (state) => {
      state.userDetails = {};
    },
  },
});

export const {
  setUserDetails,
  setSelectedPlan,
  setSelectedAddOns,
  setSelectedTypes,
  setStep,
  toggleAddOn,
  setPrice,
  setTotalPrice,
  saveUser,
  clearState,
} = inputSlice.actions;
export default inputSlice.reducer;
