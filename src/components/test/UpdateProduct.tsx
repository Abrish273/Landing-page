import React, { useState, useEffect } from "react";
import { useFetchProducts } from "../../app/services/testServices";
import { ProductRequestType, ProductResponseType } from "../../app/Types/test";
import CustomBtn from "../CustomBtn";
// import DeleteProduct from "../sample/Delete";

const UpdateProduct: React.FC = () => {
  const {
    updateProduct,
    updateloading,
    deleteProduct,
    deleteloading,
    lastUpdatedProduct,
    updateError,
    deleteError,
  } = useFetchProducts();
  const [productId, setProductId] = useState<string>(""); // State to store the ID of the product to update
  const [updatedProductName, setUpdatedProductName] = useState<string>("");
  const [updatedProductPrice, setUpdatedProductPrice] = useState<number>(0);

  useEffect(() => {
    // Fetch initial data or set initial state as needed
  }, []);

  const handleUpdateProduct = async () => {
    try {
      const updatedProduct: ProductRequestType = {
        id: "1",
        brand: updatedProductName,
        price: updatedProductPrice,
        // Add other fields as per ProductRequestType
      };
      console.log("updatedProduct", updatedProduct);
      await updateProduct(updatedProduct);
      // console.log("response in update product", response);
      // Optionally update local state or reset form fields
      setProductId("");
      setUpdatedProductName("");
      setUpdatedProductPrice(0);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleDeleteProduct = async () => {
    try {
      // Assuming productId is set and you have a way to identify the product to delete
      const productToDelete: ProductRequestType = {
        id: "1",
        brand: "", // Add a value for the brand property
        price: 0, // Add a value for the price property
        // Optionally, add other fields needed for deletion
      };
      const deleteResponse = await deleteProduct(productToDelete);
      console.log("deleteResponse", deleteResponse);
      // Optionally update local state or notify the user
      setProductId("");
      setUpdatedProductName("");
      setUpdatedProductPrice(0);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <h1>Update Product:</h1>
      {updateError && <p>UpdateError: {updateError}</p>}
      {deleteError && <p>DeleteError: {deleteError}</p>}
      <input
        type="text"
        placeholder="Updated Product Name"
        value={updatedProductName}
        onChange={(e) => setUpdatedProductName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Updated Price"
        value={updatedProductPrice}
        onChange={(e) => setUpdatedProductPrice(Number(e.target.value))}
      />
      <CustomBtn
        type="type_one"
        label="Update Product"
        onClick={handleUpdateProduct}
        loading={updateloading ? true : false}
      />
      <CustomBtn
        type="type_two"
        label="Delete Product"
        onClick={handleDeleteProduct}
        loading={deleteloading ? true : false}
      />
      {lastUpdatedProduct && (
        <div>
          <h2>Last Updated Product:</h2>
          <p>Name: {lastUpdatedProduct.brand}</p>
          <p>Price: ${lastUpdatedProduct.price}</p>
          {/* Add other fields as needed */}
        </div>
      )}
    </div>
  );
};

export default UpdateProduct;
