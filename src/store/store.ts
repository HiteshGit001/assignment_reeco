import { configureStore } from "@reduxjs/toolkit";
import supplierSlice from "./slice/supplierSlice";

export const store = configureStore({
  reducer: {
    supplier: supplierSlice
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;