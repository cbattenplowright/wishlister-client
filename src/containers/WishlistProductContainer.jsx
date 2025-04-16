import React from "react";
import Product from "../components/product-components/Product";
import "./WishlistProductContainer.css";
import { useProduct } from "../hooks/ProductProvider";

const WishlistProductContainer = () => {
  const productContext = useProduct();

  return (
    <div className="wishlist-product-container">
      <h1>Wishlist Product Container</h1>
      <Product product={productContext.product} />
    </div>
  );
};

export default WishlistProductContainer;
