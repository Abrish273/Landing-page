// useFetchProducts.ts
import { useState, useEffect } from "react";
import {
  deleteData,
  fetchProducts,
  postData,
  putData,
  searchProd,
} from "../api/testApi";
import { ProductRequestType, ProductResponseType } from "../Types/test";

// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../store"; // adjust the path as needed
// import {
//   setSearchLoading,
//   setSearchError,
//   setSearchProduct,
// } from "../../slices/searchSlices";

export const useFetchProducts = () => {
  const [data, setData] = useState<ProductResponseType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [addloading, setAddLoading] = useState<boolean>(true);
  const [lastAddedProduct, setLastAddedProduct] =
    useState<ProductResponseType | null>(null);
  const [updateError, setUpdateError] = useState<string | null>(null);
  const [addError, setAddError] = useState<string | null>(null);
  const [updateloading, setUpdateLoading] = useState<boolean>(true);
  const [lastUpdatedProduct, setLastUpdatedProduct] =
    useState<ProductResponseType | null>(null); // State to store the last updated product
  const [deleteloading, setDeleteLoading] = useState<boolean>(true);
  const [deleteError, setDeleteError] = useState<string | null>(null);
  // ==================
  const [searchProduct, setSearchProduct] = useState<
    ProductResponseType[] | null
  >(null);
  const [searchLoading, setSearchLoading] = useState<boolean>(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchProducts();
        setData(response);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, []);

  const addProduct = async (newProduct: ProductRequestType): Promise<void> => {
    setAddLoading(true);
    setAddError(null);
    try {
      const response = await postData(newProduct);
      setLastAddedProduct(response); // Store the response of the last added product
      // setData((prevData) => (prevData ? [...prevData, response] : [response]));
    } catch (error) {
      setAddError((error as Error).message);
      throw error;
    } finally {
      setAddLoading(false);
    }
  };

  // for PUT request
  const updateProduct = async (
    updatedProduct: ProductRequestType
  ): Promise<void> => {
    setUpdateLoading(true);
    setUpdateError(null);
    try {
      const response = await putData(updatedProduct);
      setLastUpdatedProduct(response);
      // Update GLOBAL data state if needed --------------------------------------------------------
      // return response; // ??? JUST AN IDEA TO RETURN THE RESPONSE -------------------------------
    } catch (error) {
      setUpdateError((error as Error).message);
    } finally {
      setUpdateLoading(false);
    }
  };

  // for DELETE request
  const deleteProduct = async (
    productToDelete: ProductRequestType
  ) /*: Promise<void>*/ => {
    setDeleteLoading(true);
    setDeleteError(null);
    try {
      const response = await deleteData(productToDelete.id);
      return response;
      // Optionally, update GLOBAL data state if needed
      // Example: dispatch({ type: 'DELETE_PRODUCT', payload: productToDelete.id });
      // return response;
    } catch (error) {
      setDeleteError((error as Error).message);
    } finally {
      setDeleteLoading(false);
    }
  };
  // for SEARCH request
  const searchProducts = async (
    query: string
  ): Promise<void | ProductResponseType[]> => {
    setSearchLoading(true);
    setSearchError(null);
    try {
      console.log("query in search product =-==-=-= >>><<<", query);
      const response = await searchProd(query);
      console.log("response in search product", response);
      setSearchProduct(response);
      return response;
    } catch (error) {
      setSearchError((error as Error).message);
    } finally {
      setSearchLoading(false);
    }
  };
  // const searchProducts = async (
  //   query: string
  // ): Promise<void | ProductResponseType[]> => {
  //   const dispatch = useDispatch<AppDispatch>();

  //   dispatch(setSearchLoading(true));
  //   dispatch(setSearchError(null));
  //   try {
  //     console.log("query in search product =-==-=-= >>><<<", query);
  //     const response = await searchProd(query);
  //     console.log("response in search product", response);
  //     dispatch(setSearchProduct(response));
  //     return response;
  //   } catch (error) {
  //     dispatch(setSearchError((error as Error).message));
  //   } finally {
  //     dispatch(setSearchLoading(false));
  //   }
  // };

  return {
    data,
    loading,
    error,
    addProduct,
    addloading,
    addError,
    updateProduct,
    updateloading,
    updateError,
    lastAddedProduct,
    lastUpdatedProduct,
    deleteProduct,
    deleteloading,
    deleteError,
    searchProducts,
    searchProduct,
    searchLoading,
    searchError,
  };
};
