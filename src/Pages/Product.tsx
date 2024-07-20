// MyComponent.tsx
import React from "react";
import { useFetchProducts } from "../app/services/testServices";
import ProductCard from "../components/test/ProductCard";
import ProductCardSkeleton from "../components/test/skeletons/ProductCardSkeleton";
import { CustomBtn } from "../components";
import { useNavigate } from "react-router-dom";

interface Product {
  id: string;
  images: string[];
  name: string;
  price: number;
}

interface Data {
  products: Product[];
}

const Product: React.FC<Data> = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useFetchProducts();

  console.log("data", data);
  console.log("loading", loading);
  console.log("error", error);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div>
        <CustomBtn
          type="type_one"
          label="Add Product"
          onClick={() => {
            navigate("/addproduct");
          }}
        />
        <CustomBtn
          type="type_one"
          label="Update Product"
          onClick={() => {
            navigate("/updateproduct");
          }}
        />
        <CustomBtn
          type="type_two"
          label="Search Products"
          onClick={() => {
            navigate("/searchproduct");
          }}
        />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
        {loading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))
        ) : data ? (
          data.products.map((product) => (
            <ProductCard
              key={product.id}
              images={product.images}
              name={product.name}
              price={product.price}
            />
          ))
        ) : (
          <p>Something went wrong</p>
        )}
      </div>
    </div>
  );
};

export default Product;
