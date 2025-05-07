import React, { useEffect, useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import Switch from "@mui/material/Switch";
import "./WishlistProductItem.css";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../hooks/WishlistProvider";
import { useProduct } from "../../hooks/ProductProvider";
import { useAuth } from "../../hooks/AuthProvider";
import IsPurchasedToggle from "../IsPurchasedToggle";


const WishlistProductItem = ({ wishlistProductItem, isShared, isOwner }) => {

    const auth = useAuth();
    const wishlistContext = useWishlist();
    const productContext = useProduct();
    const navigate = useNavigate();

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
                    // Refactor to be isPurchasedComponent as will use the component in the product.jsx file too
                    <IsPurchasedToggle
                        auth={auth}
                        wishlistProductItem={wishlistProductItem}
                        wishlistContext={wishlistContext}
                    />
                )}
            </button>
        </div>
    );
};

export default WishlistProductItem;
