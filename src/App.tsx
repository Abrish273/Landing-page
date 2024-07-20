import { useEffect, useState } from "react";
import "./App.css";
import { Landing, Product } from "./Pages";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./containers";
import AddProduct from "./components/test/AddProduct";
import UpdateProduct from "./components/test/UpdateProduct";
import SearchProducts from "./components/test/SearchProducts";
import Spinner from "./utils/Spinner";
import { COLORS } from "./constants/theme";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  console.log("isOnline", isOnline);
  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);

  return (
    <div>
      {!isOnline ? (
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Landing />} />
            <Route path="products" element={<Product />} />
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="updateproduct" element={<UpdateProduct />} />
            <Route path="searchproduct" element={<SearchProducts />} />
          </Route>
        </Routes>
      ) : (
        <>
          {/* Best choice */}
          {/* <Spinner size={30} color={COLORS.primary} speed={0.3} /> */}
          {/* Best Choice */}
          {/* <Spinner size={70} color="green" speed={0.9} />
          <Spinner size={50} color="#e74c3c" speed={0.4} />
          <Spinner size={70} color="#e74c3c" speed={0.6} /> */}
          <div>404 No connection</div>
        </>
      )}
    </div>
  );
}

export default App;
