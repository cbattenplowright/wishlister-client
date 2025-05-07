import React, { useEffect } from "react";
import Product from "../components/product-components/Product";
import "./WishlistProductContainer.css";
import { useProduct } from "../hooks/ProductProvider";
import { useAuth } from "../hooks/AuthProvider";

const WishlistProductContainer = () => {
  const auth = useAuth();
  const productContext = useProduct();

  const fetchProduct = async () => {
    try {
      console.log(
        `Fetching product for productId: ${productContext.product.productId}`
      );

      const response = await fetch(
        // `https://wishlister-h2tf.onrender.com/api/products/${auth.user.userAccountId}/${productContext.product.productId}`,
        `http://localhost:8080/api/products/${auth.user.userAccountId}/${productContext.product.productId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Basic ${btoa(
              `${auth.user.email}:${auth.credentials}`
            )}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const res = await response.json();

      if (res) {
        console.log("Product has been set to: " + res);
        productContext.setProduct(res);
      }
    } catch (err) {
      console.error("Error fetching product:", err);
    }
  };

  const updateProduct = async (productItem) => {
    try {
      const response = await fetch(
        // `https://wishlister-h2tf.onrender.com/api/products/${auth.user.userAccountId}/${productContext.product.productId}`
        `http://localhost:8080/api/products/${auth.user.userAccountId}/${productContext.product.productId}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Basic ${btoa(
              `${auth.user.email}:${auth.credentials}`
            )}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productItem),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Optionally refresh the product data after update
      await fetchProduct();
    } catch (err) {
      console.error(`Error saving product:`, err);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(
        // `https://wishlister-h2tf.onrender.com/api/products/${auth.user.userAccountId}/${productContext.product.productId}`
        `http://localhost:8080/api/products/${auth.user.userAccountId}/${productId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Basic ${btoa(
              `${auth.user.email}:${auth.credentials}`
            )}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await fetchProduct();
    } catch (err) {
      console.error(`Error deleting product:`, err);
    }
  };

  useEffect(() => {
    if (auth.user) {
      console.log(`WishlistProductContainer rendering with user, ` + auth.user);
      fetchProduct();
    }
  }, [auth.user, location.pathname]);

  return (
    <div className="wishlist-product-container">
      <h1>Wishlist Product Container</h1>
      <Product
        product={productContext.product}
        updateProduct={updateProduct}
        deleteProduct={deleteProduct}
      />
    </div>
  );
};

export default WishlistProductContainer;
