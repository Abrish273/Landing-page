import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductResponseType } from "../app/Types/test";

interface SearchState {
  loading: boolean;
  error: string | null;
  products: ProductResponseType[] | null;
}

const initialState: SearchState = {
  loading: false,
  error: null,
  products: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setSearchError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setSearchProduct(
      state,
      action: PayloadAction<ProductResponseType[] | null>
    ) {
      state.products = action.payload;
    },
  },
});

export const { setSearchLoading, setSearchError, setSearchProduct } =
  searchSlice.actions;

export default searchSlice.reducer;
