// import { ProductResponseType } from "../Types/test";
import { API_URL } from "..";
import { ProductRequestType, ProductResponseType } from "../Types/test";

// For GET Request
export const fetchProducts = async () /*:Promise<ProductResponseType[]>*/ => {
  const response = await fetch(`${API_URL}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // "Authorization": `Bearer ${TOKEN}`, // for token based authentication
    },
    // credentials: "include", // Include credentials (cookies)
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data /*: ProductResponseType[]*/ = await response.json();
  return data;
};

// ================================ |  |  ==============
// For POST Request

const fetchWithToken = async (
  url: string,
  options?: RequestInit
): Promise<Response> => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  // if (token) {
  //   headers["Authorization"] = `Bearer ${token}`;
  // }

  const response = await fetch(url, {
    ...options,
    headers,
    // credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response;
};

export const postData = async (
  requestData /*: ProductRequestType*/
) /*: Promise<ProductResponseType>*/ => {
  const response = await fetchWithToken(`${API_URL}/products/add`, {
    method: "POST",
    body: JSON.stringify(requestData),
  });

  const data /*: MyResponseType*/ = await response.json();
  console.log("data response in api", data);
  return data;
};

// ============================ |  | ======================
// For PUT Request
export const putData = async (
  requestData: ProductRequestType // Adjust type as per your request data structure
  // token?: string
): Promise<ProductResponseType> => {
  const response = await fetchWithToken(
    `${API_URL}/products/${requestData.id}`,
    {
      method: "PUT",
      body: JSON.stringify(requestData),
    }
  );

  const data = await response.json();
  console.log("Updated data response in api", data);
  return data;
};

// ============================ |  | ======================
// For DELETE Request
export const deleteData = async (
  id: string
) /*: Promise<{ message: string }>*/ => {
  const response = await fetchWithToken(`${API_URL}/products/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();
  // console.log("data response in api", data);
  return data;
};

// ============================ |  | ======================
// for SEARCH Request
export const searchProd = async (
  query: string
) /*: Promise<ProductResponseType[]>*/ => {
  console.log("query in api", query);
  const response = await fetchWithToken(
    `${API_URL}/products/search?q=${query}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log("response in api", response);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
};

// ============================ |  | ======================
// for FILTER Request
// export const filterProducts = async (
//   filter: string
// ) /*: Promise<ProductResponseType[]>*/ => {
//   const response = await fetchWithToken(
//     `${API_URL}/products/filter?filter=${filter}`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }

//   const data = await response.json();
//   return data;
// };

// // ============================ |  | ======================
// // for SORT Request
// export const sortProducts = async (
//   sortBy: string
// ) /*: Promise<ProductResponseType[]>*/ => {
//   const response = await fetchWithToken(
//     `${API_URL}/products/sort?sortBy=${sortBy}`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }

//   const data = await response.json();
//   return data;
// };

// // ============================ |  | ======================
// //  for PAGINATION Request
// export const paginateProducts = async (
//   page: number,
//   limit: number
// ) /*: Promise<ProductResponseType[]>*/ => {
//   const response = await fetchWithToken(
//     `${API_URL}/products/paginate?page=${page}&limit=${limit}`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }

//   const data = await response.json();
//   return data;
// };

// ============================ |  | ======================
