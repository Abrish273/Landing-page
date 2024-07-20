// types.ts
import { productApi } from "../services/ProductServices"; // Adjust the import path accordingly

export type UseGetAllProductsQueryResult = ReturnType<
  typeof productApi.endpoints.getAllProducts.useQuery
>;
// export type UseGetProductByIdQueryResult = ReturnType<
//   typeof productApi.endpoints.getProductById.useQuery
// >;
// export type UseAddNewProductMutationResult = ReturnType<
//   typeof productApi.endpoints.addNewProduct.useMutation
// >;
// export type UseUpdateProductMutationResult = ReturnType<
//   typeof productApi.endpoints.updateProduct.useMutation
// >;
// export type UseDeleteProductMutationResult = ReturnType<
//   typeof productApi.endpoints.deleteProduct.useMutation
// >;
