import React, { useState } from "react";
import { useFetchProducts } from "../../app/services/testServices";
import { ProductResponseType } from "../../app/Types/test";
import CustomBtn from "../CustomBtn";

const SearchProducts: React.FC = () => {
  const { searchProducts, searchProduct, searchLoading, searchError } =
    useFetchProducts();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchProduct = async () => {
    try {
      console.log("searchTerm", searchTerm);
      await searchProducts(searchTerm);
      setSearchTerm("");
    } catch (error) {
      console.error("Error searching product:", error);
    }
  };

  return (
    <div>
      <h1>Search Products:</h1>
      <input
        type="text"
        placeholder="Search Product"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <CustomBtn
        type="type_two"
        label="Search"
        onClick={handleSearchProduct}
        loading={searchLoading ? true : false}
      />
      {searchError && <p>Search Error: {searchError}</p>}
      {searchProduct && (
        <div>
          <h2>Search Results:</h2>
          {searchProduct.products.map((product: ProductResponseType) => (
            <div key={product.id}>
              <p>Name: {product.brand}</p>
              <p>Price: ${product.price}</p>
              {/* Add other fields as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchProducts;
