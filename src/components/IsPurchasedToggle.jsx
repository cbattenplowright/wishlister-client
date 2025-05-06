import React, { useState, useEffect } from 'react';
import Switch from '@mui/material/Switch';

const IsPurchasedToggle = ({ wishlistProductItem, auth, wishlistContext }) => {

    const [checked, setChecked] = useState(wishlistProductItem.purchased);

    const label = {
        inputProps: { "aria-label": "switch for marking if product is purchased" },
    };

    const fetchPurchase = async (
        userAccountId,
        wishlistProductId,
        productId,
        wishlistId,
        isPurchased,
        email,
        credentials,
        setChecked
    ) => {
        try {
          const response = await fetch(
            // `https://wishlister-h2tf.onrender.com/api/wishlists/${wishlistContext.wishlistId}/products/${wishlistProductItem.productId}/purchase`,
            `http://localhost:8080/api/wishlist-products/${userAccountId}/${wishlistProductId}`,
            {
              method: "PUT",
              headers: {
                Authorization: `Basic ${btoa(
                  `${email}:${credentials}`
                )}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                wishlistId: wishlistId,
                productId: productId,
                isPurchased: !isPurchased,
              }),
            }
          );
    
          if (!response.ok) {
            setChecked(!isPurchased);
            throw new Error(`HTTP error! status: ${response.status}`);
          }
    
          const res = await response.json();
          console.log("Purchase updated:", res);
          setChecked(res.purchased);
        } catch (err) {
          console.error("Error fetching purchase:", err);
        }
      };

    const handlePurchaseToggle = async (e) => {
        try {
            await fetchPurchase(
                auth.user.userAccountId,
                wishlistProductItem.wishlistProductId,
                wishlistProductItem.productId,
                wishlistContext.wishlistId,
                checked,
                auth.user.email,
                auth.credentials,
                setChecked
            );
        } catch (err) {
            console.error("Error fetching purchase:", err);
        }
    };

    useEffect(() => {
        setChecked(wishlistProductItem.purchased);
    }, [wishlistProductItem.purchased]);

    return (
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
    );
}

export default IsPurchasedToggle;