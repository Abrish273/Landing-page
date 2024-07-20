import React, { useState, useEffect } from "react";
import { useFetchProducts } from "../../app/services/testServices";
import { ProductRequestType } from "../../app/Types/test";
import CustomBtn from "../CustomBtn";

const AddProduct: React.FC = () => {
   const { addProduct, lastAddedProduct, addloading, addError } =
     useFetchProducts();
   const [newProductName, setNewProductName] = useState<string>("");
   const [newProductPrice, setNewProductPrice] = useState<number>(0);

   useEffect(() => {
     // Optionally fetch products on component mount
     // This is handled inside useFetchProducts hook
   }, []);

    const handleAddProduct = async () => {
      try {
        const newProduct: ProductRequestType = {
          id: "1",
          brand: newProductName,
          price: newProductPrice,
          // Add other fields as per ProductRequestType
        };

        await addProduct(newProduct);

        setNewProductName("");
        setNewProductPrice(0);
      } catch (error) {
        console.error("Error adding product:", error);
      }
    };

  return (
    <div>
      <h1>Add a Product:</h1>
      {addError && <p>AddError: {addError}</p>}
      <input
        type="text"
        placeholder="Product Name"
        value={newProductName}
        onChange={(e) => setNewProductName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={newProductPrice}
        onChange={(e) => setNewProductPrice(Number(e.target.value))}
      />
      <CustomBtn
        type="type_one"
        label="Add Product"
        onClick={handleAddProduct}
        loading={addloading ? true : false}
      />
      {lastAddedProduct && (
        <div>
          <h2>Last Added Product:</h2>
          <p>Name: {lastAddedProduct.brand}</p>
          <p>Price: ${lastAddedProduct.price}</p>
          {/* Add other fields as needed */}
        </div>
      )}
    </div>
  );
};

export default AddProduct;
