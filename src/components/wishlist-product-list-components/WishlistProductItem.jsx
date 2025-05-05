import React, { useEffect } from "react";
import ShareIcon from "@mui/icons-material/Share";
import Switch from "@mui/material/Switch";
import "./WishlistProductItem.css";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../hooks/WishlistProvider";
import { useProduct } from "../../hooks/ProductProvider";
import { useState } from "react";
import { useAuth } from "../../hooks/AuthProvider";

const WishlistProductItem = ({ wishlistProductItem, isShared, isOwner }) => {
  console.log(wishlistProductItem);

  const auth = useAuth();
  const wishlistContext = useWishlist();
  const productContext = useProduct();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(wishlistProductItem.isPurchased);

  const label = {
    inputProps: { "aria-label": "switch for marking if product is purchased" },
  };

  const fetchPurchase = async (wishlistProductItem) => {
    try {
      const response = await fetch(
        // `https://wishlister-h2tf.onrender.com/api/wishlists/${wishlistContext.wishlistId}/products/${wishlistProductItem.productId}/purchase`,
        `http://localhost:8080/api/wishlist-products/${auth.user.userAccountId}/${wishlistProductItem.productId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Basic ${btoa(
              `${auth.user.email}:${auth.credentials}`
            )}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            wishlistId: wishlistContext.wishlistId,
            productId: wishlistProductItem.productId,
            isPurchased: checked,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const res = await response.json();
      console.log("Purchase updated:", res);
    } catch (err) {
      console.error("Error fetching purchase:", err);
    }
  };

  const handleClick = () => {
    try {
      console.log("WishlistProduct clicked:", wishlistProductItem);
      productContext.setProduct(wishlistProductItem);
      navigate(
        `/wishlist/${wishlistContext.wishlistId}/product/${wishlistProductItem.productId}`
      );
    } catch (err) {
      console.error("Error setting product:", err);
    }
  };

  const handlePurchaseToggle = async (e) => {
    e.preventDefault();
    try {
      await fetchPurchase(wishlistProductItem);
    } catch (err) {
      console.error("Error fetching purchase:", err);
    }
  };

  return (
    <div className="wishlist-product-item">
      <button className="wishlist-product-item-button" onClick={handleClick}>
        <img src="https://placehold.co/100" alt="photo of wishlist product" />
        <h2>{wishlistProductItem.productName}</h2>
        <p>£{wishlistProductItem.price}</p>
        {/* Only show share button if not shared and is owner */}
        {!isShared && isOwner && (
          <button>
            <ShareIcon />
          </button>
        )}
        {!isOwner && (
          <div
            className="is-purchased-switch"
            onClick={(e) => e.stopPropagation()}
          >
            <p>Purchased?</p>
            <Switch
              {...label}
              checked={checked}
              onChange={handlePurchaseToggle}
            />
          </div>
        )}
      </button>
    </div>
  );
};

export default WishlistProductItem;
