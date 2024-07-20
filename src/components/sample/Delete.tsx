// DeleteProduct.tsx
import React from "react";
import { useDeleteProductMutation } from "../../app/services/ProductServices"; // Adjust the import path accordingly
// import { Product } from "../types"; // Import the Product type from types.ts

interface DeleteProductProps {
  productId: number;
}

const DeleteProduct: React.FC<DeleteProductProps> = ({ productId }) => {
  const [deleteProduct, { isError, isLoading, data }] =
    useDeleteProductMutation();

  const handleDeleteProduct = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    try {
      const DeletedResponse = await deleteProduct(productId);
      console.log("Delete Response", DeletedResponse);
    } catch (error) {
      console.log("Error in deleting product", error);
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
      <h1>{data?.title ? `${data.title} successfully deleted.` : ""}</h1>
      <button
        onClick={handleDeleteProduct}
        disabled={isLoading}
        style={{
          background: "green",
          padding: "15px 30px",
          border: "none",
          borderRadius: "10px",
        }}
      >
        Delete Product
      </button>
    </div>
  );
};

export default DeleteProduct;
