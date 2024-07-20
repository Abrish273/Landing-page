import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store"; // Adjust the path as per your project structure

// Define the interface for Product
interface Product {
  id: number;
  name: string;
  // Add other fields as needed
}

// Define the initial state
interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

// Create the slice
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.loading = false; // Set loading to false after data is fetched
      state.error = null; // Clear any previous errors
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false; // Set loading to false on error
    },
  },
});

// Export actions for dispatching
export const { setProducts, setLoading, setError } = productsSlice.actions;

// Selectors to access state
export const selectProducts = (state: RootState) => state.productApi.products;
export const selectLoading = (state: RootState) => state.productApi.loading;
export const selectError = (state: RootState) => state.productApi.error;

// Export the reducer
export default productsSlice.reducer;
