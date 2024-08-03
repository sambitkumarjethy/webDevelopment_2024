import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllproducts, fetchProductsByFilter } from "./productAPI";

const initialState = {
  products: [],
  status: "idle",
};
export const fetchAllproductsAsync = createAsyncThunk(
  "product/fetchAllproducts",
  async () => {
    const response = await fetchAllproducts();
    // The value we return becomes the `fulfilled` action payload
    console.log(response.data);
    return response.data;
  }
);

export const fetchAllproductsFiltersAsync = createAsyncThunk(
  "product/fetchAllproductsByFilterss",

  async ({ filter, sort }) => {
    console.log({ filter, sort });
    const response = await fetchProductsByFilter(filter, sort);
    // The value we return becomes the `fulfilled` action payload
    console.log(response.data);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllproductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllproductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchAllproductsFiltersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllproductsFiltersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      });
  },
});

export const { increment } = productSlice.actions;

export const selectAllProducts = (state) => state.product.products;
export default productSlice.reducer;
