import { configureStore } from "@reduxjs/toolkit";
import fruitReducer from "../features/fruits/fruitsSlice";

const store = configureStore({
  reducer: {
    fruits: fruitReducer
  }
});

export default store;