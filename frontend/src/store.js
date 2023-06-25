import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";

/*
 * configureStore is used to create the redux store for the application
 * It takes an object which contains the reducer
 */
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
//used in index.js