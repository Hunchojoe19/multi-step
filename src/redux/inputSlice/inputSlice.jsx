import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "input",
  initialState: {
    usersData: [],
    currentInput: 1,
  },
  reducers: {
    addInput: (state, action) => {
      state.usersData.push(action.payload);
    },
    setCurrentInput: (state, action) => {
      state.currentInput = action.payload;
    },
  },
});

export const { addInput, setCurrentInput } = inputSlice.actions;
export default inputSlice.reducer;
