import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { productApi } from "./services/ProductServices";
// import searchReducer from "../slices/searchSlices";
// Import any other APIs if needed

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    // search: searchReducer,
    // Add other API reducers if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware /* , otherApi.middleware */
    ),
});

export type RootState = ReturnType<typeof rootReducer>;

// export type RootStates = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
