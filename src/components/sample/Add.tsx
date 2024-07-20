// AddNewProduct.tsx
import React from "react";
import { useAddNewProductMutation } from "../../app/services/ProductServices"; // Adjust the import path accordingly
// import { Product } from "../types"; // Import the Product type from types.ts

const AddNewProduct: React.FC = () => {
  const [addNewProduct, { isError, isLoading, data }] =
    useAddNewProductMutation();

  const handleAddProduct = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    try {
      const newProductData: Product = {
        id: 1,
        title: "Amazing T-shirt",
        description: "Lorem ipsum dolor sit amet",
        // Add other fields as needed
      };

      const response = await addNewProduct(newProductData);
      console.log("response", response);
    } catch (error) {
      console.log("Error in adding product", error);
    }
  };

  if (isError) {
    return <h1>Error happens</h1>;
  }

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div>
      <h1>{data?.description}</h1>{" "}
      {/* Adjust based on your API response structure */}
      <button
        onClick={handleAddProduct}
        disabled={isLoading}
        style={{
          background: "green",
          padding: "15px 30px",
          border: "none",
          borderRadius: "10px",
        }}
      >
        Add New Product
      </button>
    </div>
  );
};

export default AddNewProduct;
