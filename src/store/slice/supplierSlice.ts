/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ISupplier {
  supplierData: any[]
}
const initialState: ISupplier = {
  supplierData: [],
}

export const supplierSlice = createSlice({
  name: "supplier",
  initialState,
  reducers: {
    updateSupplierList: (state, action) => {
      return {
        ...state,
        supplierData: action.payload,
      }
    },
    updateSupplierData: (state, action) => {
      const { id, key, value } = action.payload
      return {
        ...state,
        supplierData: state.supplierData.map((ele) => ele.id === id
          ? { ...ele, [key]: value }
          : { ...ele })
      }
    },
    editSupplier: (state, action) => {
      const { id, values } = action.payload
      return {
        ...state,
        supplierData: state.supplierData.map((ele) => ele.id === id
          ? values : ele)
      }
    }
  }
})

export const {
  updateSupplierList,
  updateSupplierData,
  editSupplier,
} = supplierSlice.actions;

export const supplierSelector = (state: RootState): object => state.supplier;
export default supplierSlice.reducer;