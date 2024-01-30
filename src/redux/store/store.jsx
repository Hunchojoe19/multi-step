import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "../inputSlice/inputSlice.jsx";

const store = configureStore({
  reducer: {
    input: inputSlice,
  },
});

export default store;
