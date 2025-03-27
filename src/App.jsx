import { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginContainer from "./containers/LoginContainer";
import RegisterContainer from "./containers/RegisterContainer";
import WishlistListContainer from "./containers/WishlistListContainer";
import WishlistProductListContainer from "./containers/WishlistProductListContainer";
import WishlistProductContainer from "./containers/WishlistProductContainer";
import LayoutContainer from "./containers/LayoutContainer";
import AuthProvider from "./hooks/AuthProvider";
import PrivateRoute from "./router/PrivateRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LayoutContainer />}>
              <Route index element={<LoginContainer />} />
              <Route element={<PrivateRoute />}>
                <Route path="/register" element={<RegisterContainer />} />
                <Route path="/wishlists" element={<WishlistListContainer />} />
                <Route
                  path="/wishlist/:wishlistId"
                  element={<WishlistProductListContainer />}
                />
                <Route
                  path="/wishlist/:wishlistId/product/:productId"
                  element={<WishlistProductContainer />}
                />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
        <h1>This is a h1 tag</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
