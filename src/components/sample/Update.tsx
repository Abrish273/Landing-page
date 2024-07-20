// UpdateProduct.tsx
import React from "react";
import { useUpdateProductMutation } from "../../app/services/ProductServices"; // Adjust the import path accordingly
// import { Product } from "../types"; // Import the Product type from types.ts

interface UpdateProductProps {
  productId: number;
}

const UpdateProduct: React.FC<UpdateProductProps> = ({ productId }) => {
  const [updateProduct, { isError, isLoading, data }] =
    useUpdateProductMutation();

  const handleUpdate = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    try {
      const updatedProductData: Partial<Product> = {
        description: "Updated Description",
        // Add other fields to update as needed
      };

      const UpdareResponse = await updateProduct({
        id: productId,
        updatedProduct: updatedProductData,
      });
      console.log("Update Response", UpdareResponse);
    } catch (error) {
      console.log("Error happens during updating.", error);
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
        onClick={handleUpdate}
        disabled={isLoading}
        style={{
          background: "green",
          padding: "15px 30px",
          border: "none",
          borderRadius: "10px",
        }}
      >
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
