// GetOneProduct.tsx
import React from "react";
import { useGetProductByIdQuery } from "../../app/services/ProductServices"; // Adjust the import path accordingly
// import { Product } from "../../app/Types/types"; // Import the Product type from types.ts

const GetOneProduct: React.FC = () => {
  const { data, isError, isLoading } = useGetProductByIdQuery(3); // Assuming you want to fetch product with ID 2

  if (isError) {
    return <h1>Error happens</h1>;
  }

  if (isLoading || !data) {
    return <h1>Loading ...</h1>;
  }

  console.log("dtata", data);

  return (
    <div>
      <h1>Get a specific product</h1>
      <h1>Title: {data.title}</h1>
      <p>Description: {data.description}</p>
      <p>Price: ${data.price.toFixed(2)}</p>
      {/* Add other product details as needed */}
    </div>
  );
};

export default GetOneProduct;
