// GetAll.tsx
import React from "react";
import { useGetAllProductsQuery } from "../../app/services/ProductServices"; // Adjust the import path accordingly
import { Product } from "../../app/Types/types"; // Import the Product type from types.ts

const GetAll: React.FC = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery();

  if (isError) {
    return <h1>Error happens</h1>;
  }

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  console.log("data", data);

  return (
    <div>
      <h1 style={{ color: "red", textAlign: "center" }}>All Products</h1>
      {data?.products.map((p: Product) => (
        <div key={p.id}>
          <h1>Product Name: {p.title}</h1>
          <p>Description: {p.description}</p>
          <p>Price: ${p.price.toFixed(2)}</p>
          {/* Add other product details as needed */}
        </div>
      ))}
    </div>
  );
};

export default GetAll;
