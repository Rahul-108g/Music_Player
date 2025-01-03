import { configureStore } from "@reduxjs/toolkit";
import Musicreducers from "../Feature/UserSlice";

export const Store = configureStore({
  reducer: {
    app: Musicreducers,
  },
});
